import React from 'react';
import './prices.css';

const prices = [
    { name: 'Yarbo Core (Runko + Suojus + Akku + Telakointiasema)', price: '5 879 €' },
    { name: 'Lumilingon moduuli', price: '2 379 €' },
    { name: 'Ruohonleikkurin moduuli', price: '1 629 €' },
    { name: 'Puhaltimen moduuli', price: '1 499 €' },
    { name: 'Yarbo Lumilinko', price: '8 258 €' },
    { name: 'Yarbo Ruohonleikkuri', price: '7 508 €' },
    { name: 'Yarbo Puhallin', price: '7 378 €' },
    { name: 'Yarbo Lumilinko + Ruohonleikkuri', price: '9 887 €' },
    { name: 'Yarbo Lumilinko + Puhallin', price: '9 757 €' },
    { name: 'Yarbo Ruohonleikkuri + Puhallin', price: '9 007 €' },
    { name: 'Yarbo 4-in-1 Piharobotti', price: '11 386 €' }
];

const Prices = () => {
    return (
        <div className="prices-container">
            <h1>Hinnasto</h1>
            <table className="prices-table">
                <thead>
                <tr>
                    <th>Tuotteen nimi</th>
                    <th>Hinta</th>
                </tr>
                </thead>
                <tbody>
                {prices.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Prices;
