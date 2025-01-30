import React from 'react';
import Menu3 from "./menu3";
import Contact from "./contact";
import EmailSender from "./EmailSender";

// Tämä komponentti näyttää kontaktisivun
const ContactPage = () => {
    return (
        <div>
            <Menu3/>
            <Contact/>
            <EmailSender/>
        </div>
    );
}

export default ContactPage;