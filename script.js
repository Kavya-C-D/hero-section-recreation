document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-content h1', { duration: 1, opacity: 0, y: -50 });
  gsap.from('.hero-content p', { duration: 1.5, opacity: 0, y: 50 });
  gsap.from('.hero-image', { duration: 1, opacity: 0, scale: 0.5, stagger: 0.2 });
});

// Mouse movement effect (hovered image follows mouse)
const heroImages = document.querySelectorAll('.hero-image');
heroImages.forEach(image => {
  image.addEventListener('mouseover', () => {
      heroImages.forEach(img => img.classList.remove('hovered'));
      image.classList.add('hovered');
  });

  image.addEventListener('mousemove', (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(image, {
          duration: 0.5,
          x: (x - rect.width / 2) / 10,
          y: (y - rect.height / 2) / 10,
      });
  });

  image.addEventListener('mouseleave', () => {
      gsap.to(image, { duration: 0.5, x: 0, y: 0 });
  });
});

