import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import '../styles/auth.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', id: '' });
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!role) return alert('Selecciona un rol');
    setStep(2);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) return alert('La contraseña debe tener al menos 6 caracteres');
    const newUser = { ...formData, role };
    register(newUser);
    navigate('/dashboard');
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h2>Registro</h2>
        {step === 1 ? (
          <div className="role-selector">
            <label><input type="radio" name="role" value="estudiante" onChange={() => setRole('estudiante')} /> Estudiante</label>
            <label><input type="radio" name="role" value="profesor" onChange={() => setRole('profesor')} /> Profesor</label>
            <label><input type="radio" name="role" value="admin" onChange={() => setRole('admin')} /> Administrador (pruebas)</label>
            <button type="button" onClick={handleNext} className="btn-primary">Continuar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre completo" required />
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Correo" required />
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Contraseña" required minLength="6" />
            {(role === 'profesor' || role === 'admin') && (
              <input name="id" value={formData.id} onChange={handleChange} placeholder="ID Institucional" required />
            )}
            <button type="submit" className="btn-primary">Registrarse</button>
            <p className="toggle-link">¿Ya tienes cuenta? <button type="button" onClick={() => navigate('/login')}>Inicia sesión</button></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;