let sliderLeftBtn = document.getElementsByClassName('latest-articles__left-btn');
let sliderRightBtn = document.getElementsByClassName('latest-articles__right-btn');
let sliderContainer = document.getElementsByClassName('latest-articles__slider-container');
let sliderList = document.getElementsByClassName('latest-articles__list');
let sliderItems = document.getElementsByClassName('latest-articles__item');
let i = 0;
let l = 0;
let wc = 0;
let ml = 0;
let wi = 0;

let setSlider = function () {
   wc = parseInt(getComputedStyle(sliderContainer[0]).getPropertyValue('width').replace('px', ''));
   wi = parseInt(getComputedStyle(sliderItems[0]).getPropertyValue('width').replace('px', ''));
   ml = parseInt(getComputedStyle(sliderItems[1]).getPropertyValue('margin-left').replace('px', ''));
   l = sliderItems.length - parseInt(wc / wi);
};

setSlider();

window.addEventListener('resize', setSlider);

let sliderToLeft = function () {
   if (i < 0) {
      i++;
      sliderList[0].style.left = (wi + ml) * i + 'px';
   }
};

let sliderToRight = function () {
   i--;
   if (i >= -1 * l) {
      sliderList[0].style.left = (wi + ml) * i + 'px';
   } else {
      sliderList[0].style.left = 0 + 'px';
      i = 0;
   }
};

sliderLeftBtn[0].addEventListener('click', sliderToLeft);

sliderRightBtn[0].addEventListener('click', function () {
   clearInterval(int);
   sliderToRight();
});

let int = setInterval(sliderToRight, 3000);
