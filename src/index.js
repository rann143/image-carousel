import './style.css';
import Iceland1 from './iceland-slider1.png';
import Iceland2 from './images/iceland-slider2.png';
import Iceland3 from './images/iceland-slider3.png';

const carousel = document.querySelector('.carousel');

const myImage1 = new Image();
myImage1.src = Iceland1;
myImage1.style.width = '90%';
myImage1.style.boxShadow = '5px 5px 3px rgba(0, 0, 0, 0.2)';
myImage1.classList.add('curtain');

const myImage2 = new Image();
myImage2.src = Iceland2;
myImage2.style.width = '50%';
myImage2.style.boxShadow = '5px 5px 3px rgba(0, 0, 0, 0.2)';
myImage2.classList.add('curtain');

const myImage3 = new Image();
myImage3.src = Iceland3;
myImage3.style.width = '90%';
myImage3.style.boxShadow = '5px 5px 3px rgba(0, 0, 0, 0.2)';
myImage3.classList.add('curtain');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const imgArray = [myImage1, myImage2, myImage3];

let i = 0;
// Display first image
carousel.appendChild(imgArray[i]);
let currentImage = imgArray[i];
currentImage.classList.add('visible');

function fillProperButton() {
  if (i === imgArray.indexOf(myImage1)) {
    btn1.classList.add('filled');
    btn2.classList.remove('filled');
    btn3.classList.remove('filled');
  } else if (i === imgArray.indexOf(myImage2)) {
    btn2.classList.add('filled');
    btn1.classList.remove('filled');
    btn3.classList.remove('filled');
  } else if (i === imgArray.indexOf(myImage3)) {
    btn3.classList.add('filled');
    btn2.classList.remove('filled');
    btn1.classList.remove('filled');
  }
}

fillProperButton();

function slideToNextImage() {
  let nextImage = imgArray[i + 1];
  let lastImage = imgArray[imgArray.length - 1];
  currentImage.classList.remove('visible');
  if (i < (imgArray.length - 1)) {
    // replace the current image with the next image
    carousel.replaceChild(nextImage, currentImage);
    i += 1;
    currentImage = imgArray[i];
    nextImage = imgArray[i + 1];
  } else if (i >= (imgArray.length - 1)) {
    // set current image to the first image in the array
    i = 0;
    currentImage = imgArray[i];
    // replace the last image in the array with current image
    carousel.replaceChild(currentImage, lastImage);
  }
  fillProperButton();
  setTimeout(() => { currentImage.classList.add('visible'); }, 50);
  return i;
}

function slideToPreviousImage() {
  let prevImage = imgArray[i - 1];
  let firstImage = imgArray[0];
  currentImage.classList.remove('visible');
  if (i <= (imgArray.length - 1) && i > 0) {
    carousel.replaceChild(prevImage, currentImage);
    i -= 1;
    currentImage = imgArray[i];
    prevImage = imgArray[i - 1];
  } else if (i <= 0) {
    // set current image to the last image in the array
    i = 2;
    currentImage = imgArray[i];
    // replace first image in the array with the current image(set to the last image in the array)
    carousel.replaceChild(currentImage, firstImage);
  }
  fillProperButton();
  setTimeout(() => { currentImage.classList.add('visible'); }, 50);
  console.log(i);
  return i;
}

const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#previous-btn');

nextBtn.addEventListener('click', (e) => {
  console.log('next image');
  slideToNextImage();
});

prevBtn.addEventListener('click', (e) => {
  console.log('previous image');
  slideToPreviousImage();
});

btn1.addEventListener('click', (e) => {
  currentImage.classList.remove('visible');
  carousel.removeChild(currentImage);
  i = 0;
  currentImage = imgArray[i];
  carousel.appendChild(currentImage);
  setTimeout(() => { currentImage.classList.add('visible'); }, 50);
  btn1.classList.add('filled');
  btn2.classList.remove('filled');
  btn3.classList.remove('filled');
});

btn2.addEventListener('click', (e) => {
  currentImage.classList.remove('visible');
  carousel.removeChild(currentImage);
  i = 1;
  currentImage = imgArray[i];
  carousel.appendChild(currentImage);
  setTimeout(() => { currentImage.classList.add('visible'); }, 50);
  btn2.classList.add('filled');
  btn1.classList.remove('filled');
  btn3.classList.remove('filled');
});

btn3.addEventListener('click', (e) => {
  currentImage.classList.remove('visible');
  carousel.removeChild(currentImage);
  i = 2;
  currentImage = imgArray[i];
  carousel.appendChild(currentImage);
  setTimeout(() => { currentImage.classList.add('visible'); }, 50);
  btn3.classList.add('filled');
  btn2.classList.remove('filled');
  btn1.classList.remove('filled');
});
