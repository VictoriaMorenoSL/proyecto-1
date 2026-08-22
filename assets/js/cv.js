(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Preloader: solo carga inicial, el ícono sube y descubre ---------- */
  var preloader = document.getElementById('preloader');
  if (preloader && !reduceMotion) {
    var reveal = function () {
      window.setTimeout(function () { preloader.classList.add('is-leaving'); }, 350);
      window.setTimeout(function () { preloader.classList.add('is-hidden'); }, 1300);
    };
    if (document.readyState === 'complete') reveal();
    else window.addEventListener('load', reveal);
  }

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
      if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'true');
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
    var track = carousel.querySelector('.loop-track');
    if (!track) return;

    Array.prototype.slice.call(track.children).forEach(function (node) {
      track.appendChild(node.cloneNode(true));
    });
    track.querySelectorAll('img').forEach(function (img) { img.setAttribute('draggable', 'false'); });

    var setWidth = 0;
    var offset = 0;
    var dragging = false;
    var lastX = 0;
    var lastT = 0;
    var velocity = 0;
    var rafId = null;

    function measure() { setWidth = track.scrollWidth / 2; }
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
      })();
    }
    function stepBy(dir) {
      measure();
      cancelAnimationFrame(rafId);
      velocity = dir * 14;
      glide();
    }

    measure();
    window.addEventListener('resize', measure);
    render();

    carousel.addEventListener('pointerdown', function (e) {
      dragging = true;
      cancelAnimationFrame(rafId);
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
      if (e.key === 'ArrowRight') { stepBy(1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { stepBy(-1); e.preventDefault(); }
    });
  });

  /* ---------- Galerías de proyectos: scroll-snap + drag con mouse + teclado ---------- */
  document.querySelectorAll('.media-slider').forEach(function (slider) {
    var isDown = false;
    var startX = 0;
    var startScroll = 0;
    var moved = false;

    slider.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = slider.scrollLeft;
      slider.classList.add('is-dragging');
      slider.setPointerCapture(e.pointerId);
    });
    slider.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      slider.scrollLeft = startScroll - dx;
    });
    ['pointerup', 'pointercancel'].forEach(function (ev) {
      slider.addEventListener(ev, function () {
        isDown = false;
        slider.classList.remove('is-dragging');
      });
    });
    slider.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        slider.scrollBy({ left: 260, behavior: reduceMotion ? 'auto' : 'smooth' });
        e.preventDefault();
      }
      if (e.key === 'ArrowLeft') {
        slider.scrollBy({ left: -260, behavior: reduceMotion ? 'auto' : 'smooth' });
        e.preventDefault();
      }
    });
  });

  /* ---------- Cursor personalizado (solo puntero fino) ---------- */
  if (finePointer && !reduceMotion) {
    var dot = document.createElement('div');
    var trail = document.createElement('div');
    dot.className = 'cursor-dot';
    trail.className = 'cursor-trail';
    document.body.appendChild(dot);
    document.body.appendChild(trail);
    document.documentElement.classList.add('has-cursor');

    var mx = window.innerWidth / 2;
    var my = window.innerHeight / 2;
    var tx = mx;
    var ty = my;
    var started = false;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      if (!started) {
        started = true;
        tx = mx; ty = my;
        trail.style.left = tx + 'px';
        trail.style.top = ty + 'px';
        (function follow() {
          tx += (mx - tx) * 0.14;
          ty += (my - ty) * 0.14;
          trail.style.left = tx + 'px';
          trail.style.top = ty + 'px';
          requestAnimationFrame(follow);
        })();
      }
    }, { passive: true });

    document.addEventListener('mouseover', function (e) {
      var interactive = e.target.closest('a, button, input, textarea, select, .media-slider, [data-loop]');
      dot.classList.toggle('is-grow', !!interactive);
    });
    document.addEventListener('mousedown', function () { dot.classList.add('is-down'); });
    document.addEventListener('mouseup', function () { dot.classList.remove('is-down'); });
    document.addEventListener('mouseleave', function () { dot.style.opacity = '0'; trail.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { dot.style.opacity = ''; trail.style.opacity = ''; });
  }

  /* ---------- Año del pie de página ---------- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
