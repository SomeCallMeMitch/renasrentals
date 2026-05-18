const CONTACT = {
  phoneDisplay: "619-917-2011",
  phoneHref: "+16199172011",
  email: "renasrentals@gmail.com"
};

const PROPERTIES = [
  {
    id: "5005",
    address: "5005 63rd St",
    beds: "5",
    baths: "4",
    pricing: "Rooms from $1,100/month",
    pricingNote: "Ask about current room availability and group options.",
    availability: "Available August 2026",
    parking: "4-6 vehicles",
    laundry: "On-site laundry",
    outdoor: "Outdoor patio / yard space",
    video: "https://www.youtube.com/embed/axuQexUtISc?autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/axuQexUtISc/hqdefault.jpg",
    image: "assets/property-02.jpeg",
    imageAlt: "Kitchen and shared living space at 5005 63rd St",
    ctaLabel: "Ask About 5005",
    benefits: [
      "Private-bedroom shared home setting",
      "Dual AC system upstairs and downstairs",
      "Two dishwashers, two sinks, and two refrigerators",
      "Family room, living room, and separate dining rooms",
      "On-site parking and laundry"
    ]
  },
  {
    id: "5011",
    address: "5011 63rd St",
    beds: "6",
    baths: "3",
    pricing: "Rooms from $1,100/month",
    pricingNote: "Ask about current room availability and group options.",
    availability: "Available August 2026",
    parking: "5 vehicles",
    laundry: "On-site laundry",
    outdoor: "Front lawn / side yard space",
    video: "https://www.youtube.com/embed/uTAwdTavdIw?autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/uTAwdTavdIw/hqdefault.jpg",
    image: "assets/property-16.jpg",
    imageAlt: "Living room with exposed wood beam ceiling at 5011 63rd St",
    ctaLabel: "Ask About 5011",
    benefits: [
      "Private-bedroom shared home setting",
      "Open floor plan with exposed beam high ceilings",
      "Extra large bedrooms",
      "Full kitchen and shared living space",
      "On-site parking and laundry"
    ]
  }
];

const GALLERY = [
  {
    property: "5005",
    category: "kitchen",
    src: "assets/property-02.jpeg",
    alt: "Kitchen view into living space at 5005 63rd St",
    title: "Cook together",
    caption: "Full kitchen connected to shared living space",
    featured: true
  },
  {
    property: "5011",
    category: "kitchen",
    src: "assets/property-07.jpg",
    alt: "Kitchen island and cabinetry at 5011 63rd St",
    title: "Kitchen island",
    caption: "Full kitchen with island seating and storage"
  },
  {
    property: "5011",
    category: "living",
    src: "assets/property-16.jpg",
    alt: "Living room with exposed wood beam ceiling at 5011 63rd St",
    title: "Hang out",
    caption: "Large common area for roommates to spread out",
    wide: true
  },
  {
    property: "5005",
    category: "living",
    src: "assets/property-05.jpeg",
    alt: "Open living and dining room at 5005 63rd St",
    title: "Living + dining",
    caption: "Shared room for meals, study, and downtime"
  },
  {
    property: "5005",
    category: "outdoor",
    src: "assets/property-08.jpeg",
    alt: "Outdoor patio and planters at 5005 63rd St",
    title: "Outdoor patio",
    caption: "Outdoor space for relaxing between classes",
    wide: true
  },
  {
    property: "5005",
    category: "bedrooms",
    src: "assets/property-13.jpg",
    alt: "Private bedroom with window at 5005 63rd St",
    title: "Private bedroom",
    caption: "Bedroom with window and personal space"
  },
  {
    property: "5005",
    category: "bathrooms",
    src: "assets/property-14.jpg",
    alt: "Bathroom vanity and shower at 5005 63rd St",
    title: "Bathroom",
    caption: "Multiple bathrooms for roommate convenience"
  },
  {
    property: "5011",
    category: "exterior",
    src: "assets/property-11.jpg",
    alt: "Front exterior and lawn at 5011 63rd St",
    title: "Real house setting",
    caption: "Front exterior and lawn near SDSU"
  },
  {
    property: "5005",
    category: "exterior",
    src: "assets/property-09.jpg",
    alt: "Front exterior and driveway at 5005 63rd St",
    title: "Exterior + driveway",
    caption: "House setting with driveway parking"
  },
  {
    property: "5011",
    category: "outdoor",
    src: "assets/property-06.jpg",
    alt: "Side yard and home exterior at 5011 63rd St",
    title: "Side yard",
    caption: "Outdoor space alongside the home"
  },
  {
    property: "5011",
    category: "kitchen",
    src: "assets/property-12.jpg",
    alt: "Kitchen cabinetry and appliances at 5011 63rd St",
    title: "Full-size appliances",
    caption: "Kitchen storage and appliances for shared routines"
  },
  {
    property: "5011",
    category: "kitchen",
    src: "assets/property-15.jpg",
    alt: "Kitchen counter and pass-through seating at 5011 63rd St",
    title: "Bar seating",
    caption: "Counter seating for quick meals"
  },
  {
    property: "5005",
    category: "kitchen",
    src: "assets/property-04.jpeg",
    alt: "Kitchen counters and double sink at 5005 63rd St",
    title: "Large kitchen",
    caption: "Counter space and full kitchen layout"
  }
];

const FAQS = [
  {
    question: "How close are the homes to SDSU?",
    answer: "The Rena's Rentals pages describe both homes as a 10 minute walk to campus near 63rd & Pontiac. Contact Rena's Rentals for current map details and tour timing."
  },
  {
    question: "Can smaller groups inquire?",
    answer: "Yes. You do not need to have a full group before reaching out. Text your current group size, timing, and preferred home to ask about current options."
  },
  {
    question: "Can parents join the tour?",
    answer: "Yes. Parents and guarantors can join in-person or video tours and ask questions about rent, parking, application steps, and current room availability."
  },
  {
    question: "Are video tours available?",
    answer: "Yes. The page includes video tour links for both 5005 63rd St and 5011 63rd St."
  },
  {
    question: "Is parking available?",
    answer: "Both homes list on-site parking. 5005 lists parking for 4-6 vehicles and 5011 lists parking for 5 vehicles. Contact Rena's Rentals for current parking terms."
  },
  {
    question: "Are bedrooms private?",
    answer: "The homes are being marketed as private-bedroom shared homes. Confirm the exact room plan and current room availability directly with Rena's Rentals."
  },
  {
    question: "What is the application process?",
    answer: "Contact Rena's Rentals for the current application process. If guarantors are involved, ask what documentation and timing are required before tours."
  },
  {
    question: "Are the homes rented by room or as a full house?",
    answer: "Rooms are currently promoted from $1,100/month, and full groups or smaller roommate groups can inquire. Contact Rena's Rentals for the current structure by home."
  },
  {
    question: "What lease terms are available?",
    answer: "Contact Rena's Rentals for current lease terms and availability before making plans."
  },
  {
    question: "Who handles maintenance?",
    answer: "Rena's Rentals is the direct contact for rental questions and tours. Ask during the tour how maintenance requests are submitted and handled."
  }
];

const propertyCards = document.querySelector("#property-cards");
const galleryGrid = document.querySelector("#gallery-grid");
const videoGrid = document.querySelector("#video-grid");
const faqGrid = document.querySelector("#faq-grid");
const modal = document.querySelector("#photo-modal");
const modalImage = document.querySelector("#modal-image");
const modalCaption = document.querySelector("#modal-caption");
const videoModal = document.querySelector("#video-modal");
const videoIframe = document.querySelector("#video-iframe");
const videoModalTitle = document.querySelector("#video-modal-title");
let activeFilter = "all";
let lastFocusedGalleryItem = null;
let lastFocusedVideoItem = null;

const textMessage = encodeURIComponent("Hi Rena, I'm interested in the 63rd Street SDSU homes. My group size is ");

function createList(items, className = "feature-list") {
  const list = document.createElement("ul");
  list.className = className;

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  return list;
}

function renderProperties() {
  if (!propertyCards) {
    return;
  }

  propertyCards.innerHTML = "";

  PROPERTIES.forEach((property) => {
    const article = document.createElement("article");
    article.className = "property-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "property-image-wrap";

    const image = document.createElement("img");
    image.src = property.image;
    image.alt = property.imageAlt;
    image.loading = "lazy";

    const badge = document.createElement("span");
    badge.className = "property-badge";
    badge.textContent = property.availability;

    imageWrap.append(image, badge);

    const content = document.createElement("div");
    content.className = "property-content";

    const heading = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = property.address;
    const price = document.createElement("p");
    price.className = "price";
    price.innerHTML = `${property.pricing}<small>${property.pricingNote}</small>`;
    heading.append(title, price);

    const specs = document.createElement("dl");
    specs.className = "specs";
    [
      ["Bedrooms", property.beds],
      ["Baths", property.baths],
      ["Parking", property.parking]
    ].forEach(([label, value]) => {
      const div = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      div.append(dt, dd);
      specs.appendChild(div);
    });

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const tour = document.createElement("a");
    tour.className = "button button-small";
    tour.dataset.cta = `property_${property.id}_inquiry`;
    tour.href = "#gallery";
    tour.textContent = "View Photos + Tour";

    const inquire = document.createElement("a");
    inquire.className = "text-link";
    inquire.dataset.cta = `property_${property.id}_inquiry`;
    inquire.href = `sms:${CONTACT.phoneHref}?&body=${textMessage}`;
    inquire.textContent = property.ctaLabel;

    actions.append(tour, inquire);
    content.append(heading, specs, createList(property.benefits), actions);
    article.append(imageWrap, content);
    propertyCards.appendChild(article);
  });
}

function renderGallery() {
  if (!galleryGrid) {
    return;
  }

  const visibleItems = GALLERY.filter((item) => activeFilter === "all" || item.category === activeFilter);
  galleryGrid.innerHTML = "";

  visibleItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "gallery-item";
    if (item.featured && activeFilter === "all") {
      button.classList.add("is-featured");
    }
    if (item.wide && activeFilter === "all") {
      button.classList.add("is-wide");
    }
    button.type = "button";
    button.dataset.src = item.src;
    button.dataset.alt = item.alt;
    button.dataset.caption = `${item.title}: ${item.caption}`;
    button.setAttribute("aria-label", `Open larger photo: ${item.title}`);

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = index < 2 ? "eager" : "lazy";

    const caption = document.createElement("span");
    caption.className = "gallery-caption";
    caption.innerHTML = `<strong>${item.title}</strong><small>${item.caption}</small>`;

    button.append(image, caption);
    galleryGrid.appendChild(button);
  });
}

function renderVideos() {
  if (!videoGrid) {
    return;
  }

  videoGrid.innerHTML = "";

  PROPERTIES.forEach((property) => {
    const button = document.createElement("button");
    button.className = "video-card";
    button.type = "button";
    button.dataset.videoTitle = `${property.address} video tour`;
    button.dataset.videoSrc = property.video;

    button.innerHTML = `
      <span class="video-thumb">
        <img src="${property.videoThumb}" alt="${property.address} video tour thumbnail" loading="lazy">
        <span class="video-play-icon" aria-hidden="true"></span>
      </span>
      <span>
        <strong>Watch the ${property.address} video tour</strong>
        <small>Then text ${CONTACT.phoneDisplay} for current room options</small>
      </span>
    `;

    videoGrid.appendChild(button);
  });
}

function renderFaqs() {
  if (!faqGrid) {
    return;
  }

  faqGrid.innerHTML = "";

  FAQS.forEach((faq) => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const answer = document.createElement("p");

    summary.textContent = faq.question;
    answer.textContent = faq.answer;

    details.append(summary, answer);
    faqGrid.appendChild(details);
  });
}

function openPhoto(button) {
  if (!modal || !modalImage || !modalCaption) {
    return;
  }

  lastFocusedGalleryItem = button;
  modalImage.src = button.dataset.src || "";
  modalImage.alt = button.dataset.alt || "";
  modalCaption.textContent = button.dataset.caption || "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) {
    closeButton.focus();
  }
}

function closePhotoModal() {
  if (!modal || !modalImage) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.classList.remove("modal-open");

  if (lastFocusedGalleryItem) {
    lastFocusedGalleryItem.focus();
  }
}

function openVideo(button) {
  if (!videoModal || !videoIframe) {
    return;
  }

  lastFocusedVideoItem = button;
  const title = button.dataset.videoTitle || "Video tour";
  videoIframe.src = button.dataset.videoSrc || "";
  videoIframe.title = title;

  if (videoModalTitle) {
    videoModalTitle.textContent = title;
  }

  videoModal.classList.add("is-open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = videoModal.querySelector(".modal-close");
  if (closeButton) {
    closeButton.focus();
  }
}

function closeVideoModal() {
  if (!videoModal || !videoIframe) {
    return;
  }

  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  videoIframe.src = "";
  document.body.classList.remove("modal-open");

  if (lastFocusedVideoItem) {
    lastFocusedVideoItem.focus();
  }
}

renderProperties();
renderGallery();
renderVideos();
renderFaqs();

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      filterButton.classList.toggle("is-active", filterButton === button);
    });
    renderGallery();
  });
});

if (galleryGrid) {
  galleryGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-item");
    if (button) {
      openPhoto(button);
    }
  });
}

if (videoGrid) {
  videoGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".video-card");
    if (button) {
      openVideo(button);
    }
  });
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closePhotoModal);
});

document.querySelectorAll("[data-close-video-modal]").forEach((button) => {
  button.addEventListener("click", closeVideoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.classList.contains("is-open")) {
    closePhotoModal();
  }

  if (event.key === "Escape" && videoModal && videoModal.classList.contains("is-open")) {
    closeVideoModal();
  }
});
