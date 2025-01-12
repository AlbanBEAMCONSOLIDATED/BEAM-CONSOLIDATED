const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

// Vérifier si les éléments existent bien dans le DOM
if (mobileMenuButton && navLinks) {
  
  // Au clic sur le bouton "burger", on ouvre/ferme le menu
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuButton.classList.toggle('open');
  });

  // Au clic sur un lien du menu, on referme le menu (pratique sur mobile)
  const navItems = navLinks.querySelectorAll('li a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuButton.classList.remove('open');
    });
  });

  // Fermer le menu si on clique en dehors de la zone du menu
  document.addEventListener('click', (event) => {
    // Si le clic n'est pas dans "navLinks" ET pas sur le bouton du menu mobile
    if (!navLinks.contains(event.target) && event.target !== mobileMenuButton) {
      navLinks.classList.remove('active');
      mobileMenuButton.classList.remove('open');
    }
  });
}
