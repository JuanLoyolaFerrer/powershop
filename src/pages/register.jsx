import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarios from '../components/user/users-list';
import './register.css';

export default function Registro() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    user: '',
    contraseña: '',
    confirmarContraseña: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validaciones
    if (
      !formData.name ||
      !formData.lastname ||
      !formData.user ||
      !formData.contraseña ||
      !formData.confirmarContraseña
    ) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (formData.contraseña !== formData.confirmarContraseña) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (formData.contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    const usuarioExistente = usuarios.find((u) => u.user === formData.user);
    if (usuarioExistente) {
      setError('Este usuario ya está registrado');
      return;
    }

    setSuccess('¡Registro exitoso! Redirigiendo al login...');
    ///CREAR EL USUARIO
    usuarios.push({
      id: usuarios.length+1,
      name: formData.name,
      lastname: formData.lastname,
      user: formData.user,
      tipo: "usuario",
      contraseña: formData.contraseña,
      featured: false
    })

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <div className="registro-header">
          <div className="registro-icon">⭐</div>
          <h1>Crear Cuenta</h1>
        </div>

        <form onSubmit={handleRegister} className="registro-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Tu apellido"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Usuario">Usuario</label>
            <input
              type="text"
              id="Usuario"
              name="user"
              value={formData.user}
              onChange={handleChange}
              placeholder="Elige tu usuario"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="contraseña"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmarContraseña"
                name="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                placeholder="Confirma tu contraseña"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="register-btn">
            Registrarse
          </button>
        </form>

        <div className="registro-footer">
          <p>
            ¿Ya tienes cuenta?{' '}
            <button
              className="login-link"
              onClick={() => navigate('/login')}
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>

      <div className="registro-background">
        <div className="bg-element">🌟</div>
        <div className="bg-element">💥</div>
        <div className="bg-element">✨</div>
      </div>
    </div>
  );
}