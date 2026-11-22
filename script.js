// Mobile navigation
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelectorAll(".desktop-nav a");

menuButton.addEventListener("click", () => {
  const menuIsOpen = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(menuIsOpen));
  menuButton.setAttribute("aria-label", menuIsOpen ? "Close menu" : "Open menu");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

// Appointment form demo
const appointmentForm = document.querySelector("#appointment-form");
const formStatus = appointmentForm.querySelector(".form-status");

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(appointmentForm);
  const firstName = formData.get("name").trim().split(" ")[0];

  formStatus.textContent = `Thank you, ${firstName}. Our patient care team will be in touch shortly.`;
  appointmentForm.reset();
});
