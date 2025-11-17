import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('currentUser'));
    if (stored && stored.email === email && stored.password === password && stored.role === role) {
      login(stored);
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Selecciona tu rol</option>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="admin">Administrador</option>
          </select>
          <button type="submit" className="btn-primary">Iniciar Sesión</button>
          <p className="toggle-link">¿No tienes cuenta? <button type="button" onClick={() => navigate('/register')}>Regístrate aquí</button></p>
        </form>
      </div>
    </div>
  );
};

export default Login;