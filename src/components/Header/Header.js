import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt='' />
                <nav>
                    <a href='/shop'>Shop</a>
                    <a href='/orders'>Orders</a>
                    <a href='/inventory'>Inventory</a>
                    <a href='/abot'>About</a>
                </nav>
            </div>
        </div>

    );
};

export default Header;