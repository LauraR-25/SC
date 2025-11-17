import React, { useState } from 'react';
import '../styles/pilares.css';

const OfertaAcademica = () => {
  const [activeTab, setActiveTab] = useState('programas');

  return (
    <section className="oferta-section" id="programas">
      <h2>Oferta Académica</h2>
      <p className="subtitle">Descubre todos nuestros programas, áreas musicales y eventos</p>
      <div className="tabs">
        <button className={activeTab === 'programas' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('programas')}>Programas</button>
        <button className={activeTab === 'areas' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('areas')}>Áreas Musicales</button>
        <button className={activeTab === 'eventos' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('eventos')}>Eventos</button>
      </div>
      <div className="tab-content">
        {activeTab === 'programas' && (
          <div className="programas-grid">
            <div className="programa-card"><h3>Programa Infantil</h3><p>6-12 años</p></div>
            <div className="programa-card"><h3>Programa Juvenil</h3><p>13-17 años</p></div>
          </div>
        )}
        {activeTab === 'areas' && (
          <div className="areas-grid">
            <div className="area-card"><h3>Piano</h3></div>
            <div className="area-card"><h3>Violín</h3></div>
          </div>
        )}
        {activeTab === 'eventos' && (
          <div className="eventos-list">
            <div className="evento-card"><h3>Concierto de Otoño</h3><p>15 de Noviembre</p></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OfertaAcademica;