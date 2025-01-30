import React, { useState } from 'react';
import './make.css';
import Popup from './popup';

// Tämä komponentti näyttää Yarbocore-valinnan
function Core({ setSelected }) {
    const [selected, setLocalSelected] = useState(false); // Tilamuuttuja valitulle Yarbocorelle
    const [popupImage, setPopupImage] = useState(null); // Tilamuuttuja popup-kuvalle

    // Käsittelee painikkeen klikkauksen
    const handleButtonClick = () => {
        const newSelected = !selected;
        setLocalSelected(newSelected); // Päivittää paikallisen tilan
        setSelected(newSelected); // Päivittää pääkomponentin tilan
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
        <div className="yarbo-section core">
            <div className="buttons-container">
                <div className="core-options">
                    <h2>Yarbocore</h2>
                    <button
                        onClick={handleButtonClick}
                        className={selected ? 'active' : ''}
                    >
                        <span className="checkmark">{selected ? '✓' : '○'}</span>Yarbocore
                    </button>
                </div>
            </div>
            <div className="image-display">
                {selected && (
                    <img src="./images/make/core.png" alt="Yarbocore Option" />
                )}
            </div>
            {popupImage && <Popup image={popupImage} onClose={closePopup} />}
        </div>
    );
}

export default Core;