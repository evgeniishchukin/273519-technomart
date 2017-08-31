'use strict';
(function () {
  var mapButton = document.querySelector('.contacts__button');
  var writeUsButton = document.querySelector('.contacts__link');
  var buyButton = document.querySelectorAll('.product__button--buy');
  var continueButton = document.querySelector('.add-in-cart__button--continue');
  var mainSliderButtons = document.querySelectorAll('.main-slider__button');
  var mainSliderPage = document.querySelectorAll('.main-slider__page');
  var mainSliderPoints = document.querySelectorAll('.main-slider__button-page');
  var servicesButtons = document.querySelectorAll('.services__button');
  var servicesItems = document.querySelectorAll('.services__item');
  var overlay = document.querySelector('.overlay');
  var modalMap = document.querySelector('.map');
  var writeUsModal = document.querySelector('.write-us');
  var addInCartModal = document.querySelector('.add-in-cart');
  var modalClose = document.querySelectorAll('.modal__close');
  var ESC_KEY_CODE = 27;

  var closeByESC = function (event) {
    if (event.keyCode === ESC_KEY_CODE) {
      overlay.classList.add('overlay--close');
      var openModal = document.querySelectorAll('.modal');
      Array.from(openModal, function (modal) {
        if (!modal.classList.contains('modal--close')) {
          modal.classList.add('modal--close');
        }
        modal.classList.remove('write-us--animation');
      });
      window.removeEventListener('keyup', closeByESC);
    }
  }

  Array.from(modalClose, function (element) {
    element.addEventListener('click', function (event) {
      element.parentNode.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      element.parentNode.classList.remove('write-us--animation');
    });
  });

  continueButton.addEventListener('click', function (event) {
    continueButton.parentNode.parentNode.classList.add('modal--close');
    overlay.classList.add('overlay--close');
    continueButton.parentNode.parentNode.classList.remove('write-us--animation');
  });

  if (mapButton && modalMap) {
    mapButton.addEventListener('click', function (event) {
      modalMap.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      window.addEventListener('keyup', closeByESC);
    });
  }

  if (writeUsButton && writeUsModal) {
    writeUsButton.addEventListener('click', function (event) {
      writeUsModal.classList.remove('modal--close');
      writeUsModal.classList.add('write-us--animation');
      overlay.classList.remove('overlay--close');
      window.addEventListener('keyup', closeByESC);
    });
  }

  Array.from(buyButton, function (item) {
    item.addEventListener('click', function (event) {
      addInCartModal.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      window.addEventListener('keyup', closeByESC);
    });
  });

  if (mainSliderButtons) {
    Array.from(mainSliderButtons, function (button) {
      button.addEventListener('click', function (event) {
        Array.from(mainSliderPage, function (page) {
          if (!page.classList.contains('visually-hidden')) {
            page.classList.add('visually-hidden');
          } else {
            page.classList.remove('visually-hidden');
          }
        });
      });
    });
  }

  if (mainSliderPoints) {
    Array.from(mainSliderPoints, function (point) {
      point.addEventListener('click', function (event) {
        if (point.classList.contains('main-slider__button-page--1')) {
          mainSliderPage[0].classList.remove('visually-hidden');
          mainSliderPage[1].classList.add('visually-hidden');
        } else {
          mainSliderPage[1].classList.remove('visually-hidden');
          mainSliderPage[0].classList.add('visually-hidden');
        }
      });
    });
  }

  if (servicesButtons) {
    Array.from(servicesButtons, function (button, index) {
      button.addEventListener('click', function (event) {
        Array.from(servicesButtons, function (element) {
          element.classList.remove('services__button--active');
        });
        Array.from(servicesItems, function (item) {
          item.classList.add('visually-hidden');
        });
        button.classList.add('services__button--active');
        servicesItems[index].classList.remove('visually-hidden');
      });
      button.addEventListener('focus', function (event) {
        Array.from(servicesButtons, function (element) {
          element.classList.remove('services__button--active');
        });
        Array.from(servicesItems, function (item) {
          item.classList.add('visually-hidden');
        });
        button.classList.add('services__button--active');
        servicesItems[index].classList.remove('visually-hidden');
      });
    });
  }
})();
