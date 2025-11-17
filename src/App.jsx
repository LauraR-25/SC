import React from 'react';
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/pilares.css';
import './styles/oferta.css';
import './styles/footer.css';

export default function App() {
  return (
    <>
      {/* Header */}
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
            <a href="#inicio">Inicio</a>
            <a href="#programas">Programas</a>
            <a href="#areas">Áreas</a>
            <a href="#eventos">Eventos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="auth-buttons">
            <button className="btn-header-outline">Iniciar Sesión</button>
            <button className="btn-header-primary">Registrarse</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Nuestros Pilares */}
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
            <p>Formar músicos integrales con excelencia técnica y sensibilidad artística, comprometidos con el desarrollo cultural de nuestra sociedad.</p>
          </div>
          <div className="card visión">
            <div className="icon">
              <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.88-.69 6.9L12 19l-4.31 2.16-.69-6.9-5-4.88 6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Visión</h3>
            <p>Ser el conservatorio de referencia en formación musical, reconocido por la calidad de nuestros egresados y su impacto en la cultura musical nacional.</p>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
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

      {/* Oferta Académica */}
      <section className="oferta-section" id="programas">
        <h2>Oferta Académica</h2>
        <p className="subtitle">Descubre todos nuestros programas, áreas musicales y eventos</p>
        <div className="tabs">
          <button className="tab-btn active">Programas</button>
          <button className="tab-btn">Áreas Musicales</button>
          <button className="tab-btn">Eventos</button>
        </div>
        <div className="tab-content">
          <div className="programas-grid">
            <div className="programa-card">
              <h3>Programa Infantil</h3>
              <p className="edad">6-12 años</p>
              <p>Iniciación musical a través del juego y la exploración sonora.</p>
            </div>
            <div className="programa-card">
              <h3>Programa Juvenil</h3>
              <p className="edad">13-17 años</p>
              <p>Formación técnica avanzada con énfasis en repertorio clásico.</p>
            </div>
            <div className="programa-card">
              <h3>Programa Profesional</h3>
              <p className="edad">18+ años</p>
              <p>Formación de nivel superior con maestros de renombre.</p>
            </div>
            <div className="programa-card">
              <h3>Programa Adultos</h3>
              <p className="edad">Todas las edades</p>
              <p>Clases adaptadas para adultos con horarios flexibles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer" id="contacto">
        <div className="footer-container">
          <div className="footer-col">
            <h4>Conservatorio de Música<br/>"José Luis Paz"</h4>
            <p>Formando músicos con excelencia desde 1985</p>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <p>Av. Principal #123, Centro</p>
            <p>+52 (555) 123-4567</p>
            <p>info@conservatoriopaz.edu</p>
          </div>
          <div className="footer-col">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#">Facebook </a>
              <a href="#">Instagram </a>
              <a href="#">YouTube </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2025 Conservatorio de Música "José Luis Paz". Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}