import React from 'react';
import './contact.css';

const contacts = [
    {
        imgSrc: '/images/contact/person1.jpg',
        name: 'Nuutti Katajala',
        position: 'Myyjä',
        phone: '040 963 7738',
        email: 'Nuutti.Katajala@Kasaan.fi'
    },
    {
        imgSrc: '/images/contact/person2.jpg',
        name: 'Valtteri Katajala',
        position: 'Myyjä',
        phone: '045 255 9455',
        email: 'valtteri.katajala@Kasaan.fi'
    },
    {
        imgSrc: '/images/antti.jpg',
        name: 'Antti Katajala',
        position: 'Toimitusjohtaja',
        phone: '040 8652951',
        email: 'antti.katajala@Kasaan.fi'
    }
];

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