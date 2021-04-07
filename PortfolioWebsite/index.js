function modalEvent(){
    let step1 = document.getElementById('step1');
    step1.style.display = 'flex';
}

function modalPopup(){
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');
    let step4 = document.getElementById('step4');
    let step5 = document.getElementById('step5');
    let step6 = document.getElementById('step6');

    step1.addEventListener('click', modalEvent);
}


document.addEventListener('DOMContentLoaded', modalPopup);