import React, { useState, useEffect } from 'react';
import './make.css';
import Popup from './popup';

// Tämä komponentti näyttää moduulien valinnan
function Make({ setSelected }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [popupImage, setPopupImage] = useState(null);

    // Moduulien valinnat
    const options = {
        'productl.jpg': 'Lumilinko',
        'productn.jpg': 'Nurmikonleikkuri',
        'productle.jpg': 'Lehtipuhallin'
    };

    // Käsittelee moduulin valinnan
    const handleOptionClick = (image) => {
        setSelectedOptions((prevSelectedOptions) => {
            const newOptions = prevSelectedOptions.includes(image)
                ? prevSelectedOptions.filter(option => option !== image)
                : [...prevSelectedOptions, image];
            setSelected(newOptions.map(option => options[option]));
            return newOptions;
        });
    };

    // Päivittää valitut moduulit
    useEffect(() => {
        setSelected(selectedOptions.map(option => options[option]));
    }, [selectedOptions, setSelected]);

    // Tarkistaa, onko moduuli valittu
    const isActive = (image) => selectedOptions.includes(image);

    // Hakee yhdistelmäkuvan valituista moduuleista
    const getCombinationImage = () => {
        if (selectedOptions.includes('productl.jpg') && selectedOptions.includes('productn.jpg') && selectedOptions.includes('productle.jpg')) {
            return 'productlnl.jpg';
        } else if (selectedOptions.includes('productl.jpg') && selectedOptions.includes('productn.jpg')) {
            return 'productln.jpg';
        } else if (selectedOptions.includes('productl.jpg') && selectedOptions.includes('productle.jpg')) {
            return 'productlle.jpg';
        } else if (selectedOptions.includes('productn.jpg') && selectedOptions.includes('productle.jpg')) {
            return 'productnle.jpg';
        }
        return selectedOptions[0];
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
        <div className="yarbo-section">
            <div className="buttons-container">
                <div className="moduls">
                    <h2>Modulit</h2>
                    <button onClick={() => handleOptionClick('productl.jpg')} className={isActive('productl.jpg') ? 'active' : ''}>
                        <span className="checkmark">{isActive('productl.jpg') ? '✓' : '○'}</span>Lumilinko
                    </button>
                    <a href="#Make" className="link-button" onClick={() => openPopup('./images/make/li.jpg')}>Lisätietoa</a>
                    <button onClick={() => handleOptionClick('productn.jpg')} className={isActive('productn.jpg') ? 'active' : ''}>
                        <span className="checkmark">{isActive('productn.jpg') ? '✓' : '○'}</span>Nurmikonleikkuri
                    </button>
                    <a href="#Make" className="link-button" onClick={() => openPopup('./images/make/ni.jpg')}>Lisätietoa</a>
                    <button onClick={() => handleOptionClick('productle.jpg')} className={isActive('productle.jpg') ? 'active' : ''}>
                        <span className="checkmark">{isActive('productle.jpg') ? '✓' : '○'}</span>Lehtipuhallin
                    </button>
                    <a href="#Make" className="link-button" onClick={() => openPopup('./images/make/lei.jpg')}>Lisätietoa</a>
                </div>
            </div>
            <div className="image-display">
                {selectedOptions.length > 0 && (
                    <img src={`./images/make/${getCombinationImage()}`} alt="Selected Option" />
                )}
            </div>
            {popupImage && <Popup image={popupImage} onClose={closePopup} />}
        </div>
    );
}

export default Make;