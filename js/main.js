/* ==========================================================
   MAIN — renderiza el contenido de data.js en los contenedores
   [data-render="..."], pestañas, filtros, contadores, año del
   footer y botón volver arriba.
   ========================================================== */
(function () {
  'use strict';

  const D = window.SITE_DATA || {};
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const AREAS = {
    docencia: 'Docencia universitaria',
    gestion: 'Gestión académico-administrativa',
    investigacion: 'Investigación',
    empresa: 'Proyectos con empresas y organizaciones'
  };

  /* ---------- Utilidades ---------- */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function periodo(item) {
    const fin = String(item.fin);
    return String(item.inicio) === fin ? fin : item.inicio + ' – ' + fin;
  }

  function vacio(texto) {
    return '<p class="estado-vacio">' + esc(texto || 'No hay elementos para mostrar.') + '</p>';
  }

  /* ---------- Plantillas ---------- */
  function tplTimelineItem(item) {
    return '<li class="timeline__item" data-area="' + esc(item.area) + '">' +
      '<article class="timeline__card">' +
        '<div class="timeline__top">' +
          '<span class="timeline__periodo">' + esc(periodo(item)) + '</span>' +
          '<span class="etiqueta-area">' + esc(AREAS[item.area] || '') + '</span>' +
        '</div>' +
        '<h3>' + esc(item.cargo) + '</h3>' +
        '<p class="timeline__inst">' + esc(item.institucion) + '</p>' +
        (item.descripcion ? '<p class="timeline__desc">' + esc(item.descripcion) + '</p>' : '') +
      '</article></li>';
  }

  function tplDegree(item) {
    return '<article class="card degree' + (item.destacado ? ' degree--destacado' : '') + '">' +
      '<span class="degree__anio">' + esc(item.anio) + '</span>' +
      '<span class="card__meta">' + esc(item.nivel) + '</span>' +
      '<h3>' + esc(item.titulo) + '</h3>' +
      '<p>' + esc(item.institucion) + ' · ' + esc(item.lugar) + '</p>' +
      (item.nota ? '<p class="degree__nota">' + esc(item.nota) + '</p>' : '') +
      '</article>';
  }

  function tplBiblio(item) {
    return '<li><span class="biblio__anio">' + esc(item.anio || item.periodo || '') + '</span>' +
      '<span><span class="biblio__titulo">' + esc(item.titulo) + '</span>' +
      ((item.medio || item.entidad || item.detalle)
        ? '<span class="biblio__medio">' + esc(item.medio || item.entidad || item.detalle) +
          (item.lugar ? ' · ' + esc(item.lugar) : '') + '</span>'
        : '') +
      '</span></li>';
  }

  function lista(items, tpl) {
    return items && items.length ? '<ul class="biblio">' + items.map(tpl).join('') + '</ul>' : vacio();
  }

  function subtitulo(texto, cantidad) {
    return '<h3 class="subtitulo">' + esc(texto) +
      (cantidad != null ? ' <small>' + cantidad + '</small>' : '') + '</h3>';
  }

  /* ---------- Renderizadores ---------- */
  const renderers = {
    perfiles: function () {
      return (D.perfiles || []).map(function (pf) {
        return '<a class="perfil-link" href="' + esc(pf.enlace) + '" target="_blank" rel="noopener">' +
          '<span class="perfil-link__sigla">' + esc(pf.sigla) + '</span>' +
          '<span class="perfil-link__body"><strong>' + esc(pf.nombre) + '</strong><span>' + esc(pf.detalle) + '</span></span>' +
          '<span class="perfil-link__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg></span>' +
          '<span class="sr-only"> (abre en una pestaña nueva)</span></a>';
      }).join('');
    },

    cifras: function () {
      return (D.cifras || []).map(function (c) {
        return '<div class="stat">' +
          '<span class="stat__valor" data-count="' + c.valor + '" data-prefix="' + esc(c.prefijo) + '">' +
          esc(c.prefijo) + c.valor + '</span>' +
          '<span class="stat__etiqueta">' + esc(c.etiqueta) + '</span></div>';
      }).join('');
    },

    'trayectoria-destacada': function () {
      const items = (D.trayectoria || []).filter(function (t) { return t.destacado; }).slice(0, 6);
      return items.map(tplTimelineItem).join('');
    },

    trayectoria: function (el) {
      const area = el.dataset.filtro || 'todas';
      const items = (D.trayectoria || []).filter(function (t) {
        return area === 'todas' || t.area === area;
      });
      return items.length ? items.map(tplTimelineItem).join('') : '<li>' + vacio() + '</li>';
    },

    'formacion-destacada': function () {
      return (D.formacion || []).filter(function (f) {
        return ['Doctorado', 'Estudios avanzados', 'Especialización', 'Pregrado'].indexOf(f.nivel) !== -1;
      }).map(tplDegree).join('');
    },

    formacion: function () {
      return (D.formacion || []).map(tplDegree).join('');
    },

    'formacion-complementaria': function (el) {
      const todos = D.formacionComplementaria || [];
      const filtro = el.dataset.filtro || 'todos';
      const TIPOS = [
        ['todos', 'Todos'], ['diplomado', 'Diplomados'], ['curso', 'Cursos'],
        ['congreso', 'Congresos y encuentros'], ['seminario', 'Seminarios, talleres y simposios']
      ];
      const ETIQUETA = { diplomado: 'Diplomado', curso: 'Curso', congreso: 'Congreso', seminario: 'Seminario / taller' };
      const cuenta = function (t) { return t === 'todos' ? todos.length : todos.filter(function (x) { return x.tipo === t; }).length; };
      const items = todos.filter(function (x) { return filtro === 'todos' || x.tipo === filtro; });
      const barra = '<div class="filtros" role="group" aria-label="Filtrar por tipo de estudio">' + TIPOS.map(function (t) {
        return '<button class="filtro" type="button" data-fc-filtro="' + t[0] + '" aria-pressed="' + (t[0] === filtro) + '">' +
          esc(t[1]) + ' <span class="filtro__num">' + cuenta(t[0]) + '</span></button>';
      }).join('') + '</div>';
      const tpl = function (x) {
        const meta = [x.institucion, x.lugar, x.horas ? x.horas + ' horas' : x.duracion].filter(Boolean).join(' · ');
        return '<li><span class="biblio__anio">' + esc(x.anio) + '<small class="biblio__fecha">' + esc(ETIQUETA[x.tipo]) + '</small></span>' +
          '<span><span class="biblio__titulo">' + esc(x.titulo) + '</span><span class="biblio__medio">' + esc(meta) + '</span></span></li>';
      };
      return barra + '<p class="sr-only" aria-live="polite">' + items.length + ' estudios mostrados</p>' + lista(items, tpl);
    },

    idiomas: function () {
      const NIVEL = { R: [1, 'Regular'], B: [2, 'Bien'], MB: [3, 'Muy bien'] };
      const fila = function (etq, v) {
        const n = v ? NIVEL[v][0] : 0;
        let seg = '';
        for (let i = 1; i <= 3; i++) seg += '<span class="nivel__seg' + (i <= n ? ' is-on' : '') + '"></span>';
        return '<div class="nivel"><span class="nivel__etq">' + etq + '</span>' +
          '<span class="nivel__barra" aria-hidden="true">' + seg + '</span>' +
          '<span class="nivel__txt">' + (v ? NIVEL[v][1] : 'No registrado') + '</span></div>';
      };
      return (D.idiomas || []).map(function (i) {
        return '<article class="card idioma"><span class="card__meta">Idioma</span><h3>' + esc(i.idioma) + '</h3>' +
          fila('Habla', i.habla) + fila('Lee', i.lee) + fila('Escribe', i.escribe) +
          (i.soporte && i.soporte.length ? '<ul class="idioma__soporte">' + i.soporte.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : '') +
          '</article>';
      }).join('');
    },

    'investigacion-destacada': function () {
      const p = D.publicaciones || {};
      const items = [].concat((p.articulos || []).slice(0, 2), (p.capitulos || []).slice(3, 4), (p.articulos || []).slice(11, 12));
      return items.map(function (a) {
        return '<li><strong>' + esc(a.titulo) + '</strong><span>' + esc(a.medio) +
          (a.anio ? ' · ' + a.anio : '') + '</span></li>';
      }).join('');
    },

    publicaciones: function () {
      const p = D.publicaciones || {};
      const cart = p.cartillas || { grupos: [] };
      return subtitulo('Artículos científicos', (p.articulos || []).length) + lista(p.articulos, tplBiblio) +
        subtitulo('Libros y módulos', (p.libros || []).length) + lista(p.libros, tplBiblio) +
        subtitulo('Capítulos de libro y memorias', (p.capitulos || []).length) + lista(p.capitulos, tplBiblio) +
        subtitulo('Cartillas digitales en salud', 11) + lista(cart.grupos, tplBiblio) +
        (cart.enlace ? '<p class="section-foot"><a class="btn btn--outline btn--sm" href="' + esc(cart.enlace) +
          '" target="_blank" rel="noopener">Ver biblioteca digital de la Secretaría de Salud de Santander</a></p>' : '');
    },

    proyectos: function () {
      return subtitulo('Proyectos de investigación', (D.proyectosInvestigacion || []).length) + lista(D.proyectosInvestigacion, tplBiblio) +
        subtitulo('Estudios sobre la educación superior', (D.estudiosEducacionSuperior || []).length) + lista(D.estudiosEducacionSuperior, tplBiblio) +
        subtitulo('Proyectos de extensión (selección)', (D.proyectosExtension || []).length) + lista(D.proyectosExtension, tplBiblio);
    },

    ponencias: function () {
      const todas = D.ponencias || [];
      const grupo = function (tipo) { return todas.filter(function (p) { return p.tipo === tipo; }); };
      const ext = grupo('exterior'), col = grupo('colombia'), pos = grupo('posgrado');
      const tpl = function (p) {
        return '<li><span class="biblio__anio">' + esc(p.anio) +
          (p.fecha ? '<small class="biblio__fecha">' + esc(p.fecha) + '</small>' : '') + '</span><span>' +
          '<span class="biblio__titulo">' + esc(p.titulo) + '</span>' +
          '<span class="biblio__medio">' + esc(p.evento) + ' · <strong>' + esc(p.lugar) + '</strong></span></span></li>';
      };
      return '<p class="aviso"><strong>' + (ext.length + col.length) +
        ' ponencias</strong> en congresos y eventos académicos (' + ext.length + ' en el exterior y ' + col.length +
        ' en Colombia) y <strong>' + pos.length + ' seminarios y cursos</strong> de posgrado, entre 1997 y 2026. ' +
        'Países: España, México, Cuba, Chile, Bélgica, Francia, Portugal, Brasil, Argentina y Colombia.</p>' +
        subtitulo('Ponencias en el exterior', ext.length) + lista(ext, tpl) +
        subtitulo('Ponencias en Colombia', col.length) + lista(col, tpl) +
        subtitulo('Seminarios y cursos de posgrado como ponente', pos.length) + lista(pos, tpl);
    },

    'formacion-investigadores': function () {
      const f = D.formacionInvestigadores || {};
      const dir = f.dirigidos || [], ev = f.evaluados || [];
      const de = function (arr, g) { return arr.filter(function (t) { return t.grupo === g; }); };
      const tpl = function (t) {
        return '<li><span class="biblio__anio">' + esc(t.anio) + '</span><span>' +
          '<span class="biblio__titulo">' + esc(t.titulo) + '</span>' +
          '<span class="biblio__medio">' + esc(t.nivel) + '</span></span></li>';
      };
      const maes = de(dir, 'maestria'), esp = de(dir, 'especializacion'), pre = de(dir, 'pregrado');
      const tesis = de(ev, 'tesis'), obras = de(ev, 'obra');
      return '<p class="aviso">' + esc(f.resumen) + ' Se detallan <strong>' + dir.length +
        ' trabajos dirigidos</strong> (' + maes.length + ' de maestría, ' + esp.length + ' de especialización y ' + pre.length +
        ' de pregrado) y <strong>' + ev.length + ' evaluaciones</strong> como jurado y evaluadora (' + tesis.length +
        ' tesis de maestría y ' + obras.length + ' libros u obras).</p>' +
        subtitulo('Tesis de maestría dirigidas', maes.length) + lista(maes, tpl) +
        subtitulo('Trabajos de especialización dirigidos', esp.length) + lista(esp, tpl) +
        subtitulo('Trabajos de pregrado dirigidos', pre.length) + lista(pre, tpl) +
        subtitulo('Jurado de tesis de maestría', tesis.length) + lista(tesis, tpl) +
        subtitulo('Evaluadora de libros y obras', obras.length) + lista(obras, tpl) +
        subtitulo('Otras actividades como evaluadora') +
        '<ul class="lista-check">' + (f.evaluadora || []).map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>';
    },

    digitales: function () {
      return '<div class="grid-cards grid-cards--3">' + (D.desarrollosDigitales || []).map(function (d) {
        return '<article class="card"><span class="card__meta">Desarrollo digital</span><h3>' + esc(d.titulo) + '</h3>' +
          '<p>' + esc(d.detalle) + '</p>' +
          (d.enlace ? '<div class="card__foot"><a href="' + esc(d.enlace) + '" target="_blank" rel="noopener">Visitar sitio<span class="sr-only"> ' + esc(d.titulo) + ' (abre en una pestaña nueva)</span></a></div>' : '') +
          '</article>';
      }).join('') + '</div>';
    },

    redes: function () {
      const globo = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';
      const redes = (D.redes || []).map(function (r) {
        return '<article class="red-card">' +
          '<span class="red-card__sigla' + (r.sigla ? '' : ' red-card__sigla--icon') + '">' + (r.sigla ? esc(r.sigla) : globo) + '</span>' +
          '<span class="red-card__ambito">' + esc(r.ambito) + '</span>' +
          '<h3>' + esc(r.nombre) + '</h3><p>' + esc(r.rol) + '</p></article>';
      }).join('');
      const GRUPOS = [
        ['calidad', 'Calidad académica y registros calificados', '<path d="M9 12l2 2 4-4"/><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>'],
        ['convivencia', 'Convivencia y derechos humanos', '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>']
      ];
      const comites = GRUPOS.map(function (g) {
        const items = (D.comites || []).filter(function (c) { return c.grupo === g[0]; });
        return '<div class="comite-grupo"><div class="comite-grupo__head"><span class="comite-grupo__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + g[2] + '</svg></span>' +
          '<h4>' + esc(g[1]) + '</h4></div>' + items.map(function (c) {
            return '<article class="comite"><h5>' + esc(c.titulo) + '</h5><p>' + esc(c.detalle) + '</p>' +
              (c.entidades ? '<ul class="tags">' + c.entidades.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' : '') +
              (c.periodos ? '<div class="comite__periodos">' + c.periodos.map(function (p) { return '<span>' + esc(p) + '</span>'; }).join('') + '</div>' : '') +
              '</article>';
          }).join('') + '</div>';
      }).join('');
      return subtitulo('Redes y sociedades científicas', (D.redes || []).length) + '<div class="redes-grid">' + redes + '</div>' +
        subtitulo('Comités y participación institucional', (D.comites || []).length) + '<div class="comites-grid">' + comites + '</div>';
    },

    'propuesta-componentes': function () {
      const pr = D.propuesta || { componentes: [] };
      return pr.componentes.map(function (c, i) {
        return '<article class="pilar-card"><span class="pilar-card__num" aria-hidden="true">0' + (i + 1) + '</span>' +
          '<span class="pilar-card__clave">' + esc(c.clave) + '</span>' +
          '<h3>' + esc(c.titulo) + '</h3><p>' + esc(c.pilar) + '</p></article>';
      }).join('');
    },

    multicampus: function (el) {
      const m = (D.propuesta || {}).multicampus;
      const compact = el && el.dataset.compact === 'true';
      if (!m) return '';
      const icons = {
        cerebro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>',
        corazon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>'
      };
      return ['cerebro', 'corazon'].map(function (k) {
        const c = m[k];
        return '<article class="mc-card mc-card--' + k + '"><div class="mc-card__head"><span class="mc-card__icon">' + icons[k] + '</span>' +
          '<div><span>' + esc(c.subtitulo) + '</span><h3>' + esc(c.titulo) + '</h3></div></div>' +
          (compact
            ? '<ul class="mc-card__compact">' + c.items.map(function (it) { return '<li>' + esc(it.t) + '</li>'; }).join('') + '</ul>'
            : '<p>' + esc(c.texto) + '</p><ul>' + c.items.map(function (it) {
                return '<li><strong>' + esc(it.t) + '</strong>' + esc(it.d) + '</li>';
              }).join('') + '</ul>') +
          '</article>';
      }).join('');
    }
  };

  function render(el) {
    const fn = renderers[el.dataset.render];
    if (fn) el.innerHTML = fn(el);
  }

  document.querySelectorAll('[data-render]').forEach(render);
  window.SITE_RENDER = render;

  /* ---------- Filtros de trayectoria ---------- */
  document.querySelectorAll('[data-filtros]').forEach(function (group) {
    const target = document.getElementById(group.dataset.filtros);
    if (!target) return;
    group.addEventListener('click', function (event) {
      const btn = event.target.closest('[data-filtro]');
      if (!btn) return;
      group.querySelectorAll('[data-filtro]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      target.dataset.filtro = btn.dataset.filtro;
      render(target);
      const status = document.getElementById(group.dataset.status);
      if (status) status.textContent = target.querySelectorAll('.timeline__item[data-area]').length + ' elementos mostrados';
    });
  });

  /* ---------- Filtros de formación complementaria ---------- */
  document.addEventListener('click', function (event) {
    const btn = event.target.closest('[data-fc-filtro]');
    if (!btn) return;
    const box = btn.closest('[data-render="formacion-complementaria"]');
    box.dataset.filtro = btn.dataset.fcFiltro;
    render(box);
    const again = box.querySelector('[data-fc-filtro="' + btn.dataset.fcFiltro + '"]');
    if (again) again.focus();
  });

  /* ---------- Pestañas accesibles ---------- */
  document.querySelectorAll('[role="tablist"][data-tabs]').forEach(function (tablist) {
    const tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));

    function activate(tab, focus) {
      tabs.forEach(function (t) {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        t.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      if (focus) tab.focus();
      if (tab.id && history.replaceState) history.replaceState(null, '', '#' + tab.id.replace('tab-', ''));
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { activate(tab, false); });
      tab.addEventListener('keydown', function (event) {
        let next = null;
        if (event.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (event.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (event.key === 'Home') next = tabs[0];
        if (event.key === 'End') next = tabs[tabs.length - 1];
        if (next) { event.preventDefault(); activate(next, true); }
      });
    });

    const fromHash = location.hash && document.getElementById('tab-' + location.hash.slice(1));
    activate(fromHash && tabs.indexOf(fromHash) !== -1 ? fromHash : tabs[0], false);
  });

  /* ---------- Contadores animados ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = Number(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const start = performance.now();
        const dur = 1400;
        (function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(end * eased);
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* ---------- Año automático en el footer ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Botón volver arriba ---------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('is-visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
})();
