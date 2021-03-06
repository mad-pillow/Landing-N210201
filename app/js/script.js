let sliderLeftBtn = document.getElementsByClassName('latest-articles__left-btn');
let sliderRightBtn = document.getElementsByClassName('latest-articles__right-btn');
let sliderContainer = document.getElementsByClassName('latest-articles__slider-container');
let sliderList = document.getElementsByClassName('latest-articles__list');
let sliderItems = document.getElementsByClassName('latest-articles__item');
let itemPosition = 0;
let sliderLength = 0;
let widthOfSlider = 0;
let sliderItemMarginLeft = 0;
let widthOfSliderItem = 0;

function setSlider() {
  widthOfSlider = parseInt(getComputedStyle(sliderContainer[0]).getPropertyValue('width').replace('px', ''));
  widthOfSliderItem = parseInt(getComputedStyle(sliderItems[0]).getPropertyValue('width').replace('px', ''));
  sliderItemMarginLeft = parseInt(getComputedStyle(sliderItems[1]).getPropertyValue('margin-left').replace('px', ''));
  sliderLength = sliderItems.length - parseInt(widthOfSlider / widthOfSliderItem);
}

setSlider();

window.addEventListener('resize', setSlider);

function sliderToLeft() {
  if (itemPosition < 0) {
    itemPosition++;
    sliderList[0].style.left = (widthOfSliderItem + sliderItemMarginLeft) * itemPosition + 'px';
  }
}

function sliderToRight() {
  itemPosition--;
  if (itemPosition >= -1 * sliderLength) {
    sliderList[0].style.left = (widthOfSliderItem + sliderItemMarginLeft) * itemPosition + 'px';
  } else {
    sliderList[0].style.left = 0 + 'px';
    itemPosition = 0;
  }
}

sliderLeftBtn[0].addEventListener('click', () => {
  int = clearInterval(int);
  sliderToLeft();
});

sliderRightBtn[0].addEventListener('click', () => {
  int = clearInterval(int);
  sliderToRight();
});

let int = setInterval(sliderToRight, 3000);

window.addEventListener('scroll', () => {
  if (typeof int == 'undefined') {
    int = setInterval(sliderToRight, 3000);
  }
});

let touchOnX = null;

function touchOn(e) {
  touchOnX = e.touches[0].clientX;
  console.log(touchOnX);
}

sliderItems[0].addEventListener('touch', e => {
  e.preventDefault();
  touchOn(e);
});
