import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; // Päivitä polku tarvittaessa

const videoSrc = '/videos/etusivu.mp4';

const texts = [
    { time: 5, text: 'Yarbo on rantautunut Suomeen!\nOta yhteyttä ja tutustu\nYarbo hoitaa kaiken tämän sinun puolesta.', color: 'black', bgColor: 'rgba(255, 255, 255, 0.5)' },
    { time: 14.5, text: 'Yarbo 4 in 1 ratkaisu.\n\nYarbo core, lumilinko,\nruohonleikkuri ja lehtipuhallin.', color: 'white', bgColor: 'rgba(0, 0, 0, 0.5)' },
    { time: 15.5, text: 'Nauti vihdoin lumisesta säästä.\n\nYarbo hoitaa lumen linkoamisen,\nkun nautit lumesta.', color: 'black', bgColor: 'rgba(255, 255, 255, 0.5)' },
    { time: 8.3, text: 'Kesällä Nurmikon ylläpito\nei ole ollut koskaan näin helppoa.\n\nYarbo hoitaa nurmikon leikkuun puolestasi.', color: 'white', bgColor: 'rgba(0, 0, 0, 0.5)' },
    { time: 14.16, text: 'Säästä selkäsi haravoinnin tuottamasta\nkivusta, kun annat Yarbon hoitaa homman.', color: 'white', bgColor: 'rgba(0, 0, 0, 0.5)' }
];

const VideoPlayer = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const textTimer = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, texts[currentTextIndex].time * 1000);

        return () => clearInterval(textTimer);
    }, [currentTextIndex]);

    useEffect(() => {
        const handleEnded = () => {
            setCurrentTextIndex(0);
            videoRef.current.play();  // loop video
        };

        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleEnded);
            videoRef.current.addEventListener('contextmenu', handleContextMenu);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', handleEnded);
                videoRef.current.removeEventListener('contextmenu', handleContextMenu);
            }
        };
    }, []);

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                controls={false}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-text" style={{
                color: texts[currentTextIndex].color,
                backgroundColor: texts[currentTextIndex].bgColor,
            }}>
                {texts[currentTextIndex].text.split('\n').map((line, index, array) => (
                    <React.Fragment key={index}>
                        {line === "" ? (
                            <p style={{ margin: 0 }}>&nbsp;</p> // Render an empty paragraph with a space
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
