/* The action labels and video URL stay editable in the Beaver Builder button group. */
(function () {
  'use strict';

  if (document.body.classList.contains('fl-builder-edit')) return;
  const section = document.querySelector('body.rr-detail-page .rr-detail-property');
  const content = section?.querySelector(':scope > .fl-col-content');
  const returnCards = {
    '/5005-63rd-st-details/': 'property-5005',
    '/5005-63rd-st-studio-details/': 'property-5005-studio',
    '/5005-63rd-st-cottage-details/': 'property-5005-cottage',
    '/5011-63rd-st-details/': 'property-5011',
    '/5013-63rd-st-details/': 'property-5013',
    '/5051-63rd-st-details/': 'property-5051',
    '/5053-63rd-st-details/': 'property-5053'
  };
  const pagePath = window.location.pathname.replace(/\/?$/, '/') || '/';
  const returnCard = returnCards[pagePath];
  if (content && returnCard && !content.querySelector('.rr-detail-back')) {
    const backLink = document.createElement('a');
    backLink.className = 'rr-detail-back';
    backLink.href = '/#' + returnCard;
    backLink.textContent = '← Back to Available Homes';
    content.insertBefore(backLink, content.firstChild);
  }

  const videoLink = section?.querySelector('.rr-details-actions .fl-button-group-button:nth-child(2) a');
  if (!videoLink) return;
  const address = section.querySelector('.fl-module-heading')?.textContent.trim() || 'Property';

  let overlay = null;
  let returnFocus = null;

  function youtubeId(href) {
    try {
      const url = new URL(href, window.location.href);
      let id = null;
      if (url.hostname === 'youtu.be') id = url.pathname.slice(1);
      if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
        id = url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
      }
      return /^[A-Za-z0-9_-]{11}$/.test(id || '') ? id : null;
    } catch (_) {
      return null;
    }
  }

  function closeVideo() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    document.body.classList.remove('rr-video-open');
    if (returnFocus?.isConnected) returnFocus.focus();
    returnFocus = null;
  }

  videoLink.addEventListener('click', function (event) {
    const id = youtubeId(videoLink.href);
    if (!id) return;
    event.preventDefault();
    returnFocus = videoLink;
    overlay = document.createElement('div');
    overlay.className = 'rr-video-overlay';
    overlay.innerHTML = '<div class="rr-video-dialog" role="dialog" aria-modal="true" aria-labelledby="rr-video-title"><div class="rr-video-bar"><h2 id="rr-video-title"></h2><button type="button" class="rr-video-close" aria-label="Close video">×</button></div><div class="rr-video-frame"><iframe title="Property video tour" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div></div>';
    overlay.querySelector('#rr-video-title').textContent = address + ' video tour';
    overlay.querySelector('iframe').title = address + ' video tour';
    overlay.querySelector('iframe').src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
    overlay.querySelector('.rr-video-close').addEventListener('click', closeVideo);
    overlay.addEventListener('click', function (clickEvent) {
      if (clickEvent.target === overlay) closeVideo();
    });
    document.body.appendChild(overlay);
    document.body.classList.add('rr-video-open');
    overlay.querySelector('.rr-video-close').focus();
  });

  document.addEventListener('keydown', function (event) {
    if (!overlay) return;
    if (event.key === 'Escape') closeVideo();
    if (event.key !== 'Tab') return;
    const close = overlay.querySelector('.rr-video-close');
    if (event.shiftKey || document.activeElement !== close) {
      event.preventDefault();
      close.focus();
    }
  });
})();
