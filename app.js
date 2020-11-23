import { getElement } from './utils.js';

const slides = document.querySelectorAll('.slide');
const prevBtn = getElement('.prevBtn');
const nextBtn = getElement('.nextBtn');
let slideCounter = 1;

nextBtn.addEventListener('click', function () {
  slideCounter++;
  if (slideCounter > slides.length) {
    slideCounter = 1;
  }
  slideTransition();
});

prevBtn.addEventListener('click', function () {
  slideCounter--;
  if (slideCounter < 1) {
    slideCounter = slides.length;
  }
  console.log(slideCounter);
  slideTransition();
});

function slideTransition() {
  const currentSlide = getElement(`.slide:nth-child(${slideCounter}`);
  slides.forEach(function (slide) {
    slide.classList.add('hide-slide');
  });
  currentSlide.classList.remove('hide-slide');
}
