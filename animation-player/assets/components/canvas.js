function canvasModul() {
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
    };

    drawCanvas();

    const btnAdd = document.getElementsByClassName('btn-addFrame')[0];
    const frameWrap = document.getElementsByClassName('canvas__wrapper')[0];

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
}

module.exports = canvasModul;
