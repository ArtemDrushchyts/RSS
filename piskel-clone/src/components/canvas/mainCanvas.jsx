import React from 'react';

import './mainCanvas.css';

const MainCanvas = () => {
    return (
        <div className="canvas">
            <canvas
                width="600"
                height="600"
                className="mainCanvas"
                id="mainCanvas">
            </canvas>
        </div>
    )
}

export default MainCanvas;