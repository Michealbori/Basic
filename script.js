// script.js

// Select the hamburger icon, mobile menu, and back-to-top button
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopBtn = document.getElementById('back-to-top');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});


// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Animation easing
    once: true, // Animations occur only once
  });
});

// Show/hide back-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show'); // Show button when scrolled down
  } else {
    backToTopBtn.classList.remove('show'); // Hide button when near the top
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scrolling effect
  });
});

