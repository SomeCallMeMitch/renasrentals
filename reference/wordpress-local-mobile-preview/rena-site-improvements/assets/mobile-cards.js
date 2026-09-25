(function () {
  'use strict';

  if (document.body.classList.contains('fl-builder-edit')) return;

  const icons = {
    bed: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20v-9m18 9v-9M3 17h18M5 12V7h14v5M3 12h18v5M6 20v-3m12 3v-3"/></svg>',
    bath: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13h18v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-2Zm3 8v1m12-1v1M6 13V5a3 3 0 0 1 6 0v1"/></svg>',
    parking: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>'
  };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function factValue(card, label) {
    const item = [...card.querySelectorAll('.rr-property-fact')]
      .find((node) => node.querySelector('.rr-property-fact-label')?.textContent.trim().toLowerCase() === label);
    return item?.querySelector('.rr-property-fact-value')?.textContent.trim() || '';
  }

  function appendFact(parent, icon, value, label) {
    const item = element('div', 'rr-card-fact');
    item.innerHTML = icons[icon];
    item.append(element('strong', 'rr-card-fact-value', value));
    item.append(element('span', 'rr-card-fact-label', label));
    parent.append(item);
  }

  function buildCard(card, number) {
    const content = card.querySelector(':scope > .fl-col-content');
    const source = card.querySelector('.listing-gallery__data');
    const copySource = content?.querySelector(':scope > .fl-module-mobile-card-copy .rr-mobile-card-copy');
    if (!content || !source || !copySource) return;

    const copyText = (field) => copySource.querySelector(`[data-rr-copy-field="${field}"]`)?.textContent.trim() || '';

    let photos;
    try { photos = JSON.parse(source.textContent); } catch (_) { return; }
    if (!Array.isArray(photos) || !photos.length) return;

    const modules = [...content.children];
    const headings = modules.filter((node) => node.classList.contains('fl-module-heading'));
    const address = headings[0]?.textContent.trim();
    if (!address) return;
    const beds = factValue(card, 'bedrooms');
    const baths = factValue(card, 'baths');
    const statusModule = modules.find((node) => node.classList.contains('fl-module-button-group'));
    const statusText = statusModule?.querySelector('.fl-button-text')?.textContent.trim() || '';
    if (!statusText) return;
    const actionModule = modules.filter((node) => node.classList.contains('fl-module-button-group')).at(-1);
    const applySource = [...(actionModule?.querySelectorAll('a[href]') || [])].at(-1);

    const shell = element('section', 'rr-card-mobile');
    shell.setAttribute('aria-label', address + ' property');

    const carousel = element('div', 'rr-card-carousel');
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carousel');
    carousel.setAttribute('aria-label', address + ' photos');
    const image = element('img', 'rr-card-image');
    image.loading = number === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    const previous = element('button', 'rr-card-arrow rr-card-arrow--previous', '‹');
    previous.type = 'button';
    previous.setAttribute('aria-label', 'Previous photo of ' + address);
    const next = element('button', 'rr-card-arrow rr-card-arrow--next', '›');
    next.type = 'button';
    next.setAttribute('aria-label', 'Next photo of ' + address);
    const count = element('span', 'rr-card-count');
    count.setAttribute('aria-live', 'polite');
    let index = 0;
    function showPhoto(nextIndex) {
      index = (nextIndex + photos.length) % photos.length;
      image.src = photos[index].src;
      image.alt = address + ', photo ' + (index + 1) + ' of ' + photos.length;
      count.textContent = (index + 1) + ' / ' + photos.length;
    }
    previous.addEventListener('click', () => showPhoto(index - 1));
    next.addEventListener('click', () => showPhoto(index + 1));
    let touchStart = null;
    carousel.addEventListener('touchstart', (event) => {
      touchStart = [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    }, { passive: true });
    carousel.addEventListener('touchend', (event) => {
      if (!touchStart) return;
      const dx = event.changedTouches[0].clientX - touchStart[0];
      const dy = event.changedTouches[0].clientY - touchStart[1];
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) showPhoto(index + (dx < 0 ? 1 : -1));
      touchStart = null;
    }, { passive: true });
    showPhoto(0);
    carousel.append(image, previous, next, count);

    const body = element('div', 'rr-card-body');
    const headingRow = element('div', 'rr-card-heading-row');
    const availability = element('div', 'rr-card-availability');
    if (statusText.toLowerCase() === 'available') availability.classList.add('rr-card-availability--available');
    const availabilityCopy = element('div', 'rr-card-availability-copy');
    availabilityCopy.append(element('span', 'rr-card-status', statusText), element('strong', 'rr-card-date', copyText('available_date')));
    availability.append(availabilityCopy);
    const addressBlock = element('div', 'rr-card-address');
    addressBlock.append(element('h3', '', address));
    addressBlock.append(element('p', 'rr-card-location', copyText('location')));
    headingRow.append(availability, addressBlock);

    const facts = element('div', 'rr-card-facts');
    if (beds) appendFact(facts, 'bed', beds, copyText('bed_label'));
    if (baths) appendFact(facts, 'bath', baths, copyText('bath_label'));
    if (copyText('parking_value')) appendFact(facts, 'parking', copyText('parking_value'), copyText('parking_label'));

    const copy = element('div', 'rr-card-copy');
    const headline = copyText('headline');
    if (headline) copy.append(element('h4', '', headline));
    const description = copyText('description');
    if (description) copy.append(element('p', '', description));

    const actions = element('div', 'rr-card-actions');
    const details = element('span', 'rr-card-button rr-card-button--details', copyText('details_label'));
    const apply = element('a', 'rr-card-button rr-card-button--apply', copyText('apply_label'));
    if (!applySource?.href) return;
    apply.href = applySource.href;
    apply.target = '_blank';
    apply.rel = 'noopener';
    actions.append(details, apply);

    body.append(headingRow, facts, copy, actions);
    shell.append(carousel, body);
    content.append(shell);
    card.classList.add('rr-card-enhanced');
  }

  function init() {
    document.querySelectorAll('[id^="property-"]').forEach(buildCard);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
