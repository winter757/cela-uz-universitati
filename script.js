// Tumšā/gaišā režīma maiņa
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const label = document.getElementById('themeLabel');

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    label.textContent = t === 'dark' ? 'Gaišais režīms' : 'Tumšais režīms';
  }

  btn.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();

// Animācija + aizpilda progresa joslu
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      const fill = entry.target.querySelector('.tube-fill');
      if (fill) {
        fill.style.setProperty('--progress', entry.target.dataset.progress + '%');
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.section').forEach((s) => observer.observe(s));
})();
