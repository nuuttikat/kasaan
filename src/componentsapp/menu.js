import React, { useEffect } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

// Tämä komponentti näyttää navigointivalikon
const Menu = () => {
    useEffect(() => {
        const handleScroll = () => {
            const menu = document.querySelector('.menu');
            const placeholder = document.querySelector('.menu.placeholder');
            const headerHeight = document.querySelector('.header').offsetHeight;

            // Kiinnittää valikon yläreunaan, kun vieritys ylittää headerin korkeuden
            if (window.scrollY > headerHeight) {
                menu.classList.add('fixed');
                placeholder.style.display = 'block';
            } else {
                menu.classList.remove('fixed');
                placeholder.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Poistaa vieritystapahtuman kuuntelijan komponentin poistuessa
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="menu">
                <ul>
                    <li><Link to="/Contact">Yhteystiedot</Link></li> {/* Linkki yhteystiedot-sivulle */}
                    <li><a href="#lisatietoja">Lisätietoja</a></li> {/* Ankkurilinkki lisätietoja-osioon */}
                    <li><Link to="/Build">Suunnittele Yarbosi</Link></li> {/* Linkki suunnittelusivulle */}
                    <li><Link to="/TakuuPage">Takuu</Link></li> {/* Linkki takuusivulle */}
                </ul>
            </nav>
            <div className="menu placeholder"></div>
        </>
    );
};

export default Menu;