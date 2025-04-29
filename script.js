// script.js

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopBtn = document.getElementById('back-to-top');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Initialize AOS after window loads
window.addEventListener('load', function () {
  setTimeout(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, // Allow repeated animations on scroll
    });
  }, 100);
});

// Back to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});