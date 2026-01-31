AOS.init({
  once: true,
  duration: 1000
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 100);
});

// Mobile menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('close-menu');

function openMenu() {
  menu.classList.remove('translate-x-full');
  backdrop.classList.remove('opacity-0', 'pointer-events-none');
}

function closeMenu() {
  menu.classList.add('translate-x-full');
  backdrop.classList.add('opacity-0', 'pointer-events-none');
}

toggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-line", {
  y: 140,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.5
});

gsap.from(".hero-sub, .hero-ctas", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
  delay: 1.8
});

gsap.to(".hero-bg", {
  y: "30%",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
