if (localStorage.getItem('radius') != null) {
    let radius = localStorage.getItem('radius');
}

const paintBucker = document.getElementById('paintBucker');
const chooseColor = document.getElementById('chooseColor');
const move = document.getElementById('move');
const transform = document.getElementById('transform');
const currentColor = document.getElementsByClassName('current__color')[0];
const prevColor = document.getElementsByClassName('prev__color')[0];
const canvasBlock = document.getElementsByClassName('canvas__block');
const palleteColor = document.getElementsByClassName('pallete-color')[0];
const canvas = document.getElementsByClassName('canvas')[0];

function backgroundColorChange() {
    this.style.background = window.getComputedStyle(currentColor).background;
}

function changeElementForm() {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0%';
        return;
    }
    this.style.borderRadius = '50%';
}

function changeColor(event) {
    if (event.target.classList.contains('color')) {
        const a = getComputedStyle(event.target);
        prevColor.style.background = window.getComputedStyle(currentColor).background;
        currentColor.style.background = a.background;
    }
}

function moveAt(event) {
    const elem = event.target;
    if (elem.classList.contains('canvas')) {
        return;
    }
    document.onmousedown = () => {
        return false;
    };
    elem.style.cursor = 'move';
    document.onmousemove = e => {
        let x = e.pageX;
        let y = e.pageY;
        let left1 = elem.offsetLeft;
        let top1 = elem.offsetTop;
        left1 = x - left1;
        top1 = y - top1;
        document.onmousemove = e => {
            x = e.pageX;
            y = e.pageY;
            elem.style.top = y - top1 + 'px';
            elem.style.left = x - left1 + 'px';
        };
    };
    document.onmouseup = () => {
        elem.style.cursor = 'auto';
        document.onmousedown = null;
        document.onmousemove = null;
    };
}

function choseColorStart() {
    palleteColor.addEventListener('click', changeColor);
    for (let i = 0; i < canvasBlock.length; i++) {
        canvasBlock[i].removeEventListener('click', backgroundColorChange);
        canvasBlock[i].removeEventListener('click', changeElementForm);
    }
    canvas.removeEventListener('mousedown', moveAt);
}

function changeElementColor() {
    palleteColor.removeEventListener('click', changeColor);
    for (let i = 0; i < canvasBlock.length; i++) {
        canvasBlock[i].removeEventListener('click', changeElementForm);
        canvasBlock[i].addEventListener('click', backgroundColorChange);
    }
    canvas.removeEventListener('mousedown', moveAt);
}

function transformBlock() {
    palleteColor.removeEventListener('click', changeColor);
    for (let i = 0; i < canvasBlock.length; i++) {
        canvasBlock[i].removeEventListener('click', backgroundColorChange);
        canvasBlock[i].addEventListener('click', changeElementForm);
    }
    canvas.removeEventListener('mousedown', moveAt);
}

function moveElement() {
    palleteColor.removeEventListener('click', changeColor);
    for (let i = 0; i < canvasBlock.length; i++) {
        canvasBlock[i].removeEventListener('click', changeElementForm);
        canvasBlock[i].removeEventListener('click', backgroundColorChange);
    }
    canvas.addEventListener('mousedown', moveAt);
}

paintBucker.addEventListener('click', changeElementColor);

transform.addEventListener('click', transformBlock);

chooseColor.addEventListener('click', choseColorStart);
move.addEventListener('click', moveElement);

document.onkeydown = event => {
    if (event.keyCode === 'P'.charCodeAt(0)) {
        changeElementColor();
    }
    if (event.keyCode === 'C'.charCodeAt(0)) {
        choseColorStart();
    }
    if (event.keyCode === 'T'.charCodeAt(0)) {
        transformBlock();
    }
    if (event.keyCode === 'M'.charCodeAt(0)) {
        moveElement();
    }
};

let elem1 = canvasBlock[0].style;
localStorage.setItem('style1', elem1);
