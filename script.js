// mobile menu

const menuBtn = document.querySelector('#menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.menu-icon');

menuBtn.checked = true;
mobileMenu.classList.add('display')

menuBtn.addEventListener('change', (e) => {
    if (e.target.checked) {
        mobileMenu.classList.add('display')
        mobileMenuIcon.src = "images/icon-hamburger.svg";
    }
    else {
        mobileMenu.classList.remove('display');
        mobileMenuIcon.src = "images/icon-close-menu.svg";
    }
})