
var eng = true;

window.onload = function(){

    const buttonEng = document.getElementById('eng');
    const buttonRus = document.getElementById('rus');

    buttonRus.addEventListener('click', function(){
        eng = false;
        console.log('lang is rus')
    })

    buttonEng.addEventListener('click', function(){
        eng = true;
        console.log('lang is eng')
    })
}

