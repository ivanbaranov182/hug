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
  breakpoints: {
    920: {
      spaceBetween: 60,
    },
    320: {
      spaceBetween: 24,
    }
  }
})


const salesIndexSwiper = new Swiper('.sales-index__slider', {
  slidesPerView: 'auto',
  spaceBetween: 59,
  navigation: {
    nextEl: '.sales-index__button._right',
    prevEl: '.sales-index__button._left',
  },
  breakpoints: {
    920: {
      spaceBetween: 59,
    },
    480: {
      spaceBetween: 10,
    },
    320: {
      spaceBetween: 10,
    }
  }
});

const breakpoint = window.matchMedia( '(max-width:1416px)' );

let actualSwiperNews;
let actualSwiperEvents;

const breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
    actualSwiperNews = new Swiper('.actuals-slider-news', {
      slidesPerView: 'auto',
      spaceBetween: 24,
    });
    actualSwiperEvents = new Swiper('.actuals-slider-events', {
      slidesPerView: 'auto',
      spaceBetween: 24,
    });

  } else if ( breakpoint.matches === false ) {
    if ( actualSwiperNews !== undefined ) actualSwiperNews.destroy( true, true );
    if ( actualSwiperEvents !== undefined ) actualSwiperEvents.destroy( true, true );
  }
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();


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

const hamburgers = document.querySelectorAll('.hamburger');
hamburgers.forEach((hamburger) => {
  hamburger.addEventListener('click', function () {
    hamburgers.forEach((item) => {
      item.classList.toggle('_active');
      item.parentNode.classList.toggle('_active');
    })
    document.querySelector('.header__nav').classList.toggle('_active');
  });
})


const actualsButtons = document.querySelectorAll('.actuals__top-button');
actualsButtons.forEach((actualsButton, index) => {
  actualsButton.addEventListener('click', function() {
    if (this.classList.contains('_active'))
      return;
    const actualsList = document.querySelectorAll('.actuals-slider');
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

const selects = document.querySelectorAll('.__select');
selects.forEach((select) => {
  const selectSingle_title = select.querySelector('.__select__title');
  const selectSingle_labels = select.querySelectorAll('.__select__label');
  const selectSingle_inputs = select.querySelectorAll('.__select__input');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === select.getAttribute('data-state')) {
      select.setAttribute('data-state', '');
    } else {
      select.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      evt.currentTarget.previousSibling.checked = true;
      selectSingle_title.textContent = evt.target.textContent;
      select.setAttribute('data-state', '');
    });
  }

  for (let i = 0; i < selectSingle_inputs.length; i++) {
    selectSingle_inputs[i].checked = false;
  }
});

const modalTriggers = document.querySelectorAll('[data-target]');
modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const find = trigger.dataset.target;
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector(find).style.display = 'block';
  })
});

const closeModal = () => {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.modal > *').style.display = 'none';
}

document.querySelector('.modal-close').addEventListener('click', closeModal);