// -------- Lightbox --------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

if (lightbox && lightboxImg && closeBtn) {
  document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });
}

// -------- Dark Mode Toggle --------
const toggleBtn = document.getElementById('toggle-darkmode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
