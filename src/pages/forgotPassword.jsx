import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarios from '../components/user/users-list';
import './forgotPassword.css';

export default function RecuperarContraseña() {
  const [step, setStep] = useState(1); // 1: buscar usuario, 2: cambiar contraseña
  const [usuario, setUsuario] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleBuscarUsuario = (e) => {
    e.preventDefault();
    setError('');

    const user = usuarios.find((u) => u.name === usuario);

    if (user) {
      setUsuarioEncontrado(user);
      setStep(2);
    } else {
      setError('Usuario no encontrado');
    }
  };

  const handleCambiarContraseña = (e) => {
    e.preventDefault();
    setError('');

    if (!nuevaContraseña || !confirmarContraseña) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (nuevaContraseña !== confirmarContraseña) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (nuevaContraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setSuccess('¡Contraseña actualizada correctamente!');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-card">
        <div className="recuperar-header">
          <div className="recuperar-icon">🔐</div>
          <h1>Recuperar Contraseña</h1>
        </div>

        {step === 1 ? (
          <form onSubmit={handleBuscarUsuario} className="recuperar-form">
            <p className="recuperar-info">
              Ingresa tu usuario para proceder con la recuperación de contraseña
            </p>

            <div className="form-group">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="recuperar-btn">
              Buscar Usuario
            </button>
          </form>
        ) : (
          <form onSubmit={handleCambiarContraseña} className="recuperar-form">
            <div className="usuario-info">
              <p className="info-label">Cambiar contraseña para:</p>
              <p className="usuario-nombre">
                {usuarioEncontrado?.name} {usuarioEncontrado?.lastname}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="nuevaContraseña">Nueva Contraseña</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="nuevaContraseña"
                  value={nuevaContraseña}
                  onChange={(e) => setNuevaContraseña(e.target.value)}
                  placeholder="Ingresa tu nueva contraseña"
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
                  value={confirmarContraseña}
                  onChange={(e) => setConfirmarContraseña(e.target.value)}
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

            <button type="submit" className="recuperar-btn">
              Cambiar Contraseña
            </button>

            <button
              type="button"
              className="volver-btn"
              onClick={() => {
                setStep(1);
                setUsuario('');
                setNuevaContraseña('');
                setConfirmarContraseña('');
                setError('');
              }}
            >
              Volver
            </button>
          </form>
        )}

        <div className="recuperar-footer">
          <button
            className="login-link-recuperar"
            onClick={() => navigate('/login')}
          >
            Volver a Login
          </button>
        </div>
      </div>

      <div className="recuperar-background">
        <div className="bg-element">🔒</div>
        <div className="bg-element">🔑</div>
        <div className="bg-element">⚙️</div>
      </div>
    </div>
  );
}