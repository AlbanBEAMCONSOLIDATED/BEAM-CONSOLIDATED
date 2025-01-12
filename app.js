// ================================
// Smooth Scroll & Reveal
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = -100; // hauteur ~ navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        window.history.pushState(null, '', '#' + targetId);
      }
    }
  });
});

window.addEventListener('scroll', () => {
  revealSections();
  updateActiveNav();
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach((section, index) => {
    const revealTop = section.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      // On ajoute un léger délai “stagger” pour chaque section
      setTimeout(() => {
        section.classList.add('active');
      }, index * 150);
    }
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-links li a');
  let currentSectionIndex = sections.length;
  while (--currentSectionIndex && window.scrollY + 101 < sections[currentSectionIndex].offsetTop) {}
  navLinks.forEach(link => link.classList.remove('active'));
  if (navLinks[currentSectionIndex]) {
    navLinks[currentSectionIndex].classList.add('active');
  }
}

// ================================
// Back to top
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================
// Menu Mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');
if (mobileMenuButton && navLinks) {
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuButton.classList.toggle('open');
  });
}

// ================================
// Modale Connexion
const openLoginModalBtn = document.getElementById('open-login-modal');
const closeLoginModalBtn = document.getElementById('close-login-modal');
const loginModal = document.getElementById('login-modal');
if (openLoginModalBtn && closeLoginModalBtn && loginModal) {
  openLoginModalBtn.addEventListener('click', () => {
    loginModal.classList.add('show');
  });
  closeLoginModalBtn.addEventListener('click', () => {
    loginModal.classList.remove('show');
  });
}

// ================================
// Formulaire Connexion
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const identifiant = document.getElementById('login-email').value.trim();
    const motDePasse = document.getElementById('login-password').value.trim();

    console.log("Identifiant saisi :", identifiant,
                "| Mot de passe saisi :", motDePasse);

    // Redirection / traitement possible...
  });
}
