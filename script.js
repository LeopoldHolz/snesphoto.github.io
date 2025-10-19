// ==============================
// Dark Mode Toggle & Merken
// ==============================
const toggleBtn = document.getElementById('toggle-darkmode');
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
}

// ==============================
// Scroll-Nav ausblenden
// ==============================
let lastScrollTop = 0;
const nav = document.getElementById('main-nav');

if (nav) {
  window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > 50) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
}

// ==============================
// Slideshow
// ==============================
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (!slides.length) return;
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (index + slides.length) % slides.length; // zyklisch
  slides[slideIndex].classList.add('active');
}

function nextSlide() { showSlide(slideIndex + 1); }
function prevSlide() { showSlide(slideIndex - 1); }

// Initial anzeigen
showSlide(slideIndex);

// Pfeile
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// ==============================
// Galerie / Lightbox mit Preload
// ==============================
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Große Bilder vorab laden
thumbnails.forEach(thumb => {
  const fullSrc = thumb.dataset.full || thumb.src;
  const img = new Image();
  img.src = fullSrc; // Preload im Hintergrund
});

// Lightbox öffnen
thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    const fullSrc = thumb.dataset.full || thumb.src;
    lightboxImg.src = fullSrc;
    lightbox.classList.remove('hidden');
  });
});

// Lightbox schließen
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.add('hidden');
    }
  });
}
