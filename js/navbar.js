let headerButton = document.querySelector('.menu_button');
let menuView = document.querySelector('.menu');
let menuBackground = document.querySelector('.body');
let loopPosition = document.querySelector('.loop-position')
let logoImg = document.querySelector('.logo');
let teemsImg = ["imgs/logo.png", "imgs/darkLogo.png"];
let itemSelect = 0;


headerButton.addEventListener('click' , function() {
    headerButton.classList.toggle('active');
    menuView.classList.toggle('active');
    menuBackground.classList.toggle('active');
    loopPosition.classList.toggle('active');
    setTimeout(changeImg, 200);
});

function changeImg() {
    if (itemSelect === teemsImg.length - 1) {
        itemSelect = 0;
        logoImg.src = teemsImg[0];
    } else {
        itemSelect++
        logoImg.src = teemsImg[itemSelect];
    }
}
