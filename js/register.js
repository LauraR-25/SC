document.addEventListener('DOMContentLoaded', () => {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const nextBtn = document.getElementById('btn-next');
  const backBtn = document.getElementById('btn-back');
  const registerBtn = document.getElementById('btn-register');
  const userTypeRadios = document.querySelectorAll('input[name="user-type"]');
  const institutionalId = document.getElementById('institutional-id');

  let selectedRole = null;

  // Paso 1: selección de rol
  nextBtn.addEventListener('click', () => {
    selectedRole = document.querySelector('input[name="user-type"]:checked')?.value;
    if (!selectedRole) {
      alert('Por favor selecciona un tipo de usuario.');
      return;
    }

    // Mostrar/ocultar campo ID
    if (selectedRole === 'profesor' || selectedRole === 'admin') {
      institutionalId.style.display = 'block';
      institutionalId.setAttribute('required', 'true');
    } else {
      institutionalId.style.display = 'none';
      institutionalId.removeAttribute('required');
    }

    step1.classList.remove('active');
    step2.classList.add('active');
  });

  // Botón atrás
  backBtn.addEventListener('click', () => {
    step2.classList.remove('active');
    step1.classList.add('active');
  });

  // Validación en tiempo real
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const errorMsg = document.createElement('p');
  errorMsg.style.color = 'red';
  errorMsg.style.fontSize = '14px';
  errorMsg.id = 'error-msg';
  confirmPassword.parentNode.insertBefore(errorMsg, confirmPassword.nextSibling);

  confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
      errorMsg.textContent = 'Las contraseñas no coinciden.';
    } else {
      errorMsg.textContent = '';
    }
  });

  // Envío del formulario
  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      errorMsg.textContent = 'Las contraseñas no coinciden.';
      return;
    }

    const user = {
      name: document.getElementById('fullname').value,
      email: document.getElementById('email').value,
      password: password.value,
      role: selectedRole,
      id: institutionalId.value || null
    };

    // Guardar en localStorage (simulación)
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Registro exitoso. Redirigiendo al dashboard...');
    window.location.href = 'dashboard.html';
  });
});