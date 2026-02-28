// ===== UP FRONT AUTO REPAIR - SCRIPTS =====

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNavOverlay');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// Open/closed status
function updateOpenStatus() {
  const el = document.getElementById('openStatus');
  if (!el) return;
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 17;
  const dot = el.querySelector('.status-dot');
  const text = el.querySelector('.status-text');
  if (dot) dot.style.background = isOpen ? '#27ae60' : '#e74c3c';
  if (text) text.textContent = isOpen ? 'Open Now · Mon–Fri 8AM–5PM' : 'Closed · Opens Mon 8AM';
}
updateOpenStatus();
