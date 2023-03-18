import React from "react";
import './Navbar.css';
import { FaGithubSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar=()=>{
    return(
        <>
            <nav className="main-nav">
                <div className="logo">
                    <p>
                        <span>D</span>opamine.
                        <span>D</span>ev
                    </p>
                </div>

                <div className="menu-link">
                    <ul type='none'>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About</a>
                        </li>
                        <li>
                            <a href='/'>Service</a>
                        </li>
                        <li>
                            <a href='/'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop" type='none'>
                        <li>
                            <a href='/' target='_blank'><FaLinkedinIn/></a>
                           
                            
                        </li>
                        <li>
                        <a href='/' target='_blank'><FaGithubSquare/></a>
                        </li>
                        <li>
                        <a href='/' target='_blank'><FaInstagramSquare/></a>
                        </li>
                    </ul>
                        <div className="hamburger-menu">
                            <a href='/'><GiHamburgerMenu/></a>
                            
                        </div>
                </div>
                
            </nav>

            {/* hero-section */}
            <div className="hero">
                <h1>Hey Buddy, Welcome to<br/>Dopamine.Dev</h1>
                
                
            </div>
        </>
    )
}

export default Navbar;
