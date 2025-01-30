import React from 'react';
import './Warranty.css';

// Tämä komponentti näyttää ensimmäisen takuutiedot taulukossa
export default function Warranty() {
  const data = [
    {
      item: "Moottorijärjestelmä",
      parts: ["Lineaarinen toimilaite", "Ajamismoottori"],
      warranty: "2 vuotta",
    },
    {
      item: "Virtajärjestelmä",
      parts: ["Litiumioniakku", "Virtalähde", "Telakointiasema"],
      warranty: "2 vuotta",
    },
    {
      item: "Sähköinen ohjausjärjestelmä",
      parts: ["RTK-järjestelmä", "Emolevy"],
      warranty: "2 vuotta",
    },
    {
      item: "Anturi",
      parts: ["Kamera", "Millimetriaaltotutka"],
      warranty: "2 vuotta",
    },
    {
      item: "Kulutustavarat",
      parts: ["Kuori", "Telat", "Voiteluaineet"],
      warranty: ["1 vuosi", "1 vuosi", "Ei takuuta"],
    },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Tuote</th>
            <th>Osat</th>
            <th>Takuuaika</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            row.parts.map((part, partIndex) => (
              <tr key={`${index}-${partIndex}`} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                {partIndex === 0 && (
                  <td rowSpan={row.parts.length} className="p-2 border font-semibold">
                    {row.item}
                  </td>
                )}
                <td className="p-2 border">{part}</td>
                <td className="p-2 border">
                  {Array.isArray(row.warranty) ? row.warranty[partIndex] : row.warranty}
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}