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
backClose.checked = false;

backClose.addEventListener('change', (e) => {
    if (e.target.checked) {
        backPanel.classList.add('display')
        menuBtn.disabled = false;
        backClose.checked = false;
    }
    else {
        backPanel.classList.remove('display')
    }
})



// back project select buttons

let backBtn = document.querySelectorAll('input[name="pledge"]');
let bambooLower = document.querySelector('.bamboo-lower');
let blackLower = document.querySelector('.black-lower');

backBtn.forEach((button) => button.checked = false)
backBtn.forEach((button) => {
    button.addEventListener('change', () => {
        if (button.value == 'bamboo') {
            bambooLower.style.display = 'flex';
            blackLower.style.display = 'none';
        }
        else if (button.value == 'black') {
            blackLower.style.display = 'flex';
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


// pledge input
let value = 0;
let err = false;
const bambooPledge = document.querySelector('#amo-bamboo');
const blackPledge = document.querySelector('#amo-black');
bambooPledge.value = '';
blackPledge.value = '';
const error2 = document.querySelector('.error2')
const error = document.querySelector('.error');



// listen for bamboo pledge input
bambooPledge.addEventListener('input', () => {
    value = +bambooPledge.value;
    if (value < 25) {
        err = true;
        error.style.color = 'red';
        error.textContent = "can't be less than  $25"
    }
    else if (isNaN(bambooPledge.value)) {
        err = true;
    }
    else {
        err = false;
        error.style.color = "hsl(0,0%,48%)"
        error.textContent = "Enter your Pledge";
    }
})


// listen for black pledge input
blackPledge.addEventListener('input', () => {
    value = +blackPledge.value;
    if (value < 75) {
        err = true;
        error2.style.color = 'red';
        error2.textContent = "can't be less than $75"
        contBtn.disabled = true
    }
    else if (isNaN(blackPledge.value)) {
        err = true;
        contBtn.disabled = true
    }
    else {
        err = false;
        error2.style.color = "hsl(0,0%,48%)"
        error2.textContent = "Enter your Pledge";
        contBtn.disabled = false;
    }
})

// thanks message
const thanks = document.querySelector('.thanks');
thanks.classList.add('display');
let contBtn = document.querySelectorAll('.submit');
contBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (err == true) return;
        else {
            backPanel.classList.add('display');
            thanks.classList.remove('display');
        }
    })
})

// thanks , got it button
const gotIt = document.querySelector('.got');
gotIt.addEventListener('click', () => {
    thanks.classList.add('display');
    backBtn.forEach((button) => button.checked = false)
})

// no reward pledge functionality 
const selBtn = document.querySelector('input[value="no-reward"]');
selBtn.addEventListener('change', () => {
    if (selBtn.checked) {
        thanks.classList.remove('display');
        backPanel.classList.add('display');
    }
})

// bookmark button
const bookMark = document.querySelector('#bookmark');
bookMark.checked = false;
const bookIcon = document.querySelector('.book-icon');
bookMark.addEventListener('click', () => {
    if (bookMark.checked) {
        bookIcon.src = 'images/icon-bookmark-copy.svg';
    }
    else {
        bookIcon.src = 'images/icon-bookmark.svg'
    }
})

