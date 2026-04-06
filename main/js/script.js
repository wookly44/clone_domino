//nav-mainmenu
let subMenu = document.querySelector('.sub_menu');
let navArrow = document.querySelector('.navarrow');

function clic(){
    navArrow.classList.toggle('rot')
    navArrow.style.transition = '0.3s'
    subMenu.classList.toggle('top')
    subMenu.style.transition = '0.3s'
};

//imgslide
let img = document.querySelector('.slide_wrap>article')
let imgs = document.querySelectorAll('.slide_wrap>article>div')
let arrs = document.querySelectorAll('.arrow_wrap li')

function slideShow(){
    img.style.left = '-100%'
}
setInterval(slideShow, 2000);

//bnr_wrap
let conts = document.querySelector('.bnr_wrap>article>div') 

function arrow(){
    conts.classList.toggle('left');
    conts.style.transition = '0.7s'
}