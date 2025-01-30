import React, { useState, useEffect } from 'react';
import './VideoPlayer.css';

// Tekstit, jotka näytetään kuvan
const texts = [
    { time: 8.3, text: 'Kesällä Nurmikon ylläpito\nei ole ollut koskaan näin helppoa.\n\nYarbo hoitaa nurmikon leikkuun puolestasi.', color: 'white', bgColor: 'rgba(0, 0, 0, 0.5)' },
    { time: 14.16, text: 'Säästä selkäsi haravoinnin tuottamasta\nkivusta, kun annat Yarbon hoitaa homman.', color: 'white', bgColor: 'rgba(0, 0, 0, 0.5)' }
];

// Tämä komponentti näyttää kuvan ja siihen liittyvät tekstit
const VideoPlayer = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // Tilamuuttuja nykyiselle tekstille

    // Päivittää tekstin ajastimen mukaan
    useEffect(() => {
        const textTimer = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, texts[currentTextIndex].time * 1000);

        return () => clearInterval(textTimer); // Tyhjentää ajastimen komponentin poistuessa
    }, [currentTextIndex]);

    return (
        <div className="video-container">
            <img
                src="./images/etukuva.jpg" // Oikea suhteellinen polku kuvaan public-kansiossa
                alt="Etukuva"
                className="etukuva"
            />
            <div className="video-text" style={{
                color: texts[currentTextIndex].color,
                backgroundColor: texts[currentTextIndex].bgColor,
            }}>
                {texts[currentTextIndex].text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line === "" ? (
                            <p style={{ margin: 0 }}>&nbsp;</p> // Renderöi tyhjän kappaleen välilyönnillä
                        ) : (
                            <p style={{ margin: 0 }}>{line}</p>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;