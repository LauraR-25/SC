import React from 'react';
import '../styles/pilares.css';

const Pilares = () => {
  return (
    <section className="pilares-section" id="pilares">
      <h2>Nuestros Pilares</h2>
      <p className="subtitle">Construyendo el futuro musical sobre bases sólidas</p>
      <div className="pilares-grid">
        <div className="card misión">
          <div className="icon">
            <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
              <path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12l-4 4h14l-4-4H10z"/>
            </svg>
          </div>
          <h3>Misión</h3>
          <p>Formar músicos integrales con excelencia técnica y sensibilidad artística...</p>
        </div>
        <div className="card visión">
          <div className="icon">
            <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.88-.69 6.9L12 19l-4.31 2.16-.69-6.9-5-4.88 6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3>Visión</h3>
          <p>Ser el conservatorio de referencia en formación musical...</p>
        </div>
      </div>
    </section>
  );
};

export default Pilares;