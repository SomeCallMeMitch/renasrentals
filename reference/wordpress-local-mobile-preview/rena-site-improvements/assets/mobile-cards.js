(function () {
  'use strict';

  if (document.body.classList.contains('fl-builder-edit')) return;

  const icons = {
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>',
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

  function parkingDisplay(raw) {
    const vehicles = raw.match(/(\d+)\s*vehicles?/i);
    if (vehicles) return [vehicles[1], Number(vehicles[1]) === 1 ? 'Vehicle' : 'Vehicles'];
    if (/\bspot\b/i.test(raw)) return ['1', 'Parking spot'];
    if (/permit street/i.test(raw)) return ['Permit', ''];
    if (/on-site/i.test(raw)) return ['On-site', ''];
    return [raw || 'Ask', 'Parking'];
  }

  function buildCard(card, number) {
    const content = card.querySelector(':scope > .fl-col-content');
    const source = card.querySelector('.listing-gallery__data');
    if (!content || !source) return;

    let photos;
    try { photos = JSON.parse(source.textContent); } catch (_) { return; }
    if (!Array.isArray(photos) || !photos.length) return;

    const modules = [...content.children];
    const headings = modules.filter((node) => node.classList.contains('fl-module-heading'));
    const address = headings[0]?.textContent.trim() || 'Property';
    const beds = factValue(card, 'bedrooms');
    const baths = factValue(card, 'baths');
    const parkingSource = factValue(card, 'parking');
    const parking = parkingDisplay(parkingSource);
    const statusModule = modules.find((node) => node.classList.contains('fl-module-button-group'));
    const statusText = statusModule?.querySelector('.fl-button-text')?.textContent.trim() || 'Ask availability';
    const dateMatch = statusModule?.textContent.match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{1,2},?\s+\d{4}/i);
    const date = dateMatch?.[0] || 'Aug 15, 2027';
    const applySource = [...card.querySelectorAll('a[href]')].find((link) => /^Apply\b/i.test(link.textContent.trim()));

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
    availability.innerHTML = icons.calendar;
    const availabilityCopy = element('div', 'rr-card-availability-copy');
    availabilityCopy.append(element('span', 'rr-card-status', statusText), element('strong', 'rr-card-date', date));
    availability.append(availabilityCopy);
    const addressBlock = element('div', 'rr-card-address');
    addressBlock.append(element('h3', '', address));
    addressBlock.append(element('p', 'rr-card-location', 'San Diego, California 92115'));
    headingRow.append(availability, addressBlock);

    const facts = element('div', 'rr-card-facts');
    appendFact(facts, 'bed', beds || 'Ask', Number(beds) === 1 ? 'Bed' : 'Beds');
    appendFact(facts, 'bath', baths || 'Ask', Number(baths) === 1 ? 'Bath' : 'Baths');
    appendFact(facts, 'parking', parking[0], parking[1]);
    facts.lastElementChild.setAttribute('aria-label', 'Parking: ' + (parkingSource || 'ask for details'));

    const copy = element('div', 'rr-card-copy');
    const headline = beds && baths ? beds + ' BD, ' + baths + ' BA, 10-minute walk to SDSU.' : 'A short walk to SDSU.';
    copy.append(element('h4', '', headline));

    const actions = element('div', 'rr-card-actions');
    const details = element('span', 'rr-card-button rr-card-button--details', 'See Details');
    details.setAttribute('aria-label', 'See Details, coming soon');
    const apply = element('a', 'rr-card-button rr-card-button--apply', 'Apply Now');
    apply.href = applySource?.href || 'https://renasrentals.tenantcloud.com/';
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
