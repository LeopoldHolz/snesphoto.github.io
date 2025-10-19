// -------- Lightbox --------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

if (lightbox && lightboxImg && closeBtn) {
  // Bild anklicken → Lightbox öffnen
  document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  // "×" klicken → Lightbox schließen
  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = ''; // Bild entfernen, optional
  });

  // Klick außerhalb des Bildes → Lightbox schließen
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {  // Nur wenn der Hintergrund geklickt wird
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }
  });
}

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

const toggleBtn = document.getElementById('toggle-darkmode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}


// Prüfen, ob Slides existieren
if (slides.length > 0) {
  showSlide(slideIndex);

  if (prev && next) {
    prev.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });

    next.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });
  }
}

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-darkmode');

// ---- Dark Mode merken ----
const toggleBtn = document.getElementById('toggle-darkmode');

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// ---- Navigation beim Scrollen ----
let lastScrollTop = 0;
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop && st > 50) {
    // Scroll nach unten → nav verstecken
    nav.classList.add('hidden');
  } else {
    // Scroll nach oben → nav anzeigen
    nav.classList.remove('hidden');
  }
  lastScrollTop = st <= 0 ? 0 : st; // Mobile Bugfix
});


