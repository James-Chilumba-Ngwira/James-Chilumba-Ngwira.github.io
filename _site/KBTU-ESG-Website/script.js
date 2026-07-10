// Re-correct the scroll position after web fonts finish loading. The browser's
// native jump-to-hash happens at initial layout, using fallback font metrics —
// once Fraunces/IBM Plex swap in, the resulting reflow can leave a same-page
// link (or a direct #anchor visit) scrolled to the wrong spot.
if (location.hash) {
  const scrollToHash = () => {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  };
  if (document.fonts) document.fonts.ready.then(scrollToHash);
  addEventListener('load', scrollToHash);
  setTimeout(scrollToHash, 350);
  setTimeout(scrollToHash, 900);
  setTimeout(scrollToHash, 2000);
}

// mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

// language switch (decorative — no i18n backend, matches original scope)
document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// reveal on scroll
const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealer.unobserve(e.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
