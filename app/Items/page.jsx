// import React from "react";

const items = [
  "RTX 4070 Super",
  "RX 7900 XT", // Corrected typo
  "RTX 4070",
  "RTX 4090",
  "RX 7900 XTX",
  "RTX 4060",
  "RX 7900 XT",
  "ARC A750",
  "ARC A770",
];

function itemsPage() {
  return (
    <ol>
      {items.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ol>
  );
}

export default itemsPage;
