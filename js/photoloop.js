let firstImg = document.querySelector('.first-cert');
let secImg = document.querySelector('.second-cert');
let thirdImg = document.querySelector('.third-cert');

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