const carouselContent = document.getElementById('carousel-content');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentPosition = 0;

function moveCarousel(direction) {
  const increment = direction === 'right' ? -500 : 500;
  currentPosition += increment;
  carouselContent.style.left = currentPosition + 'px';
}

prevButton.addEventListener('click', () => {
  if (currentPosition !== 0) {
    moveCarousel('left');
  }
});

nextButton.addEventListener('click', () => {
  if (currentPosition !== -1000) {
    moveCarousel('right');
  }
});