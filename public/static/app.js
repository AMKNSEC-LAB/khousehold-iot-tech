/* KHouseHold Research — page interactions
   1. IntersectionObserver-driven active nav state
   2. Mobile menu toggle (Escape / resize / link-click auto-close)
   3. Collaboration copy-to-clipboard + toast */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var menuButton = document.getElementById('menu-button');
  var menuIcon = document.getElementById('menu-icon');
  var navLinks = document.getElementById('nav-links');
  var toast = document.getElementById('toast');
  var toastTimer = null;

  /* ---------- Active section sync ---------- */
  var sectionIds = ['livinglab', 'vision', 'experiments', 'tracks', 'technology', 'roadmap', 'contact'];
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

  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  /* ---------- Toast ---------- */
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-show');
    }, 2400);
  }

  /* ---------- Copy inquiry ---------- */
  var copyButton = document.getElementById('copy-inquiry-button');
  if (copyButton) {
    copyButton.addEventListener('click', function () {
      var text = '안녕하세요. KHouseHold 연구 협력에 관해 문의드립니다.\n\n소속:\n관심 주제:\n제안 내용:';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(function () {
            showToast('협력 문의 문구를 복사했습니다.');
          })
          .catch(function () {
            showToast('복사할 수 없습니다. 이메일 초안 열기를 이용해 주세요.');
          });
      } else {
        showToast('복사할 수 없습니다. 이메일 초안 열기를 이용해 주세요.');
      }
    });
  }
})();
