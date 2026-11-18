/* ==========================================================
   PROPUESTA — renderiza la propuesta rectoral, selector de
   pilares, acordeones, índice lateral activo y barra de lectura.
   ========================================================== */
(function () {
  'use strict';

  const P = (window.SITE_DATA || {}).propuesta;
  const root = document.getElementById('propuesta-contenido');
  if (!P || !root) return;

  const LETRAS = 'ABCDEFGHIJ';
  const chevron = '<svg class="eje__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  function esc(v) {
    return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function p(arr) {
    return arr.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
  }

  /* ---------- Secciones ---------- */
  const presentacion =
    '<section class="prop-section" id="presentacion" aria-labelledby="h-presentacion">' +
      '<span class="eyebrow">Presentación</span>' +
      '<h2 id="h-presentacion">Una gestión basada en conocimiento, diálogo y evidencia</h2>' +
      '<div class="prop-text">' + p(P.presentacion) + '</div>' +
      '<h3>Cinco compromisos de la gestión</h3>' +
      '<ol class="compromisos">' + P.compromisos.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ol>' +
    '</section>';

  const componentes =
    '<section class="prop-section" id="componentes" aria-labelledby="h-componentes">' +
      '<span class="eyebrow">El lema y los pilares del PDI 2021-2030</span>' +
      '<h2 id="h-componentes">Cuatro componentes que orientan la gestión</h2>' +
      '<p class="prop-text">El lema de la propuesta reconoce los cuatro pilares del Plan de Desarrollo Institucional 2021-2030:</p>' +
      '<blockquote class="lema">' +
        '<span class="lema__label">Lema de la propuesta</span>' +
        '<p class="lema__frase">«' + esc(P.lema) + ': <strong>' + esc(P.sello) + '</strong>»</p>' +
        '<p class="lema__texto">' + P.componentes.map(function (c, i) {
          return '<span class="lema__parte"><span class="lema__num">0' + (i + 1) + '</span>' + esc(c.titulo) + '</span>';
        }).join('') + '</p>' +
      '</blockquote>' +
      P.componentes.map(function (c, i) {
        return '<article class="componente">' +
          '<div><span class="componente__clave">0' + (i + 1) + ' · ' + esc(c.clave) + '</span>' +
          '<h3>' + esc(c.titulo) + '</h3>' +
          '<span class="componente__pilar">Pilar: ' + esc(c.pilar) + '</span></div>' +
          '<p>' + esc(c.texto) + '</p>' +
          '<ul class="tags" aria-label="Énfasis">' + c.puntos.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        '</article>';
      }).join('') +
    '</section>';

  const mc = P.multicampus;
  const multicampus =
    '<section class="prop-section" id="multicampus" aria-labelledby="h-multicampus">' +
      '<span class="eyebrow">Visión</span>' +
      '<h2 id="h-multicampus">' + esc(P.sello) + '</h2>' +
      '<div class="prop-text">' + p(mc.intro) + '</div>' +
      '<p>Su definición se sostiene sobre dos pilares fundamentales:</p>' +
      '<div class="multicampus" data-render="multicampus"></div>' +
    '</section>';

  const et = P.ejeTransversal;
  const datos =
    '<section class="prop-section" id="datos" aria-labelledby="h-datos">' +
      '<span class="eyebrow">II · Plan de acción · Eje transversal</span>' +
      '<h2 id="h-datos">Datos al servicio de toda la Universidad</h2>' +
      '<p class="prop-text">' + esc(et.intro) + '</p>' +
      '<div class="lineas">' + et.lineas.map(function (l) {
        return '<div class="linea"><strong>' + esc(l.t) + '</strong><p>' + esc(l.d) + '</p></div>';
      }).join('') + '</div>' +
      '<blockquote class="cita"><p>«' + esc(et.cita.texto) + '»</p><cite>— ' + esc(et.cita.autor) + '</cite></blockquote>' +
      '<p class="prop-text">' + esc(et.cierre) + '</p>' +
    '</section>';

  const pilares =
    '<section class="prop-section" id="pilares" aria-labelledby="h-pilares">' +
      '<span class="eyebrow">Plan de acción</span>' +
      '<h2 id="h-pilares">Los cuatro pilares y sus ejes de agenda institucional</h2>' +
      '<p class="prop-text">Seleccione un pilar para consultar sus ejes y las acciones propuestas. Cada eje puede desplegarse para una lectura detallada.</p>' +
      '<div class="pilar-tabs" role="tablist" aria-label="Pilares de la propuesta">' +
        P.pilares.map(function (pl, i) {
          return '<button class="pilar-tab" type="button" role="tab" id="tab-' + pl.id + '" aria-controls="panel-' + pl.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' +
            '<span class="pilar-tab__num">Pilar ' + pl.numero + '</span>' +
            '<span class="pilar-tab__titulo">' + esc(pl.titulo) + '</span></button>';
        }).join('') +
      '</div>' +
      P.pilares.map(function (pl, i) {
        return '<div class="pilar-panel" role="tabpanel" id="panel-' + pl.id + '" aria-labelledby="tab-' + pl.id + '"' + (i === 0 ? '' : ' hidden') + ' tabindex="0">' +
          '<div class="pilar-panel__head"><span class="card__meta">Pilar ' + pl.numero + '</span>' +
            '<h3>' + esc(pl.titulo) + '</h3><p>' + esc(pl.descripcion) + '</p>' +
            (pl.enfoque !== pl.agenda + '.' ? '<p class="pilar-panel__enfoque">' + esc(pl.enfoque) + '</p>' : '') +
          '</div>' +
          '<div class="acordeon-controles"><button class="link-btn" type="button" data-accion="abrir">Desplegar todo</button>' +
          '<button class="link-btn" type="button" data-accion="cerrar">Contraer todo</button></div>' +
          '<p class="agenda-label">' + esc(pl.agenda) + '</p>' +
          pl.ejes.map(function (e, j) {
            return '<details class="eje"' + (j === 0 ? ' open' : '') + '>' +
              '<summary><span class="eje__num">' + (j + 1) + '</span><span class="eje__titulo">' + esc(e.titulo) + '</span>' + chevron + '</summary>' +
              '<div class="eje__body">' +
                (e.programa ? '<span class="eje__programa">' + esc(e.programa) + '</span>' : '') +
                '<ul class="acciones">' + e.acciones.map(function (a, k) {
                  return '<li><span class="acciones__letra" aria-hidden="true">' + LETRAS[k] + '</span><span><span class="sr-only">Acción ' + LETRAS[k] + ': </span>' + esc(a) + '</span></li>';
                }).join('') + '</ul>' +
              '</div></details>';
          }).join('') +
        '</div>';
      }).join('') +
      '<p class="aviso section-foot">Las acciones aquí descritas son propuestas para el período 2026-2030; no corresponden a resultados ya alcanzados. El documento no incluye indicadores numéricos ni cronograma.</p>' +
    '</section>';

  const cierre =
    '<section class="prop-section" id="cierre" aria-labelledby="h-cierre">' +
      '<h2 id="h-cierre" class="sr-only">Mensaje de cierre</h2>' +
      '<div class="cierre"><p>' + esc(P.cierre) + '</p><p>Con gratitud y compromiso,</p><strong>AURORA INÉS GÁFARO ROJAS</strong></div>' +
      '<div class="btn-group section-foot">' +
        '<a class="btn btn--primary" href="../assets/documents/Propuesta_Rectoria_Aurora_Gafaro_2026-2030.pdf" target="_blank" rel="noopener">Ver documento completo (PDF)</a>' +
        '<a class="btn btn--outline" href="../assets/documents/Propuesta_Rectoria_Aurora_Gafaro_2026-2030.pdf" download>Descargar propuesta</a>' +
      '</div>' +
    '</section>';

  root.innerHTML = presentacion + componentes + multicampus + datos + pilares + cierre;
  const mcEl = root.querySelector('[data-render="multicampus"]');
  if (mcEl && window.SITE_RENDER) window.SITE_RENDER(mcEl);

  /* ---------- Selector de pilares ---------- */
  const tabs = Array.prototype.slice.call(root.querySelectorAll('.pilar-tab'));
  function activate(tab, focus) {
    tabs.forEach(function (t) {
      const sel = t === tab;
      t.setAttribute('aria-selected', String(sel));
      t.tabIndex = sel ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !sel;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { activate(tab, false); });
    tab.addEventListener('keydown', function (e) {
      let n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); activate(n, true); }
    });
  });

  /* Enlaces directos a un pilar: propuesta.html#pilar-2 */
  const hashTab = location.hash && document.getElementById('tab-' + location.hash.slice(1));
  if (hashTab) {
    activate(hashTab, false);
    document.getElementById('pilares').scrollIntoView();
  }

  /* ---------- Desplegar / contraer ---------- */
  root.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-accion]');
    if (!btn) return;
    const open = btn.dataset.accion === 'abrir';
    btn.closest('.pilar-panel').querySelectorAll('details').forEach(function (d) { d.open = open; });
  });

  /* ---------- Índice activo ---------- */
  const links = document.querySelectorAll('.toc a');
  if ('IntersectionObserver' in window && links.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    root.querySelectorAll('.prop-section').forEach(function (s) { io.observe(s); });
  }

  /* ---------- Barra de progreso de lectura ---------- */
  const bar = document.querySelector('.progress-bar');
  if (bar) {
    let ticking = false;
    const update = function () {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }
})();
