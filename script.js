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


//back-project menu
const backProjectMenu = document.querySelector('.back-project');
const backProjectClosebtn = document.querySelector('#cancel');
backProjectClosebtn.checked = true;
if (backProjectClosebtn.checked == true) {
    backProjectMenu.classList.add('hide')
}

backProjectClosebtn.addEventListener('change', (e) => {
    if (e.target.checked) {
        backProjectMenu.classList.add('hide');
    }
    else {
        backProjectMenu.classList.remove('hide');
        mobMenuButton.disabled = true;
    }
})

// on back-project panel

const backOpenbtns = document.querySelectorAll('.open');
backOpenbtns.forEach((button) => {
    button.addEventListener('click', () => {
        backProjectMenu.classList.remove('hide');
        backProjectClosebtn.checked = false;
    })
})

// pledge select

const pledgeSelectBtn = document.querySelectorAll('.sel');
let bamboo = document.querySelector('.bamboos');
let black = document.querySelector('.black');
let free = document.querySelector('.free');
console.log(black)

pledgeSelectBtn.forEach((button) => {
    button.checked = false;
})

pledgeSelectBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.name == 'black') {
            black.style.border = '1px #63A099 solid';
            black.childNodes[7].style.display = 'flex';
        }
        if (button.name == 'bamboo') {
            bamboo.style.border = '1px #63A0 solid';
            bamboo.childNodes[7].style.display = 'flex';
        }
        if(button.name == 'free'){
            free.style.border = '1px blue solid';
        }

    })
}
)

// pledge price;
// const blackPrice = document.querySelector('.blackPledge');
// const bambooPrice = document.querySelector('.bambooPledge');
// const bambooLabel = document.querySelector('.bambooLabel');
// const blackLabel = document.querySelector('.blackLabel');
// const error = document.querySelector('#error')

// let flag = true;

// bambooPrice.addEventListener('input', () => {
//     if (bambooPrice.value < 25) {
//         error.textContent = "Value can't be lower than $25"
//         flag = true;
//     }
//     else if () {
//         error.textContent = 'Ony numbers';
//         flag = true;
//     }
//     else {
//         error.textContent = 'Enter your Pledge'
//         flag = false;
//     }

// })


// if (flag == true) {
//     error.style.color = 'red';
//     blackLabel.classList.add('label-disabled');
//     bambooLabel.classList.add('label-disabled');
//     blackLabel.disabled = true;
//     bambooLabel.disabled = true;
// }
// else {
//     error.style.color =  'hsl(0, 0%, 48%)';
//     blackLabel.classList.remove('label-disabled');
//     bambooLabel.classList.remove('label-disabled');
//     blackLabel.disabled = false;
//     bambooLabel.disabled = false;
// }