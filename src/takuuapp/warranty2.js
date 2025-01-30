import React from 'react';
import './Warranty.css';

// Tämä komponentti näyttää toisen takuutiedot taulukossa
export default function Warranty2() {
  const data = [
    {
      item: "Moottorijärjestelmä",
      parts: ["Ruuvin/Siipipyörän moottori", "Kourun kiertomoottori", "Heittimen moottori"],
      warranty: "2 vuotta",
    },
    {
      item: "Anturi",
      parts: ["Kamera"],
      warranty: "2 vuotta",
    },
    {
      item: "Kulutustavarat",
      parts: [
        "Liukukengät", "Yläkouru", "Siipipyörä", "Kuori", 
        "Ruuvin terät", "Hihnat", "Kaavin"
      ],
      warranty: ["1 vuosi", "1 vuosi", "1 vuosi", "1 vuosi", "90 päivää", "90 päivää", "Ei takuuta"],
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