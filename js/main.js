// Navegación SPA simulada (cambiar contenido sin recargar)
document.addEventListener('DOMContentLoaded', () => {
  // Botones de auth en header
  const btnLogin = document.getElementById('btn-login');
  const btnRegister = document.getElementById('btn-register');

  if (btnLogin) btnLogin.addEventListener('click', () => window.location.href = 'login.html');
  if (btnRegister) btnRegister.addEventListener('click', () => window.location.href = 'register.html');

  // Pestañas en oferta académica
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const tabId = btn.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(`${tabId}-content`).classList.add('active');
    });
  });

  // Cerrar sesión
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    });
  }
});