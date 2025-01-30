import React, { useState } from 'react';
import Menu2 from './menu2';
import Make from './make';
import Liitteet from './Liitteet';
import Prices from './prices';
import Core from './core';
import Lisavarusteet from './lisavarusteet';
import EmailSender2 from './EmailSender2';

// Tämä komponentti näyttää rakennussivun
const BuildPage = () => {
    const [coreSelected, setCoreSelected] = useState(false);
    const [makeSelected, setMakeSelected] = useState([]);
    const [liitteetSelected, setLiitteetSelected] = useState([]);
    const [lisavarusteetSelected, setLisavarusteetSelected] = useState([]);

    // Kerää kaikki valitut osat yhteen listaan
    const combinedSelections = [
        coreSelected ? 'Yarbocore' : null,
        ...makeSelected,
        ...liitteetSelected,
        ...lisavarusteetSelected
    ].filter(Boolean); // Poistaa kaikki epätodeksi arvot listalta

    return (
        <div>
            <Menu2 />
            <div id="Core">
                <Core setSelected={setCoreSelected} />
            </div>
            <div id="Make">
                <Make setSelected={setMakeSelected} />
            </div>
            <div id="Lisaosat">
                <Liitteet setSelected={setLiitteetSelected} />
            </div>
            <div id="Lisavarusteet">
                <Lisavarusteet setSelected={setLisavarusteetSelected} />
            </div>
            <EmailSender2 selectedModules={combinedSelections} />
            <div id="Prices">
                <Prices />
            </div>
        </div>
    );
};

export default BuildPage;