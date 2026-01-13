// Shared JS for the TimeCam support + marketing pages.
const SUPPORT_EMAIL = "support@timecam.ai";

function setTextIfPresent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHrefIfPresent(id, href) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", href);
}

function wireDemoModal() {
  const openButton = document.querySelector('[data-modal-open="demo"]');
  const closeButtons = document.querySelectorAll('[data-modal-close="demo"]');
  const modal = document.getElementById("demoModal");

  if (!openButton || !modal) return;

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openButton.addEventListener("click", openModal);
  closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function wireLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const triggers = document.querySelectorAll("[data-lightbox]");
  const closeButtons = document.querySelectorAll("[data-lightbox-close]");

  if (!lightbox || !lightboxImage || triggers.length === 0) return;

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || "Screenshot preview";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.style.overflow = "";
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-lightbox");
      const img = trigger.querySelector("img");
      openLightbox(src, img ? img.alt : "Screenshot preview");
    });
  });

  closeButtons.forEach((btn) => btn.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function wireEraChips() {
  const chips = document.querySelectorAll("[data-era]");
  const label = document.getElementById("eraLabel");

  if (!label || chips.length === 0) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((btn) => btn.classList.remove("is-active"));
      chip.classList.add("is-active");
      label.textContent = chip.getAttribute("data-era");
    });
  });
}

function wireRevealAnimations() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const targets = document.querySelectorAll(".reveal");
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  targets.forEach((target) => observer.observe(target));
}

function main() {
  setTextIfPresent("year", String(new Date().getFullYear()));
  setTextIfPresent("supportEmailText", SUPPORT_EMAIL);
  setTextIfPresent("supportEmailText2", SUPPORT_EMAIL);
  setHrefIfPresent("contactEmailLink", `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("TimeCam Support")}`);

  wireDemoModal();
  wireLightbox();
  wireEraChips();
  wireRevealAnimations();
}

main();
