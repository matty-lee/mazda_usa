import { getElement } from './utils.js';

const slides = document.querySelectorAll('.slide');
const prevBtn = getElement('.prevBtn');
const nextBtn = getElement('.nextBtn');
let slideCounter = 1;

const autoChange = function () {
  slideCounter++;
  slideTransition();
};

let interval = setInterval(autoChange, 100000);

nextBtn.addEventListener('click', function () {
  clearInterval(interval);
  slideCounter++;
  slideTransition();
  interval = setInterval(autoChange, 100000);
});

prevBtn.addEventListener('click', function () {
  clearInterval(interval);
  slideCounter--;
  slideTransition();
  interval = setInterval(autoChange, 100000);
});

function slideTransition() {
  if (slideCounter > slides.length) {
    slideCounter = 1;
  }
  if (slideCounter < 1) {
    slideCounter = slides.length;
  }
  const currentSlide = getElement(`.slide:nth-child(${slideCounter}`);
  slides.forEach(function (slide) {
    slide.classList.add('hide-slide');
  });
  currentSlide.classList.remove('hide-slide');
}
