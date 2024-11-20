import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Muista päivittää polku tarvittaessa

const Footer = () => {
    const [instagram, setInstagram] = useState('instagram-kasaanoy');
    const [linkedin, setLinkedin] = useState('linkedin-Kasaan Oy');
    const [facebook, setFacebook] = useState('facebook-Kasaan Oy');

    return (
        <footer className="footer">
            <div className="footer-icons">
                <span className="footer-text-label">somet</span>
                <div className="footer-icon-text">
                    <a
                        href="https://www.instagram.com/kasaanoy/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/kasaanoy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-caption-link">
                        {instagram}
                    </a>
                </div>
                <div className="footer-icon-text">
                    <a
                        href="https://www.linkedin.com/company/kasaan-oy/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/kasaan-oy/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-caption-link">
                        {linkedin}
                    </a>
                </div>
                <div className="footer-icon-text">
                    <a
                        href="https://www.facebook.com/profile.php?id=61568924945460"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61568924945460"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-caption-link">
                        {facebook}
                    </a>
                </div>
            </div>
            <div className="footer-text">
                <p className="footer-email">info@kasaan.fi</p>
            </div>
        </footer>
    );
};

export default Footer;