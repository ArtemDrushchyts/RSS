function fullScreenModul() {
    const fullScreen = document.getElementById('fullscreen');
    const canvasViews = document.getElementById('canvasView');
    fullScreen.addEventListener('click', () => {
        canvasViews.requestFullscreen();
    });
}

module.exports = fullScreenModul;
