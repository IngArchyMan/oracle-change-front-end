const burger_menu_icon_dom = document.querySelector(".burger-menu-toggle");
const menu_desktop_dom = document.querySelector(".desktop-navbar");

burger_menu_icon_dom.addEventListener("click", () => {
  menu_desktop_dom.classList.toggle("menu-open");
});

const form = document.getElementById("contactForm");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const nombre = document.getElementById("nombre");
  if (!nombre.value.trim()) {
    document.getElementById("nombreError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nombreError").style.display = "none";
  }

  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  const asunto = document.getElementById("asunto");
  if (!asunto.value.trim()) {
    document.getElementById("asuntoError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("asuntoError").style.display = "none";
  }

  const mensaje = document.getElementById("mensaje");
  if (!mensaje.value.trim()) {
    document.getElementById("mensajeError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("mensajeError").style.display = "none";
  }

  if (isValid) {
    modal.style.display = "block";
    form.reset();
  }
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
