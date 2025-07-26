/*
 * Simple interactivity for the site.
 *
 * 1. Handles the mobile navigation menu toggle for small screens.
 * 2. Adds 'active' styling to navigation links when scrolling
 *    through sections.
 */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Scroll spy to highlight active nav link
  const sections = document.querySelectorAll('section[id]');
  // Select both desktop and mobile navigation links
  const navLinks = document.querySelectorAll('.main-nav .nav-link, .mobile-menu a');

  function onScroll() {
    const scrollPos = window.scrollY + 100; // offset for fixed header
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      }
    });
  });
});