import React from 'react';
import '../styles/pilares.css';

const Valores = () => {
  return (
    <section className="valores-section" id="valores">
      <h2>Nuestros Valores</h2>
      <div className="valores-grid">
        {[
          { title: "Excelencia Artística", desc: "Búsqueda constante de la perfección musical" },
          { title: "Formación Integral", desc: "Desarrollo humano y artístico completo" },
          { title: "Inclusión y Diversidad", desc: "Música accesible para todos" },
          { title: "Compromiso Cultural", desc: "Contribución al patrimonio musical" }
        ].map((v, i) => (
          <div className="card valor" key={i}>
            <div className="icon">
              <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.88-.69 6.9L12 19l-4.31 2.16-.69-6.9-5-4.88 6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Valores;