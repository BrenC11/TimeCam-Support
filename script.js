// Minimal JavaScript for the support site.
// Customize these values for your real Support URL deployment.

const SUPPORT_EMAIL = "support@timecam.ai";

function setTextIfPresent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHrefIfPresent(id, href) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", href);
}

function main() {
  setTextIfPresent("year", String(new Date().getFullYear()));

  // Support email fields.
  setTextIfPresent("supportEmailText", SUPPORT_EMAIL);
  setTextIfPresent("supportEmailText2", SUPPORT_EMAIL);
  setHrefIfPresent("contactEmailLink", `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("TimeCam Support")}`);
}

main();

