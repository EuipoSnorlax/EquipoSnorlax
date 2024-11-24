// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollTo(0, 0);
  
    let isMouseDown = false;
    let startX, scrollLeft;
  
    carousel.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });
  
    carousel.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
  