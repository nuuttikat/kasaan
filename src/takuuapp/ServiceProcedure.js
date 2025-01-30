import React from 'react';

// Tämä komponentti näyttää palvelumenettelyn vaiheet
const ServiceProcedure = () => (
    <>
        <h2>Palvelumenettely</h2>
        <ol>
            <li>
                Aloittaaksesi takuuhuoltopyynnön, käy takuuhuoltosivustollamme osoitteessa www.kasaan.fi. Seuraa ohjeita palvelupyynnön lähettämiseksi. Vaihtoehtoisesti voit ottaa yhteyttä paikalliseen huoltotiimiimme tai valtuutettuun huoltoliikkeeseen helpottaaksesi takuuhuoltomenettelyä.
            </li>
            <li>
                Tekninen tukitiimimme on käytettävissä auttamaan sinua etänä. He pyrkivät diagnosoimaan ja ratkaisemaan pienet ongelmat, jotka voivat johtaa tuotteen toimintahäiriöihin. Ota meihin yhteyttä puhelimitse, sähköpostitse tai verkkokeskustelun kautta saadaksesi ohjeita tuotteen toimivuuden ylläpitämiseksi.
            </li>
            <li>
                Jos ongelma jatkuu verkkotuen jälkeen, tekniset asiantuntijamme voivat pyytää sinua täyttämään korjauslomakkeen. Tämä käynnistää viallisen tuotteen palautusprosessin Yarbolle perusteellista tarkastusta varten.
            </li>
            <li>
                Yarbo pyrkii korjaamaan tai vaihtamaan tuotteen tämän rajoitetun takuun ehtojen mukaisesti. Jos tuotteet täyttävät rajoitetun takuukäytännön ehdot, korjauksesta tai vaihdosta ei aiheudu kustannuksia.
            </li>
        </ol>
    </>
);

export default ServiceProcedure;