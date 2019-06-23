import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header class="header">

            <div className="nav-left">
                <a href="vk.com" className="menu-btn"><i className="fa fa-bars"></i></a>
            </div>

            <div className="nav-logo">
                <a href="vk.com">Piskel clone</a>
            </div>
            <div className="nav-right">
                <a href="vk.com">
                    <i className="fa fa-ellipsis-v"></i>
                </a>
            </div>
        </header>
    )
}

export default Header;