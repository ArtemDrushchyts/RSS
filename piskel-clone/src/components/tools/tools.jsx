import React from 'react';
import './tools.css';

const Tools = () => {

    return (
        <div className="col-1 tools-wrapper">
            <ul className="tool-list">
                <li className="tool pen"></li>
                <li className="tool bucket"></li>
                <li className="tool stroke"></li>
                <li className="tool Eraser"></li>
            </ul>
        </div>
    )
}

export default Tools;