import React, { useState, useEffect } from "react";

const Manter = () => {
  const sentences = [
    "Om Namah Shivaay!",
    "Shree Hanumate Namah!",
    "Om Gan Ganpataye Namah!",
    "Om Namo Bhagavate Vasudevaya!",
    "Om Shri Durgaye Namah!",
    "Om Sham Shanicharaya Namah!",
    "Om Shri Suryaya Namah",
  ];

  const [randomSentence, setRandomSentence] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setRandomSentence(sentences[randomIndex]);
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <p className="text-2xl text-primary font-bold">{randomSentence}</p>
    </div>
  );
};

export default Manter;
