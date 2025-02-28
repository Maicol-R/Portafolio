/* ====================
   toggle icon navbar 
====================== */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* ===========================
   Scroll Section Active Link 
=========================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
  =========================== */
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
      Menu Icon Navbar 
  ======================= */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* =====================
   Scroll Reveal 
   ===================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* =====================
   Typed Js
   ===================== */
const typed = new Typed(".multiple-text", {
  strings: ["Developer", "Front - End", "Computer Systems"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* =====================
   function to show message
   ===================== */
function showMessage(message, type) {
  const messageContainer = document.getElementById('messageContainer');
  const messageText = document.getElementById('messageText');

  messageText.textContent = message;
  messageContainer.className = '';
  messageContainer.classList.add(type);
  messageContainer.classList.remove('hidden');

  setTimeout(() => {
    messageContainer.classList.add('hidden');
  }, 3000);
}
/* =====================
   validate form
   ===================== */

function validateForm() {
  const fromName = document.getElementById('from_name').value.trim();
  const emailAddress = document.getElementById('emailAddress').value.trim();
  const mobileNumber = document.getElementById('mobileNumber').value.trim();
  const emailSubject = document.getElementById('emailSubject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fromName || !emailAddress || !mobileNumber || !emailSubject || !message) {
    showMessage('Please complete all fields.', 'error');
    return false;
  }

  return true;
}

/* =====================
   Send Message Functionality
   ===================== */
const btn = document.getElementById('button');
document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    btn.value = 'Sending...';

    const serviceID = 'CodeTech'; // Reemplaza con tu Service ID
    const templateID = 'template_oly8p42'; // Reemplaza con tu Template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Message';
        showMessage('Message sent successfully!', 'success');

        document.getElementById('form').reset();
      }, (err) => {
        btn.value = 'Send Message';
        showMessage('Something went wrong!', 'error');
      });
    }
  });
