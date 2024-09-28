import React from 'react';
import './navBar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
const NavBar = () => {
  return (
    <nav className="navBar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="desktopMenu">

            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Client</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>

        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default NavBar