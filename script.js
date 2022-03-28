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

// back project panel close button

const backClose = document.querySelector("#close");
const backPanel = document.querySelector('.back-page');
backPanel.classList.add('display');


backClose.addEventListener('change', (e) => {
    if (e.target.checked) {
        backPanel.classList.add('display')
        menuBtn.disabled = false;
    }
    else {
        backPanel.classList.remove('display')
    }
})



// back project select buttons

let backBtn = document.querySelectorAll('input[name="pledge"]');
let bambooLower = document.querySelector('.bamboo-lower');
let blackLower = document.querySelector('.black-lower');

backBtn.forEach((button) => {
    button.addEventListener('change', () => {
        if (button.value == 'bamboo') {
            bambooLower.style.display = 'block';
            blackLower.style.display = 'none';
        }
        else if (button.value == 'black') {
            blackLower.style.display = 'block';
            bambooLower.style.display = 'none';
        }
        else {
            bambooLower.style.display = 'none';
            blackLower.style.display = 'none';
        }
    })
})


const openBackPanel = document.querySelectorAll('button[value="back-open"]');
openBackPanel.forEach((button) => {
    button.addEventListener('click', () => {
        backPanel.classList.remove('display')
        menuBtn.disabled = true;
    })
})
