// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');
const closeMenuBtn = document.getElementById('close-menu');

function openMenu() {
  menuToggle.classList.add('open');
  mobileMenu.classList.add('open');
  backdrop.classList.add('visible');
}

function closeMenu() {
  menuToggle.classList.remove('open');
  mobileMenu.classList.remove('open');
  backdrop.classList.remove('visible');
}

menuToggle.addEventListener('click', () => {
  if (menuToggle.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeMenuBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// GSAP Hero animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-line", {
  y: 140,
  opacity: 0,
  duration: 1.6,
  stagger: 0.45,
  ease: "power4.out",
  delay: 0.6
});

gsap.from(".hero-sub, .hero-buttons", {
  y: 80,
  opacity: 0,
  duration: 1.3,
  stagger: 0.35,
  ease: "power3.out",
  delay: 2
});

gsap.to(".hero-line", {
  y: "-=18",
  rotation: 1.8,
  duration: 7,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: 0.25
});

gsap.to(".hero-bg-pulse", {
  y: "35%",
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
