import React from 'react';
import Button from '../Button/Button';

import './frame.css';

const Frame = () => {

    return (
        <div className="frame-wrapp">
            <ul className="frame-list">
                <li className="frame-list-item frame active" id="frame_0" draggable="true">
                    <button class="copyBtn framesButtons" id="copyButton"></button>
                    <button class="deleteBtn framesButtons" id="deleteButton"></button>
                </li>
            </ul>
            <Button name="Add new frame" classN="frameBtn" />
        </div>
    )
}

export default Frame;