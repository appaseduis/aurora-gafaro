/* ==========================================================
   ANIMACIONES — aparición progresiva con IntersectionObserver
   Uso en HTML: <div data-reveal> o data-reveal="left|right"
   Retardo opcional: style="--reveal-delay: .2s"
   ========================================================== */
(function () {
  'use strict';

  const items = document.querySelectorAll('[data-reveal]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!items.length || reduce || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-ready');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
