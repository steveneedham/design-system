(function () {
  'use strict';

  function initSignalStrips(root) {
    root.querySelectorAll('.signal-track').forEach(function (track) {
      if (track.dataset.enhanced === 'true') return;
      var group = track.querySelector('.signal-group');
      if (!group) return;
      var clone = group.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a, button, input, select, textarea').forEach(function (item) {
        item.setAttribute('tabindex', '-1');
      });
      track.appendChild(clone);
      track.classList.add('is-ready');
      track.dataset.enhanced = 'true';
    });
  }

  function initReveals(root) {
    var stops = Array.from(root.querySelectorAll('.stop'));
    if (!stops.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      stops.forEach(function (stop) { stop.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    stops.forEach(function (stop) { observer.observe(stop); });
  }

  function initThemeControls(root) {
    root.querySelectorAll('[data-theme-choice]').forEach(function (control) {
      control.addEventListener('click', function () {
        var theme = control.dataset.themeChoice;
        if (theme === 'paper') document.documentElement.setAttribute('data-theme', 'paper');
        else document.documentElement.removeAttribute('data-theme');
        root.querySelectorAll('[data-theme-choice]').forEach(function (item) {
          item.setAttribute('aria-pressed', String(item === control));
        });
      });
    });
  }

  function init(root) {
    root = root || document;
    initSignalStrips(root);
    initReveals(root);
    initThemeControls(root);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); });
  else init(document);

  window.StevenNeedhamDesign = { init: init };
}());
