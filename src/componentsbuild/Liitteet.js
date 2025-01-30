import React, { useState, useEffect } from 'react';
import './make.css';
import Popup from './popup';

// Tämä komponentti näyttää liitännät ja niiden valinnat
function Liitteet({ setSelected }) {
    const [selectedOptions, setSelectedOptions] = useState({}); // Tilamuuttuja valituille liitännöille
    const [popupImage, setPopupImage] = useState(null); // Tilamuuttuja popup-kuvalle

    // Liitännät ja niiden nimet
    const options = {
        'blade.jpg': 'Aura',
        'battery.jpg': 'Akku',
        'koukku.jpg': 'Vetokoukku'
    };

    // Käsittelee liitännän valinnan
    const handleOptionClick = (image) => {
        setSelectedOptions((prevSelectedOptions) => {
            const onClick = prevSelectedOptions[image];
            const newOptions = { ...prevSelectedOptions, [image]: !onClick };
            setSelected(Object.keys(newOptions).filter(option => newOptions[option]).map(option => options[option]));
            return newOptions;
        });
    };

    // Päivittää valitut liitännät aina kun selectedOptions muuttuu
    useEffect(() => {
        setSelected(Object.keys(selectedOptions).filter(option => selectedOptions[option]).map(option => options[option]));
    }, [selectedOptions, setSelected]);

    // Tarkistaa, onko liitäntä valittu
    const isActive = (image) => !!selectedOptions[image];

    // Hakee yhdistelmäkuvan valituista liitännöistä
    const getCombinationImage = () => {
        const activeOptions = Object.keys(selectedOptions).filter(option => selectedOptions[option]);

        if (activeOptions.includes('blade.jpg') && activeOptions.includes('battery.jpg') && activeOptions.includes('koukku.jpg')) {
            return 'lisat.jpg';
        } else if (activeOptions.includes('blade.jpg') && activeOptions.includes('battery.jpg')) {
            return 'batteryblade.jpg';
        } else if (activeOptions.includes('blade.jpg') && activeOptions.includes('koukku.jpg')) {
            return 'koukkublade.jpg';
        } else if (activeOptions.includes('battery.jpg') && activeOptions.includes('koukku.jpg')) {
            return 'batterykoukku.jpg';
        }

        return activeOptions[0];
    };

    // Avaa popup-ikkunan
    const openPopup = (image) => {
        setPopupImage(image);
    };

    // Sulkee popup-ikkunan
    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div id="Liitteet" className="yarbo-section">
            <div className="buttons-container">
                <div className="Liitteet">
                    <h2>Liitännät</h2>
                    <button onClick={() => handleOptionClick('blade.jpg')} className={isActive('blade.jpg') ? 'active' : ''}>
                        <span className="checkmark">{isActive('blade.jpg') ? '✓' : '○'}</span>Aura
                    </button>
                    <a href="#Liitteet" className="link-button" onClick={() => openPopup('./images/make/bi.jpg')}>Lisätietoa</a>
                    <button onClick={() => handleOptionClick('battery.jpg')} className={isActive('battery.jpg') ? 'active' : ''}>
                        <span className="checkmark">{isActive('battery.jpg') ? '✓' : '○'}</span>Akku
                    </button>
                    <button onClick={() => handleOptionClick('koukku.jpg')} className={isActive('koukku.jpg') ? 'active' : ''}>
                        <span className="checkmark">{isActive('koukku.jpg') ? '✓' : '○'}</span>Vetokoukku
                    </button>
                    <a href="#Liitteet" className="link-button" onClick={() => openPopup('./images/make/ki.jpg')}>Lisätietoa</a>
                </div>
            </div>
            <div className="image-display">
                {Object.keys(selectedOptions).some(option => selectedOptions[option]) && (
                    <img src={`./images/make/${getCombinationImage()}`} alt="Selected Option" />
                )}
            </div>
            {popupImage && <Popup image={popupImage} onClose={closePopup} />}
        </div>
    );
}

export default Liitteet;