let headerButton = document.querySelector('.menu-btn');
let menuView = document.querySelector('.menu');
let menuBackground = document.querySelector('.body');
let logoImg = document.querySelector('.logo');
let teemsImg = ["imgs/logo.png", "imgs/darkLogo.png"];

headerButton.addEventListener('click' , function() {
    headerButton.classList.toggle('active');
    menuView.classList.toggle('active');
    menuBackground.classList.toggle('active');
});

function changeImg() {
    for(let i=0; i<teemsImg.length; i++){
        logoImg.src = teemsImg[i];
    }
};