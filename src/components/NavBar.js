import React from 'react'
import '../App.css';
import logo from '../icons/logo.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
            <a className="logo" href="#"><img src={logo} alt="logo"/></a>
            <h1 className="site-name">Crypto Calculator</h1>
            </div>

        </div>
    )
}

export default NavBar
