function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function" || !eventName) {
    return;
  }

  window.gtag("event", eventName, params && typeof params === "object" ? params : {});
}

document.addEventListener("click", (event) => {
  const cta = event.target.closest("[data-cta]");
  if (!cta) {
    return;
  }

  trackEvent("cta_click", {
    cta: cta.dataset.cta,
    page: "modern_5013",
    label: cta.textContent ? cta.textContent.trim() : null
  });
});

const viewAllButton = document.querySelector("[data-view-all-photos]");
const extraPhotos = document.querySelectorAll(".gallery-item.is-extra");

if (viewAllButton) {
  viewAllButton.addEventListener("click", () => {
    const isExpanded = viewAllButton.getAttribute("aria-expanded") === "true";

    extraPhotos.forEach((photo) => {
      photo.hidden = isExpanded;
    });

    viewAllButton.setAttribute("aria-expanded", String(!isExpanded));
    viewAllButton.textContent = isExpanded ? "View all photos" : "Show fewer photos";

    if (!isExpanded) {
      trackEvent("gallery_expand", {
        cta: "modern_5013_photos",
        page: "modern_5013"
      });
    }
  });
}

const videoTrigger = document.querySelector("[data-video-trigger]");
const videoEmbed = document.querySelector("[data-video-embed]");

if (videoTrigger && videoEmbed) {
  videoTrigger.addEventListener("click", () => {
    videoEmbed.hidden = false;
    videoTrigger.hidden = true;
    videoEmbed.innerHTML = '<iframe title="5013 63rd St video tour" src="https://www.youtube.com/embed/mv2Pg6q8Yqo?autoplay=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  });
}

const copyButton = document.querySelector("[data-copy-text]");
const smsCopy = document.querySelector("#sms-copy");

if (copyButton && smsCopy && navigator.clipboard) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(smsCopy.textContent.trim());
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy Text";
      }, 1800);
    } catch (error) {
      copyButton.textContent = "Copy unavailable";
      window.setTimeout(() => {
        copyButton.textContent = "Copy Text";
      }, 1800);
    }
  });
}
