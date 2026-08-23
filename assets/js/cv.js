(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Preloader: flor naranja que florece y aterriza en el header ---------- */
  var preloader = document.getElementById('preloader');
  var headerEl = document.querySelector('.site-header');
  if (preloader && !reduceMotion) {
    document.documentElement.classList.add('is-preloading');
    var heroEls = Array.prototype.slice.call(
      document.querySelectorAll('.hero__logo, .hero__greeting, .hero__actions')
    );
    heroEls.forEach(function (el) { el.classList.add('hero-reveal'); });
    var start = function () {
      window.setTimeout(function () {
        preloader.classList.add('is-shrinking');
        if (headerEl) preloader.style.height = headerEl.offsetHeight + 'px';
        heroEls.forEach(function (el, i) {
          window.setTimeout(function () { el.classList.add('is-visible'); }, i * 240);
        });
      }, 1700);
      window.setTimeout(function () {
        preloader.classList.add('is-done');
        document.documentElement.classList.remove('is-preloading');
      }, 2700);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start);
  }

  /* ---------- Aparición de secciones al hacer scroll (como design.html) ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealEls = Array.prototype.filter.call(document.querySelectorAll(
      '.section-head, .about-grid, .quote, .project, .contact-list'
    ), function (el) {
      return !el.closest('footer') && !el.hasAttribute('data-clone');
    });
    document.documentElement.classList.add('js-reveal');
    revealEls.forEach(function (el) { el.classList.add('reveal'); });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        (function (el, delay) {
          window.setTimeout(function () {
            el.classList.add('is-visible');
            /* restaurar transiciones propias de la tarjeta tras el reveal */
            window.setTimeout(function () {
              el.classList.remove('reveal', 'is-visible');
            }, 1100);
          }, delay);
        })(entry.target, i * 110);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Estela de flores (hero y cita) ---------- */
  (function () {
    if (!finePointer || reduceMotion) return;
    var MAX_FLOWERS = 22;
    var lastX = -999, lastY = -999;

    function makeFlower(zone, x, y) {
      if (zone.querySelectorAll('.hero__flower').length >= MAX_FLOWERS) return;
      var f = document.createElement('img');
      f.src = 'assets/img/icon.svg';
      f.alt = '';
      f.className = 'hero__flower';
      f.style.left = x + 'px';
      f.style.top = y + 'px';
      f.style.setProperty('--rot', (Math.random() * 60 - 30).toFixed(1) + 'deg');
      f.style.setProperty('--sc', (0.75 + Math.random() * 0.5).toFixed(2));
      f.addEventListener('animationend', function () { f.remove(); });
      zone.appendChild(f);
    }
    function trySpawn(zone, x, y, minDist) {
      var dx = x - lastX, dy = y - lastY;
      if (dx * dx + dy * dy < minDist * minDist) return;
      lastX = x; lastY = y;
      makeFlower(zone, x, y);
    }

    /* Hero: estela en toda la zona, excepto sobre textos, logo y botones */
    var hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mousemove', function (e) {
        if (e.target.closest && e.target.closest('.hero__inner')) return;
        var rect = hero.getBoundingClientRect();
        trySpawn(hero, e.clientX - rect.left, e.clientY - rect.top, 130);
      });
      /* Sobre las palabras de la frase: florecen al pasar el cursor */
      var greeting = hero.querySelector('.hero__greeting');
      if (greeting) {
        var gLastX = -999, gLastY = -999;
        greeting.addEventListener('mousemove', function (e) {
          if (!(e.target.closest && e.target.closest('span.w'))) return;
          var rect = hero.getBoundingClientRect();
          var x = e.clientX - rect.left, y = e.clientY - rect.top;
          var dx = x - gLastX, dy = y - gLastY;
          if (dx * dx + dy * dy < 70 * 70) return;
          gLastX = x; gLastY = y;
          makeFlower(hero, x, y);
        });
      }
    }

    /* Contacto: estela de flores en toda la sección */
    var contacto = document.getElementById('contacto');
    if (contacto) {
      var cLastX = -999, cLastY = -999;
      contacto.addEventListener('mousemove', function (e) {
        if (e.target.closest && e.target.closest('a')) return;
        var rect = contacto.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var dx = x - cLastX, dy = y - cLastY;
        if (dx * dx + dy * dy < 130 * 130) return;
        cLastX = x; cLastY = y;
        makeFlower(contacto, x, y);
      });
    }

    /* Cita: sin flores (se desactivó a petición) */

  })();

  /* ---------- "Conóceme" y menú: centra Sobre mí al llegar ---------- */
  (function () {
    var grid = document.querySelector('.about-grid');
    if (!grid) return;
    var goSobreMi = function (e) {
      e.preventDefault();
      grid.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      if (history.replaceState) history.replaceState(null, '', '#sobre-mi');
    };
    document.querySelectorAll('a[href="#sobre-mi"]').forEach(function (a) {
      a.addEventListener('click', goSobreMi);
    });
  })();

  /* ---------- Menú móvil (mismos destinos y orden) ---------- */
  var header = document.querySelector('.site-header');
  var toggler = document.querySelector('.nav-toggle');
  function closeMenu() {
    header.classList.remove('is-open');
    toggler.setAttribute('aria-expanded', 'false');
  }
  if (header && toggler) {
    toggler.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggler.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        closeMenu();
        toggler.focus();
      }
    });
  }

  /* ---------- Scrollspy: enlace activo según sección visible ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function setCurrent(id) {
    navLinks.forEach(function (link) {
      if (id && link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (sec) { spy.observe(sec); });
    /* En el hero no queda ningún enlace activo */
    var heroEl = document.querySelector('.hero');
    if (heroEl && 'IntersectionObserver' in window) {
      var heroSpy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setCurrent(null);
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      heroSpy.observe(heroEl);
    }
  }

  /* ---------- Botones: compresión al hacer clic ---------- */
  document.querySelectorAll('.btn, .icon-btn, .loop-btn, .contact-list a').forEach(function (btn) {
    btn.addEventListener('pointerdown', function () {
      if (reduceMotion) return;
      btn.classList.add('is-pressed');
      window.setTimeout(function () { btn.classList.remove('is-pressed'); }, 160);
    });
  });

  /* ---------- Carruseles en loop con drag + botones alternativos ---------- */
  document.querySelectorAll('[data-loop]').forEach(function (carousel) {
    var track = carousel.querySelector('.loop-track') || carousel.querySelector('.media-track');
    if (!track) return;

    var origCount = track.children.length;
    Array.prototype.slice.call(track.children).forEach(function (node) {
      var c = node.cloneNode(true);
      c.setAttribute('data-clone', '');
      track.appendChild(c);
    });
    track.querySelectorAll('img').forEach(function (img) { img.setAttribute('draggable', 'false'); });

    /* Re-medir cuando carguen imágenes o videos (sus anchos cambian) */
    track.querySelectorAll('img').forEach(function (img) {
      if (!img.complete) img.addEventListener('load', measure);
    });
    track.querySelectorAll('video').forEach(function (v) {
      v.addEventListener('loadedmetadata', measure);
    });

    var setWidth = 0;
    var offset = 0;
    var dragging = false;
    var lastX = 0;
    var lastT = 0;
    var velocity = 0;
    var rafId = null;

    function measure() {
      /* Período exacto: distancia entre cada pieza y su clon (inmune a gaps/márgenes) */
      var kids = track.children;
      if (kids.length > origCount && kids[origCount]) {
        var period = kids[origCount].offsetLeft - kids[0].offsetLeft;
        if (period > 0) { setWidth = period; return; }
      }
      setWidth = track.scrollWidth / 2;
    }
    function render() { track.style.transform = 'translate3d(' + offset + 'px, 0, 0)'; }
    function normalize() {
      if (setWidth <= 0) return;
      while (offset <= -setWidth) offset += setWidth;
      while (offset > 0) offset -= setWidth;
    }
    function glide() {
      cancelAnimationFrame(rafId);
      if (reduceMotion) return;
      (function step() {
        velocity *= 0.94;
        offset += velocity;
        normalize();
        render();
        if (Math.abs(velocity) > 0.2) rafId = requestAnimationFrame(step);
        else snapToNearest();
      })();
    }
    function stepBy(dir) {
      measure();
      cancelAnimationFrame(rafId);
      /* dir=1 es "siguiente": la pista debe desplazarse a la IZQUIERDA
         (offset negativo), igual que cuando arrastras hacia la derecha */
      velocity = -dir * 14;
      glide();
    }

    /* Centrado tipo carrusel: la pieza más cercana se acomoda al centro */
    var userMoved = false;
    var initDone = false;
    var snapRaf = null;
    var wheelTimer = null;
    function snapToNearest() {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(snapRaf);
      if (!setWidth || !carousel.clientWidth) return;
      /* Elegir la pieza que más superficie ocupa dentro del visor */
      var left = -offset, right = left + carousel.clientWidth;
      var mid = (left + right) / 2;
      var bestC = null, bestOv = -1, bestD = Infinity;
      Array.prototype.forEach.call(track.children, function (k) {
        var l = k.offsetLeft, r = l + k.offsetWidth;
        var ov = Math.min(right, r) - Math.max(left, l);
        if (ov <= 0) return;
        var c = (l + r) / 2;
        var d = Math.abs(c - mid);
        if (ov > bestOv + 1 || (Math.abs(ov - bestOv) <= 1 && d < bestD)) {
          bestOv = ov; bestD = d; bestC = c;
        }
      });
      if (bestC == null) return;
      var from = offset;
      var diff = carousel.clientWidth / 2 - bestC - offset;
      if (Math.abs(diff) < 2) return;
      var dur = reduceMotion ? 0 : Math.min(950, 480 + Math.abs(diff) * 0.5);
      var t0 = performance.now();
      (function anim(now) {
        var raw = dur ? Math.min(1, (now - t0) / dur) : 1;
        /* ease-in-out cúbico: arranque y llegada suaves */
        var p = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
        offset = from + diff * p;
        normalize();
        render();
        if (raw < 1) snapRaf = requestAnimationFrame(anim);
      })(t0);
    }
    function centerFirst() {
      if (initDone || userMoved) return;
      measure();
      var first = track.children[0];
      if (!setWidth || !first || !first.offsetWidth) return; /* aún sin medidas reales */
      initDone = true;
      applyCenterTo(first);
    }
    function applyCenterTo(item) {
      var raw = carousel.clientWidth / 2 - (item.offsetLeft + item.offsetWidth / 2);
      /* llevar el valor a su equivalente dentro del loop (-setWidth, 0] */
      offset = ((raw % setWidth) + setWidth) % setWidth - setWidth;
      render();
    }

    measure();
    window.addEventListener('resize', measure);
    render();

    /* Galerías: arranque con la pieza "01" centrada */
    if (carousel.classList.contains('media-slider')) {
      var centerWhenReady = function () {
        requestAnimationFrame(centerFirst);
      };
      centerWhenReady();
      track.querySelectorAll('img').forEach(function (img) {
        if (!img.complete) img.addEventListener('load', centerWhenReady);
      });
      track.querySelectorAll('video').forEach(function (v) {
        v.addEventListener('loadedmetadata', centerWhenReady);
      });
      window.addEventListener('load', centerWhenReady);
      /* Reintento clave: cada vez que la galería entra en pantalla,
         la pieza "01" vuelve a centrarse (salvo que el usuario la haya movido) */
      if ('IntersectionObserver' in window) {
        var gio = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting && !userMoved) {
              requestAnimationFrame(function () {
                measure();
                var first = track.children[0];
                if (setWidth && first && first.offsetWidth) applyCenterTo(first);
              });
            }
          });
        }, { threshold: 0.35 });
        gio.observe(carousel);
      }
    }

    carousel.addEventListener('pointerdown', function (e) {
      /* Los controles del video y su superficie no inician arrastre */
      if (e.target.closest && (e.target.closest('.video-bar') || e.target.closest('video'))) return;
      userMoved = true;
      dragging = true;
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(snapRaf);
      lastX = e.clientX;
      lastT = performance.now();
      velocity = 0;
      carousel.classList.add('is-dragging');
      carousel.setPointerCapture(e.pointerId);
    });
    carousel.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var now = performance.now();
      var dx = e.clientX - lastX;
      var dt = now - lastT || 16;
      velocity = (dx / dt) * 16;
      lastX = e.clientX;
      lastT = now;
      offset += dx;
      normalize();
      render();
    });
    ['pointerup', 'pointercancel'].forEach(function (ev) {
      carousel.addEventListener(ev, function () {
        if (!dragging) return;
        dragging = false;
        carousel.classList.remove('is-dragging');
        glide();
      });
    });

    var prevBtn = carousel.parentElement.querySelector('[data-loop-prev]');
    var nextBtn = carousel.parentElement.querySelector('[data-loop-next]');
    if (prevBtn) prevBtn.addEventListener('click', function () { stepBy(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { stepBy(1); });

    carousel.addEventListener('keydown', function (e) {
      if (e.target.matches && e.target.matches('input')) return; /* flechas de la barra de progreso */
      if (e.key === 'ArrowRight') { userMoved = true; stepBy(1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { userMoved = true; stepBy(-1); e.preventDefault(); }
    });

    /* Galerías: scroll horizontal de dos dedos (trackpad) o Shift + rueda */
    if (carousel.classList.contains('media-slider')) {
      carousel.addEventListener('wheel', function (e) {
        var dx = e.deltaX, dy = e.deltaY;
        if (!dx || Math.abs(dx) <= Math.abs(dy)) return; /* vertical = scroll de página */
        e.preventDefault();
        userMoved = true;
        measure();
        cancelAnimationFrame(rafId);
        cancelAnimationFrame(snapRaf);
        offset -= dx;
        normalize();
        render();
        clearTimeout(wheelTimer);
        wheelTimer = setTimeout(snapToNearest, 150);
      }, { passive: false });
    }
  });

  /* ---------- Galerías de proyectos: ahora usan el mismo sistema de loop ---------- */

  /* ---------- Controles personalizados para videos de galerías ---------- */
  document.querySelectorAll('.media-track video').forEach(function (video) {
    if (video.dataset.custom || video.classList.contains('ambient')) return;
    video.dataset.custom = '1';
    video.removeAttribute('controls');

    var wrap = document.createElement('div');
    wrap.className = 'video-frame';
    video.parentNode.insertBefore(wrap, video);
    wrap.appendChild(video);

    var bar = document.createElement('div');
    bar.className = 'video-bar';
    var ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
    var ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.4v14H7zM13.6 5H17v14h-3.4z"/></svg>';
    var ICON_VOL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.6L12 18.6V5.4L7.6 9.5H4zm11.8 2.5c0-1.2-.6-2.3-1.6-2.9v5.8c1-.6 1.6-1.7 1.6-2.9zm-1.6-6.4v2.1c2 .9 3.4 2.9 3.4 5.3s-1.4 4.4-3.4 5.3v2.1c3.1-1 5.4-3.9 5.4-7.4s-2.3-6.4-5.4-7.4z"/></svg>';
    var ICON_MUTE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.6L12 18.6V5.4L7.6 9.5H4zm12.6 2.5 2.2-2.2-1.3-1.3-2.2 2.2-2.2-2.2-1.3 1.3 2.2 2.2-2.2 2.2 1.3 1.3 2.2-2.2 2.2 2.2 1.3-1.3z"/></svg>';

    var playBtn = document.createElement('button');
    playBtn.type = 'button'; playBtn.className = 'vbtn'; playBtn.innerHTML = ICON_PLAY;
    playBtn.setAttribute('aria-label', 'Reproducir');
    var seek = document.createElement('input');
    seek.type = 'range'; seek.className = 'vseek'; seek.min = '0'; seek.max = '1000'; seek.value = '0';
    seek.setAttribute('aria-label', 'Progreso del video');
    var muteBtn = document.createElement('button');
    muteBtn.type = 'button'; muteBtn.className = 'vbtn'; muteBtn.innerHTML = ICON_MUTE;
    muteBtn.setAttribute('aria-label', 'Activar sonido');
    var volRange = document.createElement('input');
    volRange.type = 'range'; volRange.className = 'vvrange';
    volRange.min = '0'; volRange.max = '100'; volRange.value = '100';
    volRange.setAttribute('aria-label', 'Volumen');
    var vvol = document.createElement('div');
    vvol.className = 'vvol';
    vvol.appendChild(muteBtn); vvol.appendChild(volRange);

    bar.appendChild(playBtn); bar.appendChild(seek); bar.appendChild(vvol);
    wrap.appendChild(bar);

    function setPlayIcon() {
      playBtn.innerHTML = video.paused ? ICON_PLAY : ICON_PAUSE;
      playBtn.setAttribute('aria-label', video.paused ? 'Reproducir' : 'Pausar');
      wrap.classList.toggle('is-playing', !video.paused);
    }
    function setMuteIcon() {
      var silent = video.muted || video.volume === 0;
      muteBtn.innerHTML = silent ? ICON_MUTE : ICON_VOL;
      muteBtn.setAttribute('aria-label', silent ? 'Activar sonido' : 'Silenciar');
      volRange.value = String(Math.round(silent ? 0 : video.volume * 100));
    }

    playBtn.addEventListener('click', function () {
      this.blur();
      if (video.paused) { video.play(); }
      else { video.pause(); }
    });
    video.addEventListener('play', function () {
      document.querySelectorAll('.media-track video').forEach(function (other) {
        if (other !== video && !other.paused) other.pause();
      });
      setPlayIcon();
    });
    video.addEventListener('pause', setPlayIcon);
    video.addEventListener('timeupdate', function () {
      if (!seek.matches(':active')) seek.value = String(Math.round((video.currentTime / (video.duration || 1)) * 1000));
    });
    seek.addEventListener('input', function () {
      if (!video.duration) return;
      video.currentTime = (Number(seek.value) / 1000) * video.duration;
    });
    seek.addEventListener('change', function () { this.blur(); });
    muteBtn.addEventListener('click', function () {
      this.blur();
      video.muted = !video.muted;
    });
    volRange.addEventListener('input', function () {
      var v = Number(volRange.value) / 100;
      video.muted = v === 0;
      video.volume = Math.max(0, Math.min(1, v));
    });
    volRange.addEventListener('change', function () { this.blur(); });
    video.addEventListener('volumechange', setMuteIcon);

    wrap.addEventListener('click', function (e) {
      if (e.target === video) {
        e.stopPropagation();
        if (video.paused) video.play(); else video.pause();
      }
    });

    setPlayIcon(); setMuteIcon();
  });

  /* ---------- Videos ambientales: play/pausa según si están en pantalla ---------- */
  var ambients = document.querySelectorAll('.media-track video.ambient');
  if (ambients.length && 'IntersectionObserver' in window && !reduceMotion) {
    var ambientObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.play().catch(function () {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.35 });
    ambients.forEach(function (v) { ambientObserver.observe(v); });
  }

  /* ---------- Cursor personalizado (solo puntero fino), como design.html ---------- */
  if (finePointer && !reduceMotion) {
    var dot = document.createElement('span');
    var trail = document.createElement('span');
    dot.className = 'cursor-dot';
    trail.className = 'cursor-trail';
    dot.setAttribute('aria-hidden', 'true');
    trail.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    document.body.appendChild(trail);
    document.documentElement.classList.add('has-cursor');

    var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var dotPos = { x: pos.x, y: pos.y };
    var trailPos = { x: pos.x, y: pos.y };
    var started = false;

    function follow() {
      dotPos.x += (pos.x - dotPos.x) * 0.4;
      dotPos.y += (pos.y - dotPos.y) * 0.4;
      trailPos.x += (pos.x - trailPos.x) * 0.18;
      trailPos.y += (pos.y - trailPos.y) * 0.18;
      dot.style.left = dotPos.x + 'px';
      dot.style.top = dotPos.y + 'px';
      trail.style.left = trailPos.x + 'px';
      trail.style.top = trailPos.y + 'px';
      requestAnimationFrame(follow);
    }

    document.addEventListener('mousemove', function (e) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.style.opacity = '';
      trail.style.opacity = '';
      if (!started) { started = true; requestAnimationFrame(follow); }
    }, { passive: true });

    document.addEventListener('mouseover', function (e) {
      if (e.target.closest('a, button')) dot.classList.add('is-grow');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest('a, button')) dot.classList.remove('is-grow');
    });
    document.addEventListener('pointerdown', function () {
      dot.classList.add('is-pressed');
      window.setTimeout(function () { dot.classList.remove('is-pressed'); }, 140);
    });
    document.addEventListener('mouseleave', function () { dot.style.opacity = '0'; trail.style.opacity = '0'; });
  }

  /* ---------- Año del pie de página ---------- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
