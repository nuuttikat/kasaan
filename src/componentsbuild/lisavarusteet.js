import React, { useState, useEffect } from 'react';
import './make.css';
import Popup from './popup';

// Tämä komponentti näyttää lisävarusteiden valinnan
function Lisavarusteet({ setSelected }) {
    const [selectedAccessories, setSelectedAccessories] = useState({}); // Tilamuuttuja valituille lisävarusteille
    const [popupImage, setPopupImage] = useState(null); // Tilamuuttuja popup-kuvalle

    // Lisävarusteiden valinnat
    const options = {
        'Nestelevitin.png': 'Nestelevitin',
        'Rakeidenlevitin.png': 'Rakeiden levitin'
    };

    // Käsittelee lisävarusteen valinnan
    const handleAccessoryClick = (image) => {
        setSelectedAccessories((prevSelectedAccessories) => {
            const selected = prevSelectedAccessories[image];
            const newAccessories = { ...prevSelectedAccessories, [image]: !selected };
            setSelected(Object.keys(newAccessories).filter(option => newAccessories[option]).map(option => options[option]));
            return newAccessories;
        });
    };

    // Päivittää valitut lisävarusteet aina kun selectedAccessories muuttuu
    useEffect(() => {
        setSelected(Object.keys(selectedAccessories).filter(option => selectedAccessories[option]).map(option => options[option]));
    }, [selectedAccessories, setSelected]);

    // Tarkistaa, onko lisävaruste valittu
    const isActive = (image) => !!selectedAccessories[image];

    // Hakee yhdistelmäkuvan valituista lisävarusteista
    const getCombinationImage = () => {
        const activeAccessories = Object.keys(selectedAccessories).filter(option => selectedAccessories[option]);

        if (activeAccessories.length === 2) {
            return 'lisavarusteet.png';
        }

        return activeAccessories[0];
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
        <div id="Lisavarusteet" className="yarbo-section">
            <div className="buttons-container">
                <div className="Lisavarusteet">
                    <h2>Lisävarusteet</h2>
                    <button onClick={() => handleAccessoryClick('Nestelevitin.png')} className={isActive('Nestelevitin.png') ? 'active' : ''}>
                        <span className="checkmark">{isActive('Nestelevitin.png') ? '✓' : '○'}</span>Nestelevitin
                    </button>
                    <a href="#Lisavarusteet" className="link-button" onClick={() => openPopup('./images/make/nli.jpg')}>Lisätietoa</a>
                    <button onClick={() => handleAccessoryClick('Rakeidenlevitin.png')} className={isActive('Rakeidenlevitin.png') ? 'active' : ''}>
                        <span className="checkmark">{isActive('Rakeidenlevitin.png') ? '✓' : '○'}</span>Rakeiden levitin
                    </button>
                    <a href="#Lisavarusteet" className="link-button" onClick={() => openPopup('./images/make/rli.jpg')}>Lisätietoa</a>
                </div>
            </div>
            <div className="image-display">
                {Object.keys(selectedAccessories).some(option => selectedAccessories[option]) && (
                    <img src={`./images/make/${getCombinationImage()}`} alt="Selected Accessory Combination" />
                )}
            </div>
            {popupImage && <Popup image={popupImage} onClose={closePopup} />}
        </div>
    );
}

export default Lisavarusteet;