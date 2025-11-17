import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-container">
          <svg width="32" height="32" fill="#5d0067" viewBox="0 0 24 24">
            <path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12l-4 4h14l-4-4H10z"/>
          </svg>
          <div className="logo-text">
            <div>Conservatorio de Música</div>
            <div>"José Luis Paz"</div>
          </div>
        </div>

        <nav className="main-nav">
          <Link to="/">Inicio</Link>
          <Link to="/#programas">Programas</Link>
          <Link to="/#areas">Áreas</Link>
          <Link to="/#eventos">Eventos</Link>
          <Link to="/#contacto">Contacto</Link>
        </nav>

        <div className="auth-buttons">
          {user ? (
            <button onClick={logout} className="btn-header-primary">
              Cerrar Sesión
            </button>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="btn-header-outline">
                Iniciar Sesión
              </button>
              <button onClick={() => navigate('/register')} className="btn-header-primary">
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;