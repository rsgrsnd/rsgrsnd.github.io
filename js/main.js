// Footer year
document.getElementById('footer-year').textContent = new Date().getFullYear();

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navEl = document.querySelector('nav');

function setMobileMenuOffset() {
  mobileMenu.style.top = navEl.offsetHeight + 'px';
  mobileMenu.style.maxHeight = `calc(100vh - ${navEl.offsetHeight}px)`;
}
requestAnimationFrame(setMobileMenuOffset);
window.addEventListener('resize', setMobileMenuOffset);

hamburger.addEventListener('click', () => {
  setMobileMenuOffset();
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

    // FAQ toggle
    function toggleFaq(el) {
      const item = el.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }

    // DSGVO Map
    function loadMap() {
      document.getElementById('map-consent-box').style.display = 'none';
      document.getElementById('map-iframe-container').style.display = 'block';
    }

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    const footerEl = document.querySelector('footer');
    let footerVisible = false;

    const footerObs = new IntersectionObserver(entries => {
      entries.forEach(e => { footerVisible = e.isIntersecting; });
    }, { threshold: 0.05 });
    footerObs.observe(footerEl);

    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400 && !footerVisible);
    });

    // Animated rain drops
    const container = document.getElementById('drops');
    const count = 35;
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      d.className = 'drop';
      const h = Math.random() * 60 + 20;
      d.style.cssText = `
        left: ${Math.random() * 100}%;
        height: ${h}px;
        animation-duration: ${Math.random() * 2 + 1.5}s;
        animation-delay: ${Math.random() * 4}s;
        opacity: 0;
      `;
      container.appendChild(d);
    }

    // Smooth nav highlight
    const sections = document.querySelectorAll('section[id], div[id]');
    const links = document.querySelectorAll('.nav-links a');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => {
            l.style.color = l.getAttribute('href') === '#' + e.target.id
              ? 'var(--accent)' : '';
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => obs.observe(s));
