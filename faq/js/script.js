//nav-mainmenu
let subMenu = document.querySelector('.sub_menu');
let navArrow = document.querySelector('.navarrow');

function clic(){
    navArrow.classList.toggle('rot')
    navArrow.style.transition = '0.3s'
    subMenu.classList.toggle('top')
    subMenu.style.transition = '0.3s'
};

// 자주하는 질문 부분 nav
let conNavs = document.querySelectorAll('.menu_nav>div');
let mens = document.querySelectorAll('.contents>div')

conNavs[0].classList.add('menhov');
mens[0].classList.add('block')

conNavs.forEach(function(list,j){
    list.addEventListener('click',function(){
        for(i=0; i<conNavs.length; i++){
            conNavs[i].classList.remove('menhov')
            mens[i].classList.remove('block');
        }
        list.classList.add('menhov');
        mens[j].classList.add('block');
    })
})

// menu1
// search input outline
let txt = document.querySelector('input[type="text"]')

txt.addEventListener('click',function(){
    txt.classList.toggle('input_click')
})

// Q&A contents slide
let qus = document.querySelectorAll('.question');
let ans = document.querySelectorAll('.answer');
let navars = document.querySelectorAll('.navar');
let active = document.querySelector('.qus.active');

qus.forEach(function(qq,i){
    qq.addEventListener('click',function(){       

        if(qq.getAttribute('class')==='question active'){
            ans[i].style.maxHeight = null;
            ans[i].classList.remove('bord');
            navars[i].classList.remove('tog');
            qq.classList.remove('active');

        }else{

            for(j=0; j<qus.length; j++){
                ans[j].style.maxHeight = null;
                ans[j].classList.remove('bord');
                navars[j].classList.remove('tog');
                /*navars[j].style.transition = '0.3s';*/
                qus[j].classList.remove('active');
            }
        
            navars[i].classList.add('tog');
            navars[i].style.transition = '0.3s';
            ans[i].style.maxHeight = ans[i].scrollHeight + 80 + 'px';
            ans[i].style.transition = '0.3s';
            ans[i].classList.add('bord');
            qq.classList.add('active');
            
        }

    })
})

// menu_nav (피자 주문하기 등)변경
let tabs = document.querySelectorAll('td')
let qnas = document.querySelectorAll('.qnas>ul')

tabs[0].classList.add('click')
qnas[0].style.display = 'block';

console.log(tabs)
tabs.forEach(function(tab,j){
    tab.addEventListener('click',function(){
        for(i=0; i<tabs.length; i++){
            tabs[i].classList.remove('click')
            qnas[i].style.display = 'none';
        }
        tab.classList.add('click')
        qnas[j].style.display = 'block';
    })
});

// menu2
// 문의/칭찬하기 팝업
let popup = document.querySelector('.popup');
let popupBg = document.querySelector('.popup .bg');

conNavs[1].addEventListener('click',function(){
    popup.classList.add('block');
})
popupBg.addEventListener('click',function(){
    popup.classList.remove('block');
})
