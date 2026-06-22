(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  root.setAttribute('data-theme', systemTheme);

  if (!button) {
    return;
  }

  const updateButton = (theme) => {
    button.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
    button.querySelector('.theme-toggle-icon').textContent = theme === 'dark' ? '☀' : '◐';
  };

  updateButton(systemTheme);

  button.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', nextTheme);
    updateButton(nextTheme);
  });
})();
