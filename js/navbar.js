let headerButton = document.querySelector('.menu-btn');
let menuView = document.querySelector('.menu');
let menuBackground = document.querySelector('.body');

headerButton.addEventListener('click' , function() {
    headerButton.classList.toggle('active');
    menuView.classList.toggle('active');
    menuBackground.classList.toggle('active');
});