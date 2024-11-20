import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="./images/kasa/KasaanOylogo.png" alt="Logo" className="header-logo" />
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