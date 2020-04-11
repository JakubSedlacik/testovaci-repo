'use strict'

setInterval(function () {
    changeText();
    changeText2();
}, 1700);

let textId = 0;
const firstCarousel = document.querySelector('#m1')
let text = " ";

function changeText() {
    if (textId === 3) {
        textId = 0;
    }

    textId ++;

    if (textId === 1) {
        text = 'Savec';
    } else if (textId === 2) {
        text = 'Plešoun';
    } else if (textId === 3) {
        text = 'Kočka';
    }

    firstCarousel.innerHTML = text;
}

let textId2 = 0;
const mainHeader = document.querySelector('#main-header');
let text2 = ' ';

function changeText2() {
    if (textId2 ===7) {
        textId2 = 0;
    }

    textId2 ++;

    if (textId2 === 1) {
        text2 = 'hUlahop';
    } else if (textId2 === 2) {
        text2 = 'huLahop';
    } else if (textId2 === 3) {
        text2 = 'hulAhop';
    } else if (textId2 === 4) {
        text2 = 'hulaHop';
    } else if (textId2 === 5) {
        text2 = 'hulahOp';
    } else if (textId2 === 6) {
        text2 = 'hulahoP';
    } else if (textId2 === 7) {
        text2 = 'Hulahop';
    }

    mainHeader.innerHTML = text2;
}
