import React from 'react';

// Tämä komponentti näyttää korjatun tuotteen palautuslausunnon
const RepairedProductReturnStatement = () => (
    <>
        <h2>Korjatun tuotteen palautuslausunto</h2>
        <ol>
            <li>
                Jos toimitusta varten annetut tiedot ovat puutteellisia ja johtavat epäonnistuneeseen toimitusyritykseen, Yarbo pyrkii ottamaan sinuun yhteyttä saadakseen tarvittavat osoite- tai muut olennaiset tiedot toimituksen onnistumiseksi.
            </li>
            <li>
                Jos et toimita Yarbolle tai sen valtuutetulle edustajalle sopivaa osoitetta tuotteen toimittamiseksi, tai jos et toimita olennaisia tietoja, joita tarvitaan toimitusmääräysten noudattamiseksi, tai jos maksujärjestelyjä ei tehdä yhdeksänkymmenen (90) päivän kuluessa ensimmäisestä toimitusyrityksestä, Yarbo ilmoittaa sinulle virallisesti tuotteen luokittelusta hylätyksi. Tämä ilmoitus lähetetään aiemmin antamaasi postiosoitteeseen, kun valtuutit palvelun.
            </li>
            <li>
                Jos tuotteesi katsotaan hylätyksi, Yarbo pidättää oikeuden hävittää tuotteen sovellettavien lakisääteisten määräysten mukaisesti. Erityisesti Yarbo voi valita myydä tuotteen yksityisellä tai julkisella myynnillä kattamaan mahdolliset palvelukustannukset.
            </li>
            <li>
                Yarbo pidättää oikeuden vedota lakisääteisiin ja muihin laillisiin panttioikeuksiinsa maksamattomista maksuista. Tämä sisältää, mutta ei rajoitu, kohtuullisiin varastointimaksuihin, jotka lasketaan enintään 30 dollarin päivähintaan.
            </li>
            <li>
                Tämä takuu voidaan menettää, jos tuotetta on käytetty väärin, väärinkäytetty, laiminlyöty, muutettu, muokattu tai millään tavalla luvattomasti muutettu.
            </li>
        </ol>
    </>
);

export default RepairedProductReturnStatement;