import React from 'react';

// Tämä komponentti näyttää yleisen lausunnon
const GeneralStatement = () => (
    <>
        <h2>Yleinen lausunto</h2>
        <ol>
            <li>
                Yarbo Inc. ei ole vastuussa korvauksista, jos se voi todistaa jonkin seuraavista olosuhteista: (1) Tuotetta ei ole saatettu kiertoon; (2) Kun tuote saatetaan kiertoon, vahingon aiheuttavaa vikaa ei vielä ole olemassa; ja (3) Kun tuote saatetaan kiertoon, tieteellinen ja teknologinen taso ei vielä pysty havaitsemaan vikojen olemassaoloa.
            </li>
            <li>
                Takuupalvelu on voimassa tuotteen toimituspäivästä alkaen. Jälkimarkkinapalvelua pyydettäessä palvelutiimimme tai valtuutettu huoltoliike voi vaatia alkuperäistä laskua tai kuittia, joka sisältää asiaankuuluvat tiedot. Ostopaikan todistuksen puuttuessa takuu alkaa tuotteen valmistuspäivästä.
            </li>
            <li>
                Tämä takuu koskee yksinomaan alkuperäisiä ostajia. Korvaukset eivät aloita uutta takuuta; alkuperäinen takuu pysyy voimassa alkuperäisestä toimituspäivästä alkaen. On tärkeää huomata, että saatat olla vastuussa tuotteen palautukseen, korjaukseen tai vaihtoon liittyvistä toimituskuluista.
            </li>
            <li>
                Yarbo suorittaa palautetun tuotteen diagnostiikka-arvion. Jos viallinen tuote vastaa rajoitetun takuukäytäntömme ehtoja, Yarbo kattaa korjauksen tai vaihdon kustannukset. Saatat kuitenkin olla vastuussa toimituskuluista.
            </li>
            <li>
                Yarbo ei ole vastuussa mistään suorista tai epäsuorista seurauksista, jotka johtuvat mistä tahansa syystä, mukaan lukien mutta ei rajoittuen käytön menetykseen tai voiton menetykseen.
            </li>
            <li>
                Huomaa, että kaikki vahingot, jotka johtuvat epäasianmukaisesta pakkauksesta, joka ei ole Yarbon standardipakkaus, ovat asiakkaan vastuulla. Jos sinulla ei enää ole alkuperäistä pakkausta, sinun on hankittava sopiva pakkaus tai neuvoteltava Yarbon teknikoiden kanssa asianmukaisesta pakkausohjeesta.
            </li>
        </ol>
    </>
);

export default GeneralStatement;