import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const getWelcome = () => {
    if (user.role === 'estudiante') return `Bienvenido Estudiante, ${user.name}`;
    if (user.role === 'profesor') return `Bienvenido Profesor, ${user.name} - ID: ${user.id || 'N/A'}`;
    return `Bienvenido Administrador, ${user.name} - ID: ${user.id || 'N/A'}`;
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>{getWelcome()}</h2>
        <button onClick={logout} className="btn-logout">Cerrar Sesión</button>
      </header>
      <main className="dashboard-main">
        <div className="status-card">
          <div className="icon">✓</div>
          <div className="text">
            <h3>✅ Login exitoso</h3>
            <p>Rol: {user.role} - Conexión verificada</p>
          </div>
        </div>
        <div className="dashboard-card">
          <h3>Contenido según tu rol</h3>
          {user.role === 'estudiante' && <p>Horarios, cursos, eventos...</p>}
          {user.role === 'profesor' && <p>Materias, alumnos, calendario...</p>}
          {user.role === 'admin' && <p>Gestión de usuarios y reportes</p>}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;