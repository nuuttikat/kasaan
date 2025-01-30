import React, { useEffect } from 'react';
import './menu3.css';
import { Link } from "react-router-dom";

// Tämä komponentti näyttää navigointivalikon
const Menu3 = () => {
    useEffect(() => {
        const handleScroll = () => {
            const menu3 = document.querySelector('.menu3');
            const placeholder = document.querySelector('.menu3.placeholder');

            if (window.scrollY > 50) {
                menu3.classList.add('fixed');
                placeholder.style.display = 'block';
            } else {
                menu3.classList.remove('fixed');
                placeholder.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="menu3">
                <ul>
                    <li><Link to="/"><strong>Etusivu</strong></Link></li>
                    <li><Link to="/Build">Suunnittele Yarbosi</Link></li>
                    <li><Link to="/TakuuPage">Takuu</Link></li>
                </ul>
            </nav>
            <div className="menu3 placeholder"></div>
        </>
    );
};

export default Menu3;