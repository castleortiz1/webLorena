document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      themeToggleBtn.textContent = '☀️'; // Cambia el icono a sol
    } else {
      body.classList.remove('dark-mode');
      themeToggleBtn.textContent = '🌙'; // Cambia el icono a luna
    }
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  // Inicializa el tema
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Escucha el evento del botón de alternancia de tema
  themeToggleBtn.addEventListener('click', toggleTheme);
});