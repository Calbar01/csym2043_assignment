//MODALS
function exit(){
    location.reload();
}

function modalEvent1(){
    let modal = document.getElementById('weekOne');
    modal.style.display = 'flex';
}

function modalEvent2(){
    let modal = document.getElementById('weekTwo');
    modal.style.display = 'flex';
}
function modalEvent3(){
    let modal = document.getElementById('weekThree');
    modal.style.display = 'flex';
}
function modalEvent4(){
    let modal = document.getElementById('weekFour');
    modal.style.display = 'flex';
}
function modalEvent5(){
    let modal = document.getElementById('weekFive');
    modal.style.display = 'flex';
}
function modalEvent6(){
    let modal = document.getElementById('weekSix');
    modal.style.display = 'flex';
}
function mobileNav(){
    let nav = document.getElementById('mobile-nav-links');
    nav.style.display = 'flex';
}


function modalPopup(){
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');
    let step4 = document.getElementById('step4');
    let step5 = document.getElementById('step5');
    let step6 = document.getElementById('step6');
    let burger = document.getElementById('burger');

    step1.addEventListener('click', modalEvent1);
    step2.addEventListener('click', modalEvent2);
    step3.addEventListener('click', modalEvent3);
    step4.addEventListener('click', modalEvent4);
    step5.addEventListener('click', modalEvent5);
    step6.addEventListener('click', modalEvent6);
    burger.addEventListener('click', mobileNav);
}


document.addEventListener('DOMContentLoaded', modalPopup);