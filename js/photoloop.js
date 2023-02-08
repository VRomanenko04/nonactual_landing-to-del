let firstImg = document.querySelector('.first-img');
let secImg = document.querySelector('.second-img');
let thirdImg = document.querySelector('.third-img');

function photosAnimation() {
    setTimeout(() => {
        firstImg.classList.toggle('active');
    }, 1000);
    setTimeout(() => {
        thirdImg.classList.toggle('active');
    }, 2000);
    setTimeout(() => {
        secImg.classList.toggle('active');
    }, 3000);
};

setInterval(() => {
    photosAnimation();
}, 3000);