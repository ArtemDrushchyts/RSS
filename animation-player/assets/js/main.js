if (localStorage.getItem('radius') != null) {
    const radius = localStorage.getItem('radius');
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
            elem.style.top = `${y - top1}px`;
            elem.style.left = `${x - left1}px`;
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
let count = 1;
const drawCanvas = () => {
    const canv = document.getElementsByClassName('canvas');
    const ctx = canv[count - 1].getContext('2d');
    let isMouseDown = false;

    canv[count - 1].width = 300;
    canv[count - 1].height = 300;

    canv[count - 1].addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    canv[count - 1].addEventListener('mouseup', () => {
        isMouseDown = false;
        ctx.beginPath();
        if (document.querySelector(`.item${count} img`)) {
            document.querySelector(`.item${count} img`).remove();

            const image = new Image();
            image.id = 'image';
            image.width = 100;
            image.height = 100;
            image.src = document.querySelector(`.canvas-${count}`).toDataURL();
            document.querySelector(`.item${count}`).appendChild(image);
        } else {
            const image = new Image();
            image.id = 'image';
            image.width = 100;
            image.height = 100;
            image.src = document.querySelector(`.canvas-${count}`).toDataURL();
            document.querySelector(`.item${count}`).appendChild(image);
        }
    });
    ctx.lineWidth = 1 * 2;

    canv[count - 1].addEventListener('mousemove', e => {
        if (isMouseDown) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 1, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });
}
drawCanvas();
const btnAdd = document.getElementsByClassName('btn-addFrame')[0];
const frameWrap = document.getElementsByClassName('canvas__wrapper')[0];
const canvasItem = document.getElementsByClassName('canvas-addFrame__item');
const btnDel = document.querySelector(`.delete-${count}`);
const btnCopy = document.getElementsByClassName('canvas__wrapper__copy');

btnAdd.addEventListener('click', () => {
    count++;
    const cnv = document.createElement('div');
    cnv.className = `canvas__wrapper__item item${count}`;
    cnv.innerHTML = `<button class="canvas__wrapper__del delete-${count}"><i class="far fa-trash-alt"></i></button>
    <button class="canvas__wrapper__copy"><i class="far fa-copy"></i></button>`;
    frameWrap.appendChild(cnv);
    const canvasFrame = document.querySelector('.canvas-frame');
    const canvs = document.createElement('canvas');
    canvs.setAttribute('class', `canvas canvas-${count}`);
    canvs.setAttribute('width', 300);
    canvs.setAttribute('height', 300);
    canvs.setAttribute('style', 'border: 2px solid #666');
    canvs.setAttribute('style', 'background-color: #eee');
    canvasFrame.appendChild(canvs);
    drawCanvas();
});

frameWrap.addEventListener('click', e => {
    const target = e.target.parentNode.parentNode;
    if (e.target.matches('.canvas__wrapper__del,.fa-trash-alt')) {

        target.remove();
        count -= 1;
    }
    if (e.target.matches('.canvas__wrapper__copy,.fa-copy')) {
        const clone = target.cloneNode(true);
        target.parentNode.insertBefore(clone, target.nextSibling);
        count += 1;
    }
});
let a = 1;
let fps = 2;
function animate() {
    setInterval(() => {
        const canvasView = document.getElementById('canvasView');
        const source = document.getElementsByClassName('canvas');
        const sourceCtx = canvasView.getContext('2d');
        sourceCtx.drawImage(source[a - 1], 0, 0);
        a += 1;
        if (a === count + 1) {
            a = 1;
        }
        setTimeout(() => {
            sourceCtx.clearRect(0, 0, 500, 500);
        }, 980);
    }, 1000 / fps);
}

const start = document.getElementById('start');

start.addEventListener('click', () => {
    animate();
});

const fullScreen = document.getElementById('fullscreen');
const canvasView = document.getElementById('canvasView');
fullScreen.addEventListener('click', () => {
    canvasView.requestFullscreen();
});

const addFps = document.getElementById('addFps');
const delFpss = document.getElementById('delFpss');
const fpsText = document.querySelector('.fps-text');

addFps.addEventListener('click', () => {
    if (fps === 24) return;
    fps += 2;
    fpsText.innerHTML = `${fps} FPS`;
});

delFpss.addEventListener('click', () => {
    if (fps === 0) return;
    fps -= 2;
    fpsText.innerHTML = `${fps} FPS`;
});
