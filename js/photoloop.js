let firstImg = document.querySelector('.first-img');
let secImg = document.querySelector('.second-img');
let thirdImg = document.querySelector('.third-img');

function photosAnimation() {
    setTimeout(() => {
        firstImg.classList.toggle('active');
    }, 1500);
    setTimeout(() => {
        thirdImg.classList.toggle('active');
    }, 3000);
    setTimeout(() => {
        secImg.classList.toggle('active');
    }, 5000);
};

setInterval(() => {
    photosAnimation();
}, 5000);