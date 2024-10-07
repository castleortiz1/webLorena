document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
  
    function setTheme(theme) {
      if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
      } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙';
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
  
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  
    // Theme toggle button event listener
    themeToggleBtn.addEventListener('click', toggleTheme);
  });