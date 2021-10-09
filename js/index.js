"use strict"

const box = document.querySelectorAll('.box img'),
next = document.querySelector('.btn_next'),
prev = document.querySelector('.btn_prev'),
current = document.querySelector('#curent');

let indexItem = 0;


function shows(u){
    if(u > box.length){
        indexItem = 1
    }if(u < 1){
        indexItem = box.length
    }
    box.forEach(item => item.style.cssText = 'display:none')
    box[indexItem - 1].style.display = 'block';
    if(box.length < 10){
        current.textContent = `0${indexItem}`
    }else{
        current.textContent = indexItem
    }
}

function showIndex(u){
    shows(indexItem += 1)
}

next.addEventListener('click', () =>{
    showIndex(1)
})
prev.addEventListener('click', () =>{
    showIndex(-1)
})

