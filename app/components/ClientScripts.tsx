"use client";

import { useEffect } from "react";

const SUPPORT_EMAIL = "support@timecam.ai";

function setTextIfPresent(id: string, text: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHrefIfPresent(id: string, href: string) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", href);
}

export default function ClientScripts() {
  useEffect(() => {
    setTextIfPresent("year", String(new Date().getFullYear()));
    setTextIfPresent("supportEmailText", SUPPORT_EMAIL);
    setTextIfPresent("supportEmailText2", SUPPORT_EMAIL);
    setHrefIfPresent(
      "contactEmailLink",
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("TimeCam Support")}`
    );

    const openButton = document.querySelector<HTMLButtonElement>(
      '[data-modal-open="demo"]'
    );
    const closeButtons = document.querySelectorAll<HTMLButtonElement>(
      '[data-modal-close="demo"]'
    );
    const modal = document.getElementById("demoModal");

    const handleCloseModal = () => {
      if (!modal) return;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    const handleOpenModal = () => {
      if (!modal) return;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    if (openButton && modal) {
      openButton.addEventListener("click", handleOpenModal);
      closeButtons.forEach((btn) => btn.addEventListener("click", handleCloseModal));
      modal.addEventListener("click", (event) => {
        if (event.target === modal) handleCloseModal();
      });
    }

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage") as HTMLImageElement | null;
    const triggers = document.querySelectorAll<HTMLElement>("[data-lightbox]");
    const closeLightboxButtons = document.querySelectorAll<HTMLButtonElement>(
      "[data-lightbox-close]"
    );

    const handleCloseLightbox = () => {
      if (!lightbox || !lightboxImage) return;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxImage.alt = "";
      document.body.style.overflow = "";
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
        handleCloseLightbox();
      }
    };

    if (lightbox && lightboxImage && triggers.length > 0) {
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const src = trigger.getAttribute("data-lightbox");
          const img = trigger.querySelector("img");
          if (!src) return;
          lightboxImage.src = src;
          lightboxImage.alt = img?.getAttribute("alt") || "Screenshot preview";
          lightbox.classList.add("is-open");
          lightbox.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
        });
      });

      closeLightboxButtons.forEach((btn) =>
        btn.addEventListener("click", handleCloseLightbox)
      );
    }

    document.addEventListener("keydown", handleKeydown);

    const chips = document.querySelectorAll<HTMLButtonElement>("[data-era]");
    const label = document.getElementById("eraLabel");
    if (label && chips.length > 0) {
      chips.forEach((chip) => {
        chip.addEventListener("click", () => {
          chips.forEach((btn) => btn.classList.remove("is-active"));
          chip.classList.add("is-active");
          label.textContent = chip.getAttribute("data-era") || "";
        });
      });
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      const targets = document.querySelectorAll<HTMLElement>(".reveal");
      if (targets.length > 0) {
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
    }

    return () => {
      openButton?.removeEventListener("click", handleOpenModal);
      closeButtons.forEach((btn) => btn.removeEventListener("click", handleCloseModal));
      closeLightboxButtons.forEach((btn) =>
        btn.removeEventListener("click", handleCloseLightbox)
      );
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
}
