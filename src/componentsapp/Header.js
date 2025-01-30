import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Header.css';

// Tämä komponentti näyttää sivun yläosan, joka sisältää logon, otsikon ja sosiaalisen median ikonit
const Header = () => {
    return (
        <div className="header">
            <ul className="logo-container">
                <li>
                    <Link to="/">
                        <img src="./images/kasa/KasaanOylogo.png" alt="Logo" className="header-logo" />
                    </Link>
                </li>
            </ul>
            <div className="header-text-container">
                <h1 className="header-title">Kasaan Oy</h1>
                <p className="header-subtitle">Yarbo maahantuoja</p>
            </div>
            <div className="header-icons">
                <a
                    href="https://www.instagram.com/kasaanoy/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a
                    href="https://www.linkedin.com/company/kasaan-oy/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61568924945460"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
            </div>
        </div>
    );
};

export default Header;