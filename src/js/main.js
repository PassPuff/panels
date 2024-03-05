// Store the query selections in variables for better performance
const materialsList = document.querySelector('.panels__list');
const materialsWrap = document.querySelector('.panels__wrapper');
const sliderMaterialsPanels = document.querySelector('.js-slider-materials-panels');

if (materialsList) {
  const materialsCards = document.querySelectorAll('.panels__item');
  const cardsCount = materialsCards.length;

  // Set the '--cards-count' CSS variable once
  materialsList.style.setProperty('--cards-count', cardsCount);

  const addActiveOnHover = (elements) => {
    const lastElement = elements[elements.length - 1]; // Store the last element
    lastElement.classList.add('panels__item--active');

    elements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        elements.forEach((el) => {
          el.classList.remove('panels__item--active');
        });
      });
    });
  };

  if (window.innerWidth > 767) {
    addActiveOnHover(materialsCards);
  }

  // Initialize the Swiper outside of the breakpoint conditions
  const swiper = new Swiper(sliderMaterialsPanels, {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    allowTouchMove: true,
    slideActiveClass: 'panels__item--active',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        allowTouchMove: false,
        width: 0,
        loop: false,
        navigation: {
          enabled: false,
        },
      },
      426: {
        allowTouchMove: true,
        slidesPerView: 5,
      },
    },
  });

  // Remove classes from materialsWrap using classList.add for better performance
  materialsWrap.classList.remove('swiper-android', 'swiper-backface-hidden');
}