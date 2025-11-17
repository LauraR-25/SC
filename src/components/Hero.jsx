import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <h1>Conservatorio de Música<br/>"José Luis Paz"</h1>
        <p>Formación integral de músicos desde 1985</p>
        <div className="hero-buttons">
          <button className="btn-yellow">Únete Ahora</button>
          <button className="btn-outline">Conoce Más</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;