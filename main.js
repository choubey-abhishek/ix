// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('close-menu');

function openMenu() {
  mobileMenu.classList.add('open');
  backdrop.classList.add('visible');
  document.body.style.overflow='hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  backdrop.classList.remove('visible');
  document.body.style.overflow='';
}
menuToggle.addEventListener('click', ()=>{ mobileMenu.classList.contains('open')? closeMenu():openMenu(); });
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// GSAP hero animation
gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero-line",{y:120,opacity:0,duration:1.5,stagger:0.4,ease:"power4.out",delay:0.5});
gsap.from(".hero-subtitle, .hero-buttons",{y:70,opacity:0,duration:1.3,stagger:0.3,ease:"power3.out",delay:1.5});
gsap.to(".hero-line",{y:"-=15",rotation:1.2,duration:7,ease:"sine.inOut",repeat:-1,yoyo:true,stagger:0.3});
