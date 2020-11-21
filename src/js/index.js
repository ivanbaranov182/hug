// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import Swiper, { Navigation, Pagination, Scrollbar }  from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);


const aboutSwiper = new Swiper('.about-slider', {
  slidesPerView: 'auto',
  spaceBetween: 60,
  navigation: {
    nextEl: '.about-slider__arrow._next',
    prevEl: '.about-slider__arrow._prev',
  },
  scrollbar: {
    draggable: true,
    el: '.about-slider__scroll .swiper-scrollbar',
  },
})


const salesIndexSwiper = new Swiper('.sales-index__slider', {
  slidesPerView: 'auto',
  spaceBetween: 59,
  navigation: {
    nextEl: '.sales-index__button._right',
    prevEl: '.sales-index__button._left',
  },
})


const headerSwiper = new Swiper('.header__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    clickable: true,
    el: '.header__slider-pagination',
  },
  navigation: {
    nextEl: '.header__slider-arrow_next',
    prevEl: '.header__slider-arrow_prev',
  }
})


const actualsButtons = document.querySelectorAll('.actuals__top-button');
actualsButtons.forEach((actualsButton, index) => {
  actualsButton.addEventListener('click', function() {
    if (this.classList.contains('_active'))
      return;
    const actualsList = document.querySelectorAll('.actuals__list');
    actualsButtons.forEach((button) => button.classList.remove('_active'));
    actualsList.forEach((list) => list.classList.remove('_active'));
    actualsList[index].classList.add('_active');
    this.classList.add('_active');
  });
});


const contactButtons = document.querySelectorAll('.contacts__buttons-item');
contactButtons.forEach((contactButton, index) => {
  contactButton.addEventListener('click', function() {
    if (this.classList.contains('_active'))
      return;
    contactButtons.forEach((button) => button.classList.remove('_active'));
    this.classList.add('_active');
  });
});


const aboutButtons = document.querySelectorAll('.about__buttons-item');
aboutButtons.forEach((aboutButton, index) => {
  aboutButton.addEventListener('click', function() {
    if (this.classList.contains('_active'))
      return;
    aboutButtons.forEach((button) => button.classList.remove('_active'));
    this.classList.add('_active');
  });
});


// todo all selects on page
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  selectSingle.classList.toggle('active')
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.classList.remove('active')
  });
}