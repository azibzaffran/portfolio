/*============ SCROLL HEADER ============*/
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY >= 60);
});

/*============ MOBILE HAMBURGER ============*/
const hamburger  = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('bx-x');
});

// Close on link click
document.querySelectorAll('.nav__mobile .nav__link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('bx-x');
  });
});

/*============ ACTIVE NAV LINK ON SCROLL ============*/
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__list .nav__link');

function onScroll() {
  const scrollY = window.scrollY;

  sections.forEach(sec => {
    const top    = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`.nav__list a[href="#${id}"]`);

    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', onScroll);

/*============ SCROLL UP BUTTON ============*/
const scrollUpBtn = document.getElementById('scroll-up');
window.addEventListener('scroll', () => {
  scrollUpBtn.classList.toggle('show', window.scrollY >= 400);
});

/*============ WORK FILTER (MixItUp) ============*/
const workContainer = document.getElementById('work-container');

if (workContainer) {
  const mixer = mixitup(workContainer, {
    selectors: { target: '.work-card' },
    animation: { duration: 280, effects: 'fade translateY(20px)' }
  });

  document.querySelectorAll('.work__filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.work__filter-btn').forEach(b => b.classList.remove('active-work'));
      this.classList.add('active-work');
      const filter = this.dataset.filter;
      mixer.filter(filter === 'all' ? 'all' : filter);
    });
  });
}

/*============ IFRAME SCALE ============*/
function scaleIframes() {
  document.querySelectorAll('.browser-frame__viewport').forEach(vp => {
    const w = vp.offsetWidth;
    if (!w) return;
    const scale = w / 1440;
    vp.style.setProperty('--iframe-scale', scale);
    // Adjust the viewport height so scaled content fills it
    // iframe renders at 900px tall; scale brings it to: 900 * scale
    vp.style.height = Math.round(900 * scale) + 'px';
  });
}

scaleIframes();
window.addEventListener('resize', scaleIframes);


/*============ THEME TOGGLE ============*/
const themeBtn  = document.getElementById('theme-button');
const LIGHT     = 'light-theme';
const ICON_SUN  = 'bx-sun';
const ICON_MOON = 'bx-moon';

const savedTheme = localStorage.getItem('theme');
const savedIcon  = localStorage.getItem('icon');

if (savedTheme === 'light') {
  document.body.classList.add(LIGHT);
  themeBtn.querySelector('i').className = 'bx ' + ICON_SUN;
}

themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle(LIGHT);
  const icon    = themeBtn.querySelector('i');
  icon.className = 'bx ' + (isLight ? ICON_SUN : ICON_MOON);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  localStorage.setItem('icon',  isLight ? ICON_SUN : ICON_MOON);
});


/*============ SCROLL REVEAL ============*/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '28px',
  duration: 800,
  delay: 80,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  reset: false,
});

sr.reveal('.hero__left',           { origin: 'left', distance: '40px' });
sr.reveal('.hero__right',          { origin: 'right', distance: '40px', delay: 200 });
sr.reveal('.section__num',         { origin: 'left', delay: 50 });
sr.reveal('.section__title-wrap',  { delay: 100 });
sr.reveal('.about__img-col',       { origin: 'left' });
sr.reveal('.about__content-col',   { origin: 'right', delay: 150 });
sr.reveal('.skills__col',          { interval: 150 });
sr.reveal('.tl-item',              { interval: 80 });
sr.reveal('.edu-card',             { interval: 120 });
sr.reveal('.cert-card',            { interval: 100 });
sr.reveal('.service-card',         { interval: 100 });
sr.reveal('.work-card',            { interval: 60 });
sr.reveal('.testimonial-card',     { interval: 120 });
sr.reveal('.contact__left',        { origin: 'left' });
sr.reveal('.contact__form',        { origin: 'right', delay: 150 });