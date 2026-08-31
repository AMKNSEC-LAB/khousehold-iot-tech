/* KHouseHold Research — page interactions
   1. IntersectionObserver-driven active nav state
   2. Mobile menu toggle (Escape / resize / link-click auto-close) */
(function () {
  'use strict';

  var menuButton = document.getElementById('menu-button');
  var menuIcon = document.getElementById('menu-icon');
  var navLinks = document.getElementById('nav-links');

  /* ---------- Active section sync ---------- */
  var sectionIds = ['vision', 'agenda', 'current-study', 'methods', 'outputs', 'roadmap', 'collaboration'];
  var links = {};
  document.querySelectorAll('[data-nav]').forEach(function (a) {
    links[a.getAttribute('data-nav')] = a;
  });

  function setActive(id) {
    Object.keys(links).forEach(function (key) {
      var link = links[key];
      if (key === id) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'location');
      } else {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -58% 0px' }
    );
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  /* ---------- Mobile menu ---------- */
  function isMenuOpen() {
    return navLinks.classList.contains('is-open');
  }

  function setMenu(open) {
    navLinks.classList.toggle('is-open', open);
    menuIcon.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    document.body.classList.toggle('menu-open', open);
  }

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      setMenu(!isMenuOpen());
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isMenuOpen()) setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 820 && isMenuOpen()) setMenu(false);
  });

  if (navLinks) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }
})();
