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
    button.addEventListener('click', ()=>{
        backProjectMenu.classList.remove('hide');
        backProjectClosebtn.checked = false;
    })
})