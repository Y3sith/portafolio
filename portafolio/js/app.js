// document.addEventListener("DOMContentLoaded", function() {
//     // Inicializa AOS
//     AOS.init({
//       duration: 1200, // Duración de la animación en milisegundos
//       once: true      // Las animaciones se ejecutarán solo una vez al hacer scroll
//     });
    
//     // Funcionalidad del formulario de contacto
//     const contactForm = document.getElementById('contact-form');
    
//     if (contactForm) {
//       contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         // Aquí podrías integrar el envío del formulario a un servidor o servicio de correo.
//         alert("¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.");
//         contactForm.reset();
//       });
//     }
//   });
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  // Remove Menu
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
  