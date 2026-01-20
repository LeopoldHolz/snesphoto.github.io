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
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

function nextSlide() { showSlide(slideIndex + 1); }
function prevSlide() { showSlide(slideIndex - 1); }

showSlide(slideIndex);

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// ==============================
// Galerie / Lightbox
// ==============================
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('hidden');
    lightboxImg.src = thumb.src;
  });
});

if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.add('hidden');
    }
  });
}

// ==============================
// Sprachumschaltung (robust für lokale Tests und GitHub Pages)
// ==============================
const langBtn = document.getElementById('toggle-lang');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    console.log("Language button clicked!"); // Testausgabe

    const currentLang = localStorage.getItem('lang') || 'de';
    const newLang = currentLang === 'de' ? 'en' : 'de';
    localStorage.setItem('lang', newLang);

    // Robustere Variante: funktioniert mit file:// und GitHub Pages
    const url = window.location.href;
    const file = url.substring(url.lastIndexOf('/') + 1) || 'index.html';

    // Basisnamen ohne _en und .html
    const base = file.replace(/_en\.html$/, '').replace(/\.html$/, '');

    // Zielseite
    const targetPage = newLang === 'en' ? `${base}_en.html` : `${base}.html`;

    console.log(`Switching language: ${file} → ${targetPage}`);
    window.location.href = targetPage;
  });
}

if (typeof toggleBlogPost !== 'function') {
  function toggleBlogPost(header) {
    const post = header.parentElement;
    post.classList.toggle('expanded');
  }
}