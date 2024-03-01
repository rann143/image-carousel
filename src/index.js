import './style.css';
import Iceland1 from './iceland-slider1.png';
import Iceland2 from './images/iceland-slider2.png';
import Iceland3 from './images/iceland-slider3.png';

const carousel = document.querySelector('.carousel');

const myImage1 = new Image();
myImage1.src = Iceland1;
myImage1.style.width = '50%';
myImage1.style.height = '90%';

const myImage2 = new Image();
myImage2.src = Iceland2;
myImage2.style.width = '50%';
myImage2.style.height = '90%';

const myImage3 = new Image();
myImage3.src = Iceland3;
myImage3.style.width = '50%';
myImage3.style.height = '90%';

const imgArray = [myImage1, myImage2, myImage3];

let i = 0;
carousel.appendChild(imgArray[i]);
let currentImage = imgArray[i];
function slideToNextImage() {
  let nextImage = imgArray[i + 1];
  let lastImage = imgArray[imgArray.length - 1];
  if (i < (imgArray.length - 1)) {
    carousel.replaceChild(nextImage, currentImage);
    i += 1;
    currentImage = imgArray[i];
    nextImage = imgArray[i + 1];
  } else if (i >= (imgArray.length - 1)) {
    i = 0;
    currentImage = imgArray[i];

    carousel.replaceChild(currentImage, lastImage);
  }
}
// Doesn't work properly yet.

function slideToPreviousImage() {
  let prevImage = imgArray[i - 1];
  let firstImage = imgArray[0];
  console.log(i);
  if (i <= (imgArray.length - 1) && i > 0) {
    carousel.replaceChild(currentImage, prevImage);
    i -= 1;
    console.log(i);
    currentImage = imgArray[i];
    prevImage = imgArray[i - 1];
  } else if (i <= 0) {
    i = 2;
    console.log(i);
    currentImage = imgArray[i];
    carousel.replaceChild(firstImage, currentImage);
  }
}

const nextBtn = document.querySelector('#next-btn');

nextBtn.addEventListener('click', (e) => {
  console.log('next image');
  slideToNextImage();
});

const prevBtn = document.querySelector('#previous-btn');

prevBtn.addEventListener('click', (e) => {
  console.log('previous image');
  slideToPreviousImage();
});
