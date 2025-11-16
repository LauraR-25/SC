// Solo para login y dashboard

document.addEventListener('DOMContentLoaded', () => {
  // Si estamos en login.html
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;

      // Simulación: verificar si existe en localStorage
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));

      if (storedUser && 
          storedUser.email === email && 
          storedUser.password === password && 
          storedUser.role === role) {
        
        alert('Inicio de sesión exitoso');
        window.location.href = 'dashboard.html';
      } else {
        alert('Credenciales incorrectas o usuario no registrado.');
      }
    });
  }

  // Si estamos en dashboard.html
  if (window.location.pathname.includes('dashboard.html')) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      window.location.href = 'login.html';
      return;
    }

    const welcomeMsg = document.getElementById('welcome-message');
    const statusCard = document.querySelector('.status-card');
    const roleContent = document.getElementById('role-content');

    let welcomeText = '';
    let statusText = '';

    if (user.role === 'estudiante') {
      welcomeText = `Bienvenido Estudiante, ${user.name}`;
      statusText = `Rol: Estudiante - Conexión verificada`;
      roleContent.innerHTML = `
        <div class="dashboard-card">
          <h3>📅 Mis Horarios</h3>
          <p class="subtitle">Clases de esta semana</p>
          <div class="item">
            <h4>Lunes 10:00 - Piano</h4>
            <p>Aula 201</p>
          </div>
          <div class="item">
            <h4>Miércoles 14:00 - Teoría Musical</h4>
            <p>Aula 105</p>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>📚 Cursos Inscritos</h3>
          <p class="subtitle">Semestre actual</p>
          <div class="item">
            <h4>Piano Clásico I</h4>
            <p>Prof. García</p>
          </div>
          <div class="item">
            <h4>Teoría Musical</h4>
            <p>Prof. Martínez</p>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>🎵 Eventos Próximos</h3>
          <p class="subtitle">Actividades del conservatorio</p>
          <div class="item">
            <h4>Concierto de Otoño</h4>
            <p>15 de Noviembre</p>
          </div>
        </div>
      `;
    } else if (user.role === 'profesor') {
      welcomeText = `Bienvenido Profesor, ${user.name} - ID: ${user.id || 'N/A'}`;
      statusText = `Rol: Profesor - Conexión verificada`;
      roleContent.innerHTML = `
        <div class="dashboard-card">
          <h3>📚 Materias Asignadas</h3>
          <p class="subtitle">Cursos a cargo</p>
          <div class="item">
            <h4>Piano Clásico I</h4>
            <p>Grupo A - 20 estudiantes</p>
          </div>
          <div class="item">
            <h4>Teoría Musical</h4>
            <p>Grupo B - 18 estudiantes</p>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>📅 Calendario</h3>
          <p class="subtitle">Próximas actividades</p>
          <div class="item">
            <h4>Reunión de Profesores</h4>
            <p>18/11/2025 - 16:00 hrs</p>
          </div>
          <div class="item">
            <h4>Evaluación Semestral</h4>
            <p>25/11/2025 - 09:00 hrs</p>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>👨‍🎓 Alumnos</h3>
          <p class="subtitle">Lista de estudiantes</p>
          <div class="item">
            <h4>María López</h4>
            <p>Piano Clásico I</p>
          </div>
          <div class="item">
            <h4>Juan Pérez</h4>
            <p>Teoría Musical</p>
          </div>
        </div>
      `;
    } else if (user.role === 'admin') {
      welcomeText = `Bienvenido Administrador, ${user.name} - ID: ${user.id || 'N/A'}`;
      statusText = `Rol: Administrador - Conexión verificada`;
      roleContent.innerHTML = `
        <div class="dashboard-card">
          <h3>👥 Gestión de Usuarios</h3>
          <p class="subtitle">Administrar estudiantes y profesores</p>
          <button class="btn-primary">Ver Lista de Usuarios</button>
        </div>
        <div class="dashboard-card">
          <h3>📊 Reportes</h3>
          <p class="subtitle">Estadísticas y métricas</p>
          <button class="btn-primary">Generar Reporte</button>
        </div>
        <div class="dashboard-card">
          <h3>⚙️ Configuración</h3>
          <p class="subtitle">Opciones del sistema</p>
          <button class="btn-primary">Configurar Sistema</button>
        </div>
      `;
    }

    welcomeMsg.textContent = welcomeText;
    statusCard.querySelector('.text p').textContent = statusText;

    // Mostrar notificación de éxito
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <div class="icon">✓</div>
      <p>¡${user.role === 'estudiante' ? 'Registro' : 'Inicio de sesión'} exitoso!</p>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});