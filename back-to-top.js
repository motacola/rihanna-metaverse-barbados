// Back to Top button functionality
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.createElement('a');
  backToTopButton.id = 'back-to-top';
  backToTopButton.href = '#home';
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
});
