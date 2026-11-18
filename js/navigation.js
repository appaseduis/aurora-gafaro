/* ==========================================================
   NAVEGACIÓN — menú móvil, estado al hacer scroll y página activa
   ========================================================== */
(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const desktop = window.matchMedia('(min-width: 1024px)');

  /* Página activa: compara data-page del <body> con data-nav de cada enlace */
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(function (link) {
    if (link.dataset.nav === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* Sombra del header al desplazarse */
  function onScroll() {
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!toggle || !nav) return;

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    nav.classList.add('is-open');
    document.body.classList.add('menu-abierto');
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu(returnFocus) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-abierto');
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  /* Cerrar con Escape */
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu(true);
    }
  });

  /* Cerrar al elegir un enlace */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!desktop.matches) closeMenu(false);
    });
  });

  /* Si se pasa a escritorio con el menú abierto, restablecer */
  desktop.addEventListener('change', function (event) {
    if (event.matches) closeMenu(false);
  });
})();
