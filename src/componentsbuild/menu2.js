import React, { useEffect } from 'react';
import './menu2.css';
import { Link } from "react-router-dom";

// Tämä komponentti näyttää navigointivalikon
const Menu2 = () => {
    useEffect(() => {
        const handleScroll = () => {
            const menuElement = document.querySelector('.menu2');
            const placeholder = document.querySelector('.menu2.placeholder');

            if (window.scrollY > 50) {
                menuElement.classList.add('fixed');
                placeholder.style.display = 'block';
            } else {
                menuElement.classList.remove('fixed');
                placeholder.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (event, sectionId) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.menu2').offsetHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <nav className="menu2">
                <ul>
                    <li><Link to="/"><strong>Etusivu</strong></Link></li>
                    <li><Link to="/Contact"><strong>Yhteydenotto</strong></Link></li>
                    <li><Link to="/TakuuPage"><strong>Takuu</strong></Link></li>
                    <li><a href="#Make" onClick={(e) => handleLinkClick(e, '#Make')}>Moduulit</a></li>
                    <li><a href="#Liitteet" onClick={(e) => handleLinkClick(e, '#Liitteet')}>Liitännät</a></li>
                    <li><a href="#Lisavarusteet" onClick={(e) => handleLinkClick(e, '#Lisavarusteet')}>Lisävarusteet</a></li>
                    <li><a href="#Prices" onClick={(e) => handleLinkClick(e, '#Prices')}>Hinnat</a></li>
                </ul>
            </nav>
            <div className="menu2 placeholder"></div>
        </>
    );
};

export default Menu2;