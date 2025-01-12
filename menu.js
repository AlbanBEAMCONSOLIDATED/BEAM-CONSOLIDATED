const mobileMenuButton2 = document.getElementById('mobile-menu-button');
const navLinks2 = document.getElementById('nav-links');

if (mobileMenuButton2 && navLinks2) {
  mobileMenuButton2.addEventListener('click', () => {
    navLinks2.classList.toggle('active');
    mobileMenuButton2.classList.toggle('open');
  });
}
