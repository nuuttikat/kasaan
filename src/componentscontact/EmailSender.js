import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './EmailSender.css';

// Tämä komponentti lähettää sähköpostin
const EmailSender = () => {
    const form = useRef();

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
            <input type="text" name="name" required/>
            <label>Sähköposti</label>
            <input type="email" name="email" required/>
            <label>Puhelinnumero</label>
            <input type="tel" name="phone" required/>
            <label>Viesti</label>
            <textarea name="message" required/>
            <input type="submit" value="Lähetä"/>
        </form>
    );
};

export default EmailSender;