import React from 'react';
import '../styles/pilares.css';

const Footer = () => {
  return (
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
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2024 Conservatorio de Música "José Luis Paz". Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;