(function () {
  'use strict';

  let dialog = null;
  let returnFocus = null;

  function youtubeId(urlString) {
    try {
      const url = new URL(urlString, window.location.href);
      if (url.hostname === 'youtu.be') return url.pathname.slice(1);
      if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
        return url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
      }
    } catch (_) {
      return null;
    }
    return null;
  }

  function closeVideo() {
    if (!dialog) return;
    dialog.remove();
    dialog = null;
    document.body.classList.remove('rr-video-open');
    if (returnFocus?.isConnected) returnFocus.focus();
    returnFocus = null;
  }

  function openVideo(id, title, trigger) {
    closeVideo();
    returnFocus = trigger;
    dialog = document.createElement('div');
    dialog.className = 'rr-video-overlay';
    dialog.innerHTML = '<div class="rr-video-dialog" role="dialog" aria-modal="true" aria-labelledby="rr-video-title"><div class="rr-video-bar"><h2 id="rr-video-title"></h2><button type="button" class="rr-video-close" aria-label="Close video">×</button></div><div class="rr-video-frame"><iframe title="Property video tour" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div></div>';
    dialog.querySelector('#rr-video-title').textContent = title;
    dialog.querySelector('iframe').src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1';
    dialog.querySelector('.rr-video-close').addEventListener('click', closeVideo);
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeVideo();
    });
    document.body.appendChild(dialog);
    document.body.classList.add('rr-video-open');
    dialog.querySelector('.rr-video-close').focus();
  }

  document.addEventListener('click', function (event) {
    if (document.body.classList.contains('fl-builder-edit')) return;
    const galleryLink = event.target.closest('a[href*="#property-"]');
    const card = galleryLink?.closest('[id^="property-"]');
    if (card && new URL(galleryLink.href).hash === '#' + card.id) {
      const gallery = card.querySelector('.fl-module-html');
      if (gallery) {
        event.preventDefault();
        event.stopImmediatePropagation();
        gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    const link = event.target.closest('a[href*="#video-"]');
    if (!link) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const hash = new URL(link.href).hash;
    const heading = document.getElementById(decodeURIComponent(hash.slice(1)));
    const tourColumn = heading?.closest('.fl-col-content');
    const tourLink = tourColumn?.querySelector('.rr-video-thumb a[href*="youtu"], .fl-module-photo a[href*="youtu"]');
    const id = tourLink && youtubeId(tourLink.href);
    if (!id) return;
    openVideo(id, heading.textContent.trim() || 'Property video tour', link);
  }, true);

  document.addEventListener('keydown', function (event) {
    if (!dialog) return;
    if (event.key === 'Escape') closeVideo();
    if (event.key !== 'Tab') return;
    const close = dialog.querySelector('.rr-video-close');
    if (event.shiftKey || document.activeElement !== close) {
      event.preventDefault();
      close.focus();
    }
  });
})();
