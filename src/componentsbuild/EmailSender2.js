import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../componentscontact/EmailSender.css';

// Tämä komponentti lähettää sähköpostin valituilla osilla
const EmailSender2 = ({ selectedModules }) => {
    const form = useRef(); // Viittaus lomakkeeseen

    // Päivittää viestikentän valituilla osilla aina kun selectedModules muuttuu
    useEffect(() => {
        if (form.current) {
            form.current.elements.message.value = `Valitut osat: ${selectedModules.join(', ')}`;
        }
    }, [selectedModules]);

    // Käsittelee sähköpostin lähetyksen
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_28112024', 'template_tpru27a', form.current, 'L4M6jh_xRukKF_ap3')
            .then((result) => {
                console.log(result.text);
                alert('Viesti lähetetty onnistuneesti!');
            }, (error) => {
                console.log(error.text);
                alert('Viestiä ei voitu lähettää.');
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Nimi</label>
            <input type="text" name="name" required />

            <label>Sähköposti</label>
            <input type="email" name="email" required />

            <label>Puhelinnumero</label>
            <input type="tel" name="phone" required />

            <label>Viesti</label>
            <textarea name="message" required defaultValue={`Valitut osat: ${selectedModules.join(', ')}`} />

            <input type="submit" value="Lähetä tarjous pyyntö" />
        </form>
    );
};

export default EmailSender2;