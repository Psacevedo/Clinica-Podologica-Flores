const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const bookingForm = document.querySelector(".booking-form");

const resetInitialHash = () => {
  if (!window.location.hash) return;
  window.setTimeout(() => {
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, 80);
};

window.addEventListener("load", resetInitialHash);

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav?.addEventListener("click", () => {
  nav.classList.remove("is-open");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = bookingForm.querySelector("button");
  const formData = new FormData(bookingForm);
  const name = formData.get("name")?.toString().trim();
  const reason = formData.get("reason")?.toString().trim();
  const area = formData.get("area")?.toString().trim();
  const time = formData.get("time")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const clinicPhone = "56966091431";
  const message = [
    "Hola, quiero agendar una atencion podologica a domicilio.",
    "",
    `Nombre: ${name}`,
    `Motivo: ${reason}`,
    `Comuna: ${area}`,
    `Horario preferido: ${time || "A convenir"}`,
    `Telefono de contacto: ${phone}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(message)}`;

  button.textContent = "Abriendo WhatsApp...";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  window.setTimeout(() => {
    button.textContent = "Enviar por WhatsApp";
  }, 1600);
});
