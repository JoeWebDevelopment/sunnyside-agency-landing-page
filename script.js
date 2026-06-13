const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileBreakpoint = window.matchMedia("(max-width: 965px)");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  navLinks.classList.toggle("is-open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu"
  );
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

mobileBreakpoint.addEventListener("change", (event) => {
  if (!event.matches) {
    closeMenu();
  }
});
