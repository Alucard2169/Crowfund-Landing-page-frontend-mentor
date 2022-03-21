// MOBILE MENU FUNCTIONALITY

const mobMenuButton = document.querySelector('#menu');
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu-cont');
mobMenuButton.checked = true;

mobMenuButton.addEventListener('change', (e) => {
    if (e.target.checked) {
        mobileMenu.classList.add('hide')
        menuIcon.src = 'images/icon-hamburger.svg';
        menuIcon.alt = 'open Menu'
        
        
    } else {
        mobileMenu.classList.remove('hide')
        menuIcon.src = 'images/icon-close-menu.svg';
        menuIcon.alt = 'close Menu'
    } 
})