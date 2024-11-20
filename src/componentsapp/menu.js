import React, { useEffect } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    useEffect(() => {
        const handleScroll = () => {
            const menu = document.querySelector('.menu');
            const placeholder = document.querySelector('.menu.placeholder');
            const headerHeight = document.querySelector('.header').offsetHeight;

            // Tarkistetaan onko skrollattu headerin ohi
            if (window.scrollY > headerHeight) {
                menu.classList.add('fixed');
                placeholder.style.display = 'block';
            } else {
                menu.classList.remove('fixed');
                placeholder.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Tyhjä riippuvuuslista, jotta effectia ajetaan vain kerran

    return (
        <>
            <nav className="menu">
                <ul>
                    <li><a href="#esivu">Etusivu</a></li>
                    <li><a href="#yhteystiedot">Yhteystiedot</a></li>
                    <li><a href="#lisatietoja">Lisätietoja</a></li>
                    <li><Link to="/Build">Rakenna omasi</Link></li>
                </ul>
            </nav>
            <div className="menu placeholder"></div>
        </>
    );
};

export default Menu;
