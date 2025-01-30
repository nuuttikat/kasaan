import React from 'react';
import './popupStyles.css';

// Tämä komponentti näyttää popup-ikkunan
const Popup = ({ image, onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <img src={image} alt="Lisätietoa" />
                <button onClick={onClose} className="close-button">X</button>
            </div>
        </div>
    );
};

export default Popup;