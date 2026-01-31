AOS.init({
  once: true,
  duration: 1000
});

/* NAVBAR SCROLL */
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 100);
});

/* MOBILE MENU */
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');

toggle.addEventListener('click', () => {
  menu.classList.toggle('translate-x-full');
  backdrop.classList.toggle('opacity-0');
  backdrop.classList.toggle('pointer-events-none');
});

backdrop.addEventListener('click', () => {
  menu.classList.add('translate-x-full');
  backdrop.classList.add('opacity-0','pointer-events-none');
});

/* GSAP HERO */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-line", {
  y: 120,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
  ease: "power4.out"
});

gsap.from(".hero-sub,.hero-ctas", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 1.5,
  stagger: 0.3
});
