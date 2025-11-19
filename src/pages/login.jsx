import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarios from '../components/user/users-list';
import './login.css';

export default function Login() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const usuario = usuarios.find(
      (u) => u.name === nombre && u.contraseña === contraseña
    );

    if (usuario) {
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
      navigate('/home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">🎮</div>
          <h1>Login Neon</h1>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="nombre">Usuario</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Ingresa tu contraseña"
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

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>

        <div className="login-footer">
          <button
            className="forgot-btn"
            onClick={() => navigate('/recuperar-contraseña')}
          >
            ¿Olvidaste tu contraseña?
          </button>
          <p>
            ¿No tienes cuenta?{' '}
            <button
              className="register-link"
              onClick={() => navigate('/registro')}
            >
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>

      <div className="login-background">
        <div className="bg-element">✨</div>
        <div className="bg-element">💫</div>
        <div className="bg-element">⚡</div>
      </div>
    </div>
  );
}