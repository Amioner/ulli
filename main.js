window.onload = function(){

    let leftNav = document.querySelector('.header__nav_left');
    let rightNav = document.querySelector('.header__nav_right');
    let logo = document.querySelector('.header__logo');

    leftNav.classList.toggle('reverse1');
    rightNav.classList.toggle('reverse2');
    logo.classList.toggle('active');

}