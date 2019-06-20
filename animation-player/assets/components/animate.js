function animateModul() {
    let a = 1;
    const rangeFps = document.getElementById('fps');
    const canvasView = document.getElementById('canvasView');

    function animate() {
        const source = document.getElementsByClassName('canvas');
        const sourceCtx = canvasView.getContext('2d');
        const fpsText = document.querySelector('.fps-text');
        fpsText.innerHTML = `${rangeFps.value} FPS`;
        sourceCtx.drawImage(source[a - 1], 0, 0);
        a += 1;
        if (a === count + 1) {
            a = 1;
        }
        setTimeout(() => {
            sourceCtx.clearRect(0, 0, 500, 500);
        }, 980 / rangeFps.value);
    }
    let start = setInterval(animate, 1000 / rangeFps.value);

    function startAnimation() {
        if (canvasView.getContext) {
            rangeFps.addEventListener('change', () => {
                clearInterval(start);
                start = setInterval(animate, 1000 / rangeFps.value);
            });
        }
    }
    startAnimation();
}

module.exports = animateModul;
