const contentPath = "content/cms-preview.json";

function getValue(data, path) {
  return path.split(".").reduce((current, key) => current?.[key], data);
}

function setTextContent(data) {
  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = getValue(data, element.dataset.content);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });
}

function normalizePhone(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function setContactLinks(data) {
  const phone = data.contact?.phone || "";
  const email = data.contact?.email || "";
  const phoneHref = normalizePhone(phone);
  const smsBody = encodeURIComponent("Hi Rena, I'm interested in current group options for the 63rd Street homes near SDSU. My group size is ");

  document.querySelectorAll("[data-cms-phone-link]").forEach((link) => {
    link.href = `sms:${phoneHref}?&body=${smsBody}`;
  });

  document.querySelectorAll("[data-cms-call-link]").forEach((link) => {
    link.href = `tel:${phoneHref}`;
  });

  document.querySelectorAll("[data-cms-email-link]").forEach((link) => {
    link.href = `mailto:${email}?subject=SDSU%2063rd%20Street%20tour%20request`;
  });
}

function createFeatureList(features = []) {
  const list = document.createElement("ul");
  list.className = "feature-list";

  features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    list.appendChild(item);
  });

  return list;
}

function renderProperties(properties = []) {
  const container = document.querySelector("#cms-property-cards");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  properties.forEach((property) => {
    const article = document.createElement("article");
    article.className = "property-card";

    const preview = document.createElement("div");
    preview.className = "property-gallery-preview";

    const imageWrap = document.createElement("div");
    imageWrap.className = "property-hero-photo cms-static-photo";

    const image = document.createElement("img");
    image.src = property.image;
    image.alt = property.imageAlt || property.address;
    image.loading = "lazy";

    const badge = document.createElement("span");
    badge.className = "property-badge";
    badge.textContent = property.bestFor;

    imageWrap.append(image, badge);
    preview.appendChild(imageWrap);

    const content = document.createElement("div");
    content.className = "property-content";

    const heading = document.createElement("div");
    heading.className = "property-heading";

    const title = document.createElement("h3");
    title.textContent = property.address;

    const leaseLabel = document.createElement("p");
    leaseLabel.className = "lease-label";
    leaseLabel.textContent = property.leaseLabel;

    const benefitLine = document.createElement("p");
    benefitLine.className = "benefit-line";
    benefitLine.textContent = property.benefitLine;

    const bestFor = document.createElement("p");
    bestFor.className = "best-for";
    bestFor.textContent = property.bestFor;

    heading.append(title, leaseLabel, benefitLine, bestFor);

    const actions = document.createElement("div");
    actions.className = "card-actions";
    actions.innerHTML = `
      <a class="button button-small" href="#homes">View Photos</a>
      <a class="button button-secondary button-small" href="#video-title">Watch Video</a>
      <a class="button button-small" href="#tour">Ask About Terms</a>
    `;

    content.append(heading, createFeatureList(property.features), actions);
    article.append(preview, content);
    container.appendChild(article);
  });
}

function renderVideos(properties = []) {
  const container = document.querySelector("#cms-video-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  properties.forEach((property) => {
    const button = document.createElement("button");
    button.className = "video-card";
    button.type = "button";

    button.innerHTML = `
      <span class="video-thumb">
        <img src="${property.videoThumb}" alt="${property.address} video tour thumbnail" loading="lazy">
        <span class="video-play-icon" aria-hidden="true"></span>
      </span>
      <span>
        <strong>${property.videoTitle}</strong>
        <small>Then text ${document.querySelector("[data-content='contact.phone']")?.textContent || "619-917-2011"} for current group options</small>
      </span>
    `;

    container.appendChild(button);
  });
}

function renderFaqs(faqs = []) {
  const container = document.querySelector("#cms-faq-grid");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  faqs.forEach((faq) => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const answer = document.createElement("p");

    summary.textContent = faq.question;
    answer.textContent = faq.answer;

    details.append(summary, answer);
    container.appendChild(details);
  });
}

async function loadContent() {
  const response = await fetch(`${contentPath}?v=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load ${contentPath}`);
  }

  return response.json();
}

loadContent()
  .then((data) => {
    document.title = data.meta?.title || document.title;
    const description = document.querySelector("meta[name='description']");
    if (description && data.meta?.description) {
      description.content = data.meta.description;
    }

    setTextContent(data);
    setContactLinks(data);
    renderProperties(data.properties);
    renderVideos(data.properties);
    renderFaqs(data.faqs);
  })
  .catch((error) => {
    console.error(error);
    const main = document.querySelector("main");
    if (main) {
      main.insertAdjacentHTML("afterbegin", "<section class=\"urgency-strip\"><p>CMS preview content could not be loaded.</p></section>");
    }
  });
