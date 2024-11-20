import React from 'react';
import './section.css';

const sections = [
    {
        imgSrc: '/images/lumi/s1.jpg',
        title: 'Talven Sankari',
        text: `Pohjoisen ankarat talvet eivät ole enää ongelma Yarbo Lumilinko-moduulin ansiosta. Tämä tehokas lumilinko on suunniteltu pitämään pihasi ja ajotiesi puhtaana lumesta vaivattomasti. <strong>Yarbo Lumilinko pystyy poistamaan jopa 30 senttimetriä lunta ja heittämään sen jopa 2-16 metrin päähän</strong>. Älykäs robotti navigoi itsenäisesti ja siivoaa lumen tehokkaasti, jotta voit nauttia talvesta ilman lumitöiden vaivaa. <strong>Sen 36 V litiumioniakku varmistaa pitkän toiminta-ajan ja kestävyyden</strong>. lisäksi sinä voit ottaa auran käyttöön jonka ansiosta piha kuin piha tulee siistiksi. Anna Yarbon hoitaa lumityöt puolestasi ja keskity nauttimaan talven iloista!`
    },
    {
        imgSrc: '/images/ruoho/s2.png',
        title: 'Kesän Ystävä',
        text: `Pidä nurmikkosi aina viimeisen päälle huoliteltuna Yarbo Ruohonleikkuri-moduulin avulla. Tämä älykäs ruohonleikkuri hoitaa nurmikon leikkuun puolestasi, jotta voit viettää enemmän aikaa kesän iloista nauttien. <strong>Ruohonleikkuri-moduulin 50 cm leikkuuleveys ja säädettävä leikkuukorkeus (3 - 10 cm) takaavat tarkan ja tehokkaan leikkauksen</strong>. Tarkka leikkaus ja tehokas toiminta varmistavat, että nurmikkosi näyttää aina täydelliseltä. Yarbo tekee työn, jotta sinä voit nauttia kesästä huoletta!`
    },
    {
        imgSrc: '/images/lehti/professional/s3.jpg',
        title: 'Syksyn Pelastaja',
        text: `Syksyn lehdet eivät ole enää ongelma Yarbo Lehtipuhallin-moduulin ansiosta. Tämä innovatiivinen laite pitää pihasi siistinä ja lehtivapaana ilman, että sinun tarvitsee tehdä raskaita puutarhatöitä. <strong>Lehtipuhallin-moduuli tarjoaa jopa 305 km/h ilmavirran nopeuden ja 21,5 kuutiometrin/min ilmavirran tilavuuden</strong>, mikä tekee lehtien poistamisesta nopeaa ja tehokasta. Tehokas lehtipuhallin navigoi itsenäisesti ja poistaa lehdet nopeasti ja vaivattomasti. Anna Yarbon hoitaa syksyn lehtien puhdistus, jotta voit keskittyä nauttimaan vuodenajan kauneudesta.`
    }
];

const Sections = () => {
    return (
        <div className="sections-container">
            <div className="sections">
                {sections.map((section, index) => (
                    <div key={index} className="section">
                        <div className="section-image">
                            <img src={section.imgSrc} alt={`Kuva ${index + 1}`} />
                        </div>
                        <div className="section-text">
                            <h2 className="section-title">{section.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sections;