import React from 'react';
import './contact.css';

// Kontaktitiedot
const contacts = [
    {
        imgSrc: '/images/nuutti.jpg',
        name: 'Nuutti Katajala',
        position: 'Myyjä',
        phone: '+358 40 963 7738',
        email: 'Nuutti.Katajala@Kasaan.fi'
    },
    {
        imgSrc: '/images/valtteri.png',
        name: 'Valtteri Katajala',
        position: 'Myyjä',
        phone: '+358 45 255 9455',
        email: 'valtteri.katajala@Kasaan.fi'
    },
    {
        imgSrc: '/images/antti.jpg',
        name: 'Antti Katajala',
        position: 'Toimitusjohtaja',
        phone: '+358 40 8652951',
        email: 'antti.katajala@Kasaan.fi'
    }
];

// Tämä komponentti näyttää kontaktitiedot
const Contact = () => {
    return (
        <div className="contacts-container">
            <div className="contacts">
                {contacts.map((contact, index) => (
                    <div key={index} className="contact">
                        <div className="contact-image">
                            <img src={contact.imgSrc} alt={`Kuva ${contact.name}`} />
                        </div>
                        <div className="contact-text">
                            <h2 className="contact-title">{contact.name}</h2>
                            <p>{contact.position}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;