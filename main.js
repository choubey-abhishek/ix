AOS.init({
  once: true,
  duration: 1000
});

// Navbar scroll shrink
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  backdrop.classList.toggle('opacity-0');
  backdrop.classList.toggle('pointer-events-none');
});

backdrop.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
  backdrop.classList.add('opacity-0', 'pointer-events-none');
});

// GSAP Hero Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-line", {
  y: 120,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
  ease: "power4.out",
  delay: 0.5
});

gsap.from(".hero-sub, .hero-ctas", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
  ease: "power3.out",
  delay: 1.8
});

gsap.to("#hero .absolute", {
  y: "30%",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
