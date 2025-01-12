const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

if (mobileMenuButton && navLinks) {
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuButton.classList.toggle('open');
  });

  // Fermer le menu au clic sur un lien
  navLinks.querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuButton.classList.remove('open');
    });
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && event.target !== mobileMenuButton) {
      navLinks.classList.remove('active');
      mobileMenuButton.classList.remove('open');
    }
  });
}
