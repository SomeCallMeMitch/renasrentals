const CONTACT = {
  phoneDisplay: "619-917-2011",
  phoneHref: "+16199172011",
  email: "renasrentals@gmail.com"
};

function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function" || !eventName) {
    return;
  }

  window.gtag("event", eventName, params && typeof params === "object" ? params : {});
}

const PROPERTIES = [
  {
    id: "5005",
    address: "5005 63rd St",
    beds: "5",
    baths: "4",
    bedrooms: "5",
    bathrooms: "4",
    leaseLabel: "5BR / 4BA Full-Home Lease",
    benefitLine: "Private bedrooms • Parking • Short walk to SDSU",
    bestFor: "Best for roommate groups",
    rentTotal: "Ask Rena's Rentals",
    rentDisplayMode: "ask",
    availability: "Available August 2026",
    walkTime: "Short walk to SDSU",
    parking: "4-6 vehicles",
    laundry: "On-site laundry",
    outdoor: "Outdoor patio / yard space",
    video: "https://www.youtube.com/embed/axuQexUtISc?autoplay=1&rel=0",
    videoUrl: "https://www.youtube.com/embed/axuQexUtISc?autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/axuQexUtISc/hqdefault.jpg",
    galleryImages: "property-galleries/5005",
    image: "assets/property-02.jpeg",
    imageAlt: "Kitchen and shared living space at 5005 63rd St",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "Full-home layout near SDSU",
      "Private bedrooms",
      "Multiple bathrooms",
      "Gourmet kitchen and shared living space",
      "Parking available, confirm current details"
    ]
  },
  {
    id: "5011",
    address: "5011 63rd St",
    beds: "6",
    baths: "3",
    bedrooms: "6",
    bathrooms: "3",
    leaseLabel: "6BR / 3BA Full-Home Lease",
    benefitLine: "Private bedrooms • Gourmet kitchen • Short walk to SDSU",
    bestFor: "Best for larger roommate groups",
    rentTotal: "Ask Rena's Rentals",
    rentDisplayMode: "ask",
    availability: "Available August 2026",
    walkTime: "Short walk to SDSU",
    parking: "5 vehicles",
    laundry: "On-site laundry",
    outdoor: "Front lawn / side yard space",
    video: "https://www.youtube.com/embed/uTAwdTavdIw?autoplay=1&rel=0",
    videoUrl: "https://www.youtube.com/embed/uTAwdTavdIw?autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/uTAwdTavdIw/hqdefault.jpg",
    galleryImages: "property-galleries/5011",
    image: "assets/property-16.jpg",
    imageAlt: "Living room with exposed wood beam ceiling at 5011 63rd St",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "Larger full-home layout near SDSU",
      "Private bedrooms",
      "Gourmet kitchen",
      "Shared living/common areas",
      "Parking available, confirm current details"
    ]
  },
  {
    id: "5013",
    address: "5013 63rd St",
    beds: "3",
    baths: "3",
    bedrooms: "3",
    bathrooms: "3",
    leaseLabel: "3BR / 3BA Home Near SDSU",
    benefitLine: "Private bedrooms • Newer back house • Short walk to SDSU",
    bestFor: "Ask about current availability",
    rentTotal: "$5,050/month",
    rentDisplayMode: "hidden",
    availability: "Available August 2026",
    walkTime: "Short walk to SDSU",
    parking: "On-site parking",
    laundry: "On-site laundry",
    outdoor: "Yard space",
    video: "https://www.youtube.com/embed/mv2Pg6q8Yqo?autoplay=1&rel=0",
    videoUrl: "https://www.youtube.com/embed/mv2Pg6q8Yqo?autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/mv2Pg6q8Yqo/hqdefault.jpg",
    galleryImages: "property-galleries/5013",
    image: "assets/property-17.jpg",
    imageAlt: "Exterior and yard view at 5013 63rd St",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "3BR / 3BA home near SDSU",
      "Private bedrooms",
      "Newer back house feel",
      "Kitchen and shared space",
      "Ask about current availability"
    ]
  },
  // TODO: Replace these downloaded Wix source images if the missing
  // assets/wix-import/5051 63rd St folder is restored.
  {
    id: "5051",
    address: "5051 63rd St",
    beds: "4",
    baths: "2",
    bedrooms: "4",
    bathrooms: "2",
    leaseLabel: "4BR / 2BA Full-Home Lease",
    benefitLine: "Private bedrooms - AC - Solar panels - 10-minute walk to SDSU",
    bestFor: "Best for groups of 4",
    rentTotal: "$7,300/month",
    rentDisplayMode: "show",
    availability: "Available August 2026",
    walkTime: "10-minute walk to SDSU",
    parking: "4 vehicles",
    laundry: "Washer and dryer included",
    outdoor: "Backyard with fruit trees",
    video: "https://www.youtube.com/embed/sY9r7544WK8?autoplay=1&rel=0",
    videoUrl: "https://www.youtube.com/embed/sY9r7544WK8?autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/sY9r7544WK8/hqdefault.jpg",
    galleryImages: "property-galleries/5051",
    image: "assets/property-galleries/5051/5051-01.jpg",
    imageAlt: "5051 63rd St property photo from Rena's Rentals",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "4BR / 2BA home near SDSU",
      "1,800 square foot open floor plan",
      "Eat-in kitchen, living room, and dining space",
      "AC, solar panels, and oak hardwood floors",
      "Washer and dryer, backyard, parking for 4, and gardener included"
    ]
  },
  // TODO: Add 5053 YouTube video URL when provided.
  {
    id: "5053",
    address: "5053 63rd St",
    beds: "3",
    baths: "3",
    bedrooms: "3",
    bathrooms: "3",
    leaseLabel: "3BR / 3BA ADU Back House",
    benefitLine: "Ensuite bedrooms - Built in 2020 - 10-minute walk to SDSU",
    bestFor: "Best for groups of 3",
    rentTotal: "$5,050/month",
    rentDisplayMode: "show",
    availability: "Available August 2026",
    walkTime: "10-minute walk to SDSU",
    parking: "Permit street parking",
    laundry: "Washer and dryer onsite",
    outdoor: "Grass yard, fruit trees, side gate entrance",
    galleryImages: "property-galleries/5053",
    image: "assets/property-galleries/5053/5053-01.jpg",
    imageAlt: "5053 63rd St ADU back house property photo from Rena's Rentals",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "3BR / 3BA ADU back house near SDSU",
      "Built in 2020 with 1,200 square feet",
      "Each bedroom has an ensuite bathroom",
      "Ceiling-mounted AC, ceiling fans, and mirrored closets",
      "Granite kitchen island, stainless appliances, pantry, and outdoor yard space"
    ]
  },
  {
    id: "5735",
    address: "5735 Campanile Way",
    beds: "5",
    baths: "3",
    bedrooms: "5",
    bathrooms: "3",
    leaseLabel: "5BR / 3BA House Near SDSU",
    benefitLine: "Private courtyard - Updated kitchen - 12-minute walk to SDSU",
    bestFor: "Best for groups of 5",
    rentTotal: "$6,775/month",
    rentDisplayMode: "show",
    availability: "Available August 2024",
    walkTime: "12-minute walk / 6-minute bike ride to SDSU",
    parking: "4 vehicles",
    laundry: "On-site laundry",
    outdoor: "Private courtyard",
    video: "https://www.youtube.com/embed/-928N0x6DJg?start=4&autoplay=1&rel=0",
    videoUrl: "https://www.youtube.com/embed/-928N0x6DJg?start=4&autoplay=1&rel=0",
    videoThumb: "https://img.youtube.com/vi/-928N0x6DJg/hqdefault.jpg",
    galleryImages: "property-galleries/5735",
    image: "assets/property-galleries/5735/5735-01.jpg",
    imageAlt: "5735 Campanile Way exterior property photo from Rena's Rentals",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "5BR / 3BA house near SDSU",
      "Campanile Way and Campanile Drive location",
      "Private courtyard and parking for four",
      "Updated flooring, quartz countertops, and new kitchen appliances",
      "AC, on-site laundry, vinyl plank wood floors, and remodeled bathrooms"
    ]
  },
  // TODO: Add 5737 YouTube video URL and additional confirmed property photos when provided.
  {
    id: "5737",
    address: "5737 Campanile Way",
    beds: "4",
    baths: "2",
    bedrooms: "4",
    bathrooms: "2",
    leaseLabel: "4BR / 2BA Newer Home Near SDSU",
    benefitLine: "New construction - Stainless appliances - 12-minute walk to SDSU",
    bestFor: "Best for groups of 4",
    rentTotal: "$6,000/month",
    rentDisplayMode: "show",
    availability: "August 2025",
    walkTime: "12-minute walk / 6-minute bike ride to SDSU",
    parking: "Street parking only",
    laundry: "Washer and dryer in unit",
    outdoor: "Ask about outdoor space",
    galleryImages: "property-galleries/5737",
    image: "assets/property-galleries/5737/5737-01.jpg",
    imageAlt: "5737 Campanile Way kitchen property photo from Rena's Rentals",
    primaryCtaLabel: "Ask About Terms",
    secondaryCtaLabel: "View Photos",
    ctaLabel: "Ask About Terms",
    benefits: [
      "4BR / 2BA newer home near SDSU",
      "One person per room",
      "Quartz counters and stainless appliances",
      "Washer/dryer in unit, wood flooring, new window blinds, and new paint",
      "New air conditioning and street parking only"
    ]
  }
];

const GALLERY_DIMENSIONS = {
  "5005": [[1447, 1400], [640, 456], [1800, 1350], [1800, 1350], [512, 384], [1800, 1350], [288, 384], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1050, 1400], [1050, 1400], [1800, 1350], [1800, 1350], [1050, 1400], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [500, 375]],
  "5011": [[1800, 1350], [1200, 899], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1200, 900], [900, 1200], [1800, 1350], [1800, 1350], [1050, 1400], [1800, 1350], [1050, 1400], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1050, 1400], [1050, 1400], [1050, 1400]],
  "5013": [[1800, 1212], [1800, 1350], [1800, 1350], [1800, 1350], [1050, 1400], [1800, 1350], [1800, 1350], [1050, 1400], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1050, 1400], [1800, 1350], [1800, 1350]],
  "5051": [[1350, 1800], [1440, 1080], [1800, 1350], [1800, 1350], [1350, 1800], [1350, 1800], [1800, 1350], [1024, 768], [1800, 1350]],
  "5053": [[1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350]],
  "5735": [[1800, 1012], [1800, 1350], [740, 1097], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1152, 864], [810, 1440], [1600, 1200], [1012, 1800], [1800, 1350], [1800, 1350], [1800, 1350], [1350, 1800], [1800, 1350], [1800, 1350], [1280, 960], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [1800, 1350], [960, 1280]],
  "5737": [[1080, 720]]
};

const GALLERY_LABELS = {
  "5005": [
    ["Kitchen", "Large shared kitchen with island seating and full-size appliances"],
    ["Exterior", "Driveway and front approach to 5005 63rd St"],
    ["Living", "Furnished shared living room open to the kitchen"],
    ["Kitchen", "Kitchen prep space with island and pendant lighting"],
    ["Bedroom", "Private bedroom with window and closet wall"],
    ["Living", "Open common room with built-in storage"],
    ["Bathroom", "Bathroom vanity, toilet, and glass shower"],
    ["Outdoor", "Covered patio and outdoor seating area"],
    ["Outdoor", "Patio walkway and yard space"],
    ["Outdoor", "Built-in grill and patio seating area"],
    ["Kitchen", "Kitchen island, refrigerator, and wall ovens"],
    ["Living", "Entry and staircase connected to the common area"],
    ["Bathroom", "Double vanity bathroom with storage"],
    ["Living", "Brick accent wall and staircase detail"],
    ["Kitchen", "Kitchen island seating and appliance wall"],
    ["Bedroom", "Bedroom closet and hall access"],
    ["Bathroom", "Bathroom sink, toilet, and window"],
    ["Bedroom", "Private bedroom with open wall space"],
    ["Bedroom", "Bedroom closet with built-in shelving"],
    ["Bedroom", "Bedroom or quiet common room with natural light"],
    ["Kitchen", "Refrigerator, microwave, and oven storage wall"],
    ["Bathroom", "Large tub and bathroom window"],
    ["Living", "Furnished living room with media wall and patio access"]
  ],
  "5011": [
    ["Kitchen", "Kitchen appliance wall with cabinetry and counter space"],
    ["Exterior", "Front exterior and lawn near SDSU"],
    ["Outdoor", "Side yard and exterior approach"],
    ["Kitchen", "Kitchen sink, cabinets, and pass-through counter"],
    ["Kitchen", "Breakfast bar and kitchen pass-through"],
    ["Living", "Open common room with exposed beam ceiling"],
    ["Bathroom", "Bathroom vanity and tub shower"],
    ["Bedroom", "Closet nook and private bedroom storage"],
    ["Bedroom", "Private bedroom with large window"],
    ["Bedroom", "Bedroom with ceiling fan and closet access"],
    ["Living", "Hallway connecting shared spaces and bedrooms"],
    ["Bedroom", "Private bedroom with closet and natural light"],
    ["Bathroom", "Bathroom vanity near bedroom hallway"],
    ["Bedroom", "Bedroom with mirrored closet doors"],
    ["Living", "Shared room with sliding door and window AC"],
    ["Living", "Lofted ceiling and staircase detail"],
    ["Living", "Downstairs common area with staircase and kitchenette"],
    ["Laundry", "Laundry room with washer, dryer, and utility sink"],
    ["Bathroom", "Bathroom vanity and shower area"],
    ["Bathroom", "Bathroom sink, toilet, and tub shower"]
  ],
  "5013": [
    ["Exterior", "5013 back-house exterior and yard setting"],
    ["Bathroom", "En suite bathroom with vanity, toilet, and shower"],
    ["Exterior", "5013 entry and private back-house walkway"],
    ["Kitchen", "Updated kitchen with stainless appliances and pantry shelving"],
    ["Bathroom", "Bathroom with tub shower and vanity area"],
    ["Living", "Open living and dining area connected to the kitchen"],
    ["Bathroom", "Wide vanity counter with storage baskets"],
    ["Living", "Interior hallway and room-to-room flow"],
    ["Bedroom", "Private bedroom with mirrored closet doors"],
    ["Bedroom", "Bedroom with window and closet access"],
    ["Bathroom", "Compact bathroom vanity and toilet"],
    ["Exterior", "Back-house exterior lit at night"],
    ["Kitchen", "Kitchen island and open living area"],
    ["Bedroom", "Bedroom with ceiling fan and closet wall"],
    ["Kitchen", "Kitchen island, refrigerator, and stainless appliances"]
  ],
  "5051": [
    ["Exterior", "Front exterior view for 5051 63rd St"],
    ["Kitchen", "Eat-in kitchen with cabinet storage"],
    ["Living", "Open living space with hardwood flooring"],
    ["Dining", "Dining area connected to the living space"],
    ["Bedroom", "Large bedroom with sliding door closet"],
    ["Bathroom", "Remodeled bathroom finish from the 5051 page"],
    ["Outdoor", "Backyard and outdoor space at 5051 63rd St"],
    ["Bedroom", "Bedroom with ceiling fan and natural light"],
    ["Kitchen", "Kitchen and shared living details at 5051 63rd St"]
  ],
  "5053": [
    ["Exterior", "5053 ADU back house exterior and yard setting"],
    ["Kitchen", "Updated granite kitchen and island with stainless appliances"],
    ["Kitchen", "Kitchen pantry and cabinet storage"],
    ["Living", "Fresh modern living area in the 5053 back house"],
    ["Bedroom", "Extra large bedroom with mirrored closet and ceiling fan"],
    ["Bathroom", "Ensuite bathroom connected to a private bedroom"],
    ["Outdoor", "Grass yard and outdoor sitting space"],
    ["Laundry", "Onsite washer and dryer area"],
    ["Bedroom", "Private bedroom with ceiling-mounted AC and ensuite access"]
  ],
  "5735": [
    ["Exterior", "5735 Campanile Way exterior and driveway"],
    ["Kitchen", "Updated kitchen with new appliances and quartz countertops"],
    ["Living", "Shared living space near the private courtyard"],
    ["Kitchen", "Kitchen workspace and appliance view"],
    ["Bedroom", "Private bedroom in the 5735 house"],
    ["Bathroom", "Remodeled bathroom finish"],
    ["Outdoor", "Private courtyard and outdoor approach"],
    ["Bedroom", "Bedroom with updated flooring"],
    ["Bathroom", "Bathroom vanity and shower area"],
    ["Living", "Common area with vinyl plank wood floors"],
    ["Outdoor", "Campanile Way exterior detail"],
    ["Bedroom", "Private bedroom with natural light"],
    ["Bedroom", "Additional private bedroom"],
    ["Bedroom", "Bedroom or study-ready room"],
    ["Bathroom", "Remodeled bathroom with updated fixtures"],
    ["Kitchen", "Kitchen storage and countertop detail"],
    ["Laundry", "On-site laundry area"],
    ["Outdoor", "Exterior walkway and entry"],
    ["Bedroom", "Private bedroom with closet space"],
    ["Living", "Shared interior room"],
    ["Exterior", "Campanile property exterior"],
    ["Kitchen", "Kitchen and dining flow"],
    ["Bedroom", "Private room from the old source page"],
    ["Bathroom", "Bathroom detail from the source gallery"],
    ["Outdoor", "Outdoor approach and property setting"]
  ],
  "5737": [
    ["Kitchen", "5737 Campanile Way kitchen with quartz counters and stainless appliances"]
  ]
};

const FAQS = [
  {
    question: "How close are the homes to SDSU?",
    answer: "Our 63rd Street homes are a 10 minute walk to campus near 63rd & Pontiac."
  },
  {
    question: "Can a smaller group inquire?",
    answer: "Yes. Roommate groups or individual bedroom options are welcome. Text your current group size, timing, and preferred home to ask about current options."
  },
  {
    question: "Is parking available?",
    answer: "Private driveway parking is for tenants only and may be billed monthly per vehicle. Contact Rena's Rentals for current parking terms."
  },
  {
    question: "What is the application process?",
    answer: "Each prospective tenant applies for approval. If a guarantor is needed, the guarantor also applies, completes the credit check, and signs a Rent Guarantee Form. After approvals and required documents are complete, Rena's Rentals collects the security deposit, assigns the house to the group, and prepares the lease for electronic signature."
  },
  {
    question: "How do tenants pay utilities?",
    answer: "A designated tenant sets up gas and electric service and pays that vendor directly. A designated tenant also sets up Cox Cable and pays directly. The landlord receives the water bill, divides it equally by the number of tenants on the property, and bills the house for reimbursement. Trash is added to the rent charge."
  },
  {
    question: "Are pets allowed?",
    answer: "Pets are considered based on breed, age, and training. Ask Rena's Rentals about current pet rent, agreement, guarantor, and approval requirements."
  },
  {
    question: "What if I want to study abroad for a semester?",
    answer: "If you plan to be on the lease for only part of the year, ask about the replacement process. A replacement tenant may need to be vetted and approved before taking your place on the lease."
  }
];

const propertyCards = document.querySelector("#property-cards");
const videoGrid = document.querySelector("#video-grid");
const faqGrid = document.querySelector("#faq-grid");
const videoModal = document.querySelector("#video-modal");
const videoIframe = document.querySelector("#video-iframe");
const videoModalTitle = document.querySelector("#video-modal-title");
let lastFocusedVideoItem = null;
let PhotoSwipeConstructor = null;

const photoswipeModuleUrl = "https://unpkg.com/photoswipe@5.4.4/dist/photoswipe.esm.js";

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

function getProperty(id) {
  return PROPERTIES.find((property) => property.id === id);
}

function getPropertyEventFields(propertyId) {
  const property = propertyId ? getProperty(propertyId) : null;

  return {
    property_address: property?.address || null,
    property_id: property?.id || propertyId || null
  };
}

function trackVideoClick(button) {
  const propertyId = button?.dataset?.propertyId || null;
  const { property_address, property_id } = getPropertyEventFields(propertyId);
  const buttonText =
    button?.dataset?.buttonText || button?.textContent?.trim() || button?.getAttribute("aria-label") || null;

  trackEvent("video_click", {
    property_address,
    property_id,
    button_text: buttonText,
    location: button?.dataset?.analyticsLocation || null
  });
}

function trackImageClick(trigger) {
  const propertyId = trigger?.dataset?.galleryProperty || null;
  const galleryIndex = Number(trigger?.dataset?.galleryIndex || 0);
  const imagePosition = Number.isFinite(galleryIndex) ? galleryIndex + 1 : null;
  const { property_address, property_id } = getPropertyEventFields(propertyId);

  trackEvent("image_click", {
    property_address,
    property_id,
    image_position: imagePosition,
    location: trigger?.dataset?.analyticsLocation || null
  });
}

function createGalleryPhotos(property) {
  const dimensions = GALLERY_DIMENSIONS[property.id] || [];
  const labels = GALLERY_LABELS[property.id] || [];

  return dimensions.map(([width, height], index) => {
    const photoNumber = index + 1;
    const [category = "Photo Tour", caption = "Property photo from the old Rena's Rentals page"] = labels[index] || [];
    const padded = String(photoNumber).padStart(2, "0");
    const src = `assets/property-galleries/${property.id}/${property.id}-${padded}.jpg`;
    const title = `${property.address} - ${category}`;

    return {
      src,
      width,
      height,
      category,
      title,
      caption,
      alt: `${title}: ${caption}`,
      photoNumber
    };
  });
}

function getPropertyPhotos(propertyId) {
  const property = getProperty(propertyId);
  return property ? createGalleryPhotos(property) : [];
}

async function loadPhotoSwipe() {
  if (PhotoSwipeConstructor) {
    return PhotoSwipeConstructor;
  }

  const module = await import(photoswipeModuleUrl);
  PhotoSwipeConstructor = module.default;
  return PhotoSwipeConstructor;
}

function registerPhotoSwipeCaption(pswp, property, photos) {
  pswp.on("uiRegister", () => {
    pswp.ui.registerElement({
      name: "property-caption",
      order: 9,
      isButton: false,
      appendTo: "root",
      html: "",
      onInit: (element, instance) => {
        const updateCaption = () => {
          const item = photos[instance.currIndex];
          if (!item) {
            return;
          }

          element.innerHTML = `
            <strong>${property.address} - ${item.category} - ${instance.currIndex + 1} of ${photos.length}</strong>
            <span>${item.caption}</span>
          `;
        };

        instance.on("change", updateCaption);
        updateCaption();
      }
    });
  });
}

async function openPropertyGallery(propertyId, startIndex = 0) {
  const property = getProperty(propertyId);
  const photos = getPropertyPhotos(propertyId);

  if (!property || photos.length === 0) {
    return;
  }

  const PhotoSwipe = await loadPhotoSwipe();
  const pswp = new PhotoSwipe({
    dataSource: photos.map((photo) => ({
      src: photo.src,
      width: photo.width,
      height: photo.height,
      alt: photo.alt
    })),
    index: Math.max(0, Math.min(startIndex, photos.length - 1)),
    bgOpacity: 0.94,
    showHideAnimationType: "fade",
    padding: { top: 44, bottom: 80, left: 16, right: 16 },
    wheelToZoom: true
  });

  registerPhotoSwipeCaption(pswp, property, photos);
  pswp.init();
}

function renderProperties() {
  if (!propertyCards) {
    return;
  }

  propertyCards.innerHTML = "";

  PROPERTIES.forEach((property) => {
    const photos = getPropertyPhotos(property.id);
    const heroPhoto = photos[0] || {
      src: property.image,
      alt: property.imageAlt,
      category: "Photos",
      caption: property.address,
      photoNumber: 1
    };
    const previewPhotos = photos.slice(1, 4);
    const article = document.createElement("article");
    article.className = "property-card";

    const galleryPreview = document.createElement("div");
    galleryPreview.className = "property-gallery-preview";

    const heroButton = document.createElement("button");
    heroButton.className = "property-hero-photo";
    heroButton.type = "button";
    heroButton.dataset.galleryProperty = property.id;
    heroButton.dataset.galleryIndex = "0";
    heroButton.dataset.analyticsLocation = "property_card_hero_image";
    heroButton.setAttribute("aria-label", `Open ${property.address} photo gallery`);

    const image = document.createElement("img");
    image.src = heroPhoto.src;
    image.alt = heroPhoto.alt;
    image.loading = "lazy";

    const photoCount = document.createElement("span");
    photoCount.className = "photo-count";
    photoCount.textContent = `View ${photos.length} photos`;

    const badge = document.createElement("span");
    badge.className = "property-badge";
    badge.textContent = property.bestFor || property.availability;

    heroButton.append(image, badge, photoCount);

    const thumbnailStrip = document.createElement("div");
    thumbnailStrip.className = "property-thumbs";
    previewPhotos.forEach((photo, index) => {
      const thumb = document.createElement("button");
      thumb.className = "property-thumb";
      thumb.type = "button";
      thumb.dataset.galleryProperty = property.id;
      thumb.dataset.galleryIndex = String(index + 1);
      thumb.dataset.analyticsLocation = "property_card_thumbnail";
      thumb.setAttribute("aria-label", `Open ${property.address} ${photo.category} photo`);

      const thumbImage = document.createElement("img");
      thumbImage.src = photo.src;
      thumbImage.alt = photo.alt;
      thumbImage.loading = "lazy";
      thumb.appendChild(thumbImage);
      thumbnailStrip.appendChild(thumb);
    });

    if (photos.length > 4) {
      const more = document.createElement("button");
      more.className = "property-thumb property-thumb-more";
      more.type = "button";
      more.dataset.galleryProperty = property.id;
      more.dataset.galleryIndex = "4";
      more.dataset.analyticsLocation = "property_card_more_photos";
      more.textContent = `+${photos.length - 4}`;
      more.setAttribute("aria-label", `Open ${property.address} gallery with ${photos.length} photos`);
      thumbnailStrip.appendChild(more);
    }

    galleryPreview.append(heroButton, thumbnailStrip);

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

    heading.append(title, leaseLabel, benefitLine);
    if (property.rentDisplayMode === "show" && property.rentTotal) {
      const rent = document.createElement("p");
      rent.className = "rent-display";
      rent.textContent = property.rentTotal;
      heading.appendChild(rent);
    }
    heading.appendChild(bestFor);

    const specs = document.createElement("dl");
    specs.className = "specs";
    [
      ["Bedrooms", property.bedrooms || property.beds],
      ["Baths", property.bathrooms || property.baths],
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

    const photoButton = document.createElement("button");
    photoButton.className = "button button-small";
    photoButton.type = "button";
    photoButton.dataset.cta = `property_${property.id}_view_photos`;
    photoButton.dataset.galleryProperty = property.id;
    photoButton.dataset.galleryIndex = "0";
    photoButton.dataset.analyticsLocation = "property_card_view_photos_button";
    photoButton.textContent = "View Photos";

    const videoButton = document.createElement("button");
    videoButton.className = "button button-secondary button-small video-trigger";
    videoButton.type = "button";
    videoButton.dataset.cta = `property_${property.id}_watch_video`;
    videoButton.dataset.propertyId = property.id;
    videoButton.dataset.analyticsLocation = "property_card_video_button";
    videoButton.dataset.buttonText = "Watch Video";
    videoButton.dataset.videoTitle = `${property.address} video tour`;
    videoButton.dataset.videoSrc = property.videoUrl || property.video;
    videoButton.textContent = "Watch Video";

    const inquire = document.createElement("a");
    inquire.className = "button button-secondary button-small";
    inquire.dataset.cta = `property_${property.id}_ask_terms`;
    inquire.href = "#tour";
    inquire.textContent = property.primaryCtaLabel || "Ask About Terms";

    actions.append(photoButton);
    if (property.videoUrl || property.video) {
      actions.append(videoButton);
    }
    actions.append(inquire);
    content.append(heading, specs, createList(property.benefits), actions);
    article.append(galleryPreview, content);
    propertyCards.appendChild(article);
  });
}

function renderVideos() {
  if (!videoGrid) {
    return;
  }

  videoGrid.innerHTML = "";

  PROPERTIES.filter((property) => property.videoUrl || property.video).forEach((property) => {
    const button = document.createElement("button");
    button.className = "video-card";
    button.type = "button";
    button.dataset.cta = `property_${property.id}_watch_video`;
    button.dataset.propertyId = property.id;
    button.dataset.analyticsLocation = "video_section_card";
    button.dataset.buttonText = `Watch the ${property.address} video tour`;
    button.dataset.videoTitle = `${property.address} video tour`;
    button.dataset.videoSrc = property.videoUrl || property.video;

    button.innerHTML = `
      <span class="video-thumb">
        <img src="${property.videoThumb}" alt="${property.address} video tour thumbnail" loading="lazy">
        <span class="video-play-icon" aria-hidden="true"></span>
      </span>
      <span>
        <strong>Watch the ${property.address} video tour</strong>
        <small>Then text ${CONTACT.phoneDisplay} for current group options</small>
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
renderVideos();
renderFaqs();

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-gallery-property]");
  if (!trigger) {
    return;
  }

  const index = Number(trigger.dataset.galleryIndex || 0);
  trackImageClick(trigger);
  openPropertyGallery(trigger.dataset.galleryProperty, Number.isFinite(index) ? index : 0).catch((error) => {
    console.error("Unable to open property photo gallery", error);
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".video-card, .video-trigger");
  if (button) {
    trackVideoClick(button);
    openVideo(button);
  }
});

document.querySelectorAll("[data-close-video-modal]").forEach((button) => {
  button.addEventListener("click", closeVideoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal && videoModal.classList.contains("is-open")) {
    closeVideoModal();
  }
});
