const topbar = document.querySelector('.topbar');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const chapters = [...document.querySelectorAll('.chapter')];
const objects = [...document.querySelectorAll('.journey-object')];
const dots = [...document.querySelectorAll('.stage-dot')];
const meter = document.querySelector('.stage-meter');
const journey = document.querySelector('.journey');
const journeyVisual = document.querySelector('.journey-visual');

const activateStage = (stage) => {
  objects.forEach((object) => object.classList.toggle('active', object.dataset.object === stage));
  dots.forEach((dot) => dot.classList.toggle('active', dot.dataset.dot === stage));
};

const stageObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) activateStage(visible.target.dataset.stage);
}, { rootMargin: '-28% 0px -28% 0px', threshold: [0, .2, .5, .8] });

chapters.forEach((chapter) => stageObserver.observe(chapter));

const journeyObserver = new IntersectionObserver(([entry]) => {
  meter?.classList.toggle('visible', entry.isIntersecting);
  journeyVisual?.classList.toggle('in-view', entry.isIntersecting);
}, { threshold: .05 });
if (journey) journeyObserver.observe(journey);

window.addEventListener('scroll', () => topbar?.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const teamTrack = document.querySelector('.team-track');
document.querySelector('[data-team-prev]')?.addEventListener('click', () => teamTrack?.scrollBy({ left: -320, behavior: 'smooth' }));
document.querySelector('[data-team-next]')?.addEventListener('click', () => teamTrack?.scrollBy({ left: 320, behavior: 'smooth' }));
