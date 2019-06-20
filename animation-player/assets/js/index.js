window.addEventListener('DOMContentLoaded', function () {
    window.count = 1;
    let canvas = require('../components/canvas.js');
    let removeFrame = require('../components/removeFrame.js');
    let animate = require('../components/animate.js');
    let fullScreen = require('../components/fullScreen.js');
    canvas();
    removeFrame();
    animate();
    fullScreen();
});
