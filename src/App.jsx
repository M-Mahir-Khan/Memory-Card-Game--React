import React, { useState, useEffect } from "react";
import "./App.css";

const Card = ({ card, isFlipped, handleCardClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleCardClick(card.id)}
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
      </div>
    </div>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const initialCards = [
      { id: 1, value: "🍎" },
      { id: 2, value: "🍌" },
      { id: 3, value: "🍓" },
      { id: 4, value: "🍍" },
      { id: 5, value: "🍇" },
      { id: 6, value: "🍒" },
      { id: 7, value: "🍎" },
      { id: 8, value: "🍌" },
      { id: 9, value: "🍓" },
      { id: 10, value: "🍍" },
      { id: 11, value: "🍇" },
      { id: 12, value: "🍒" },
    ].sort(() => Math.random() - 0.5);

    setCards(initialCards);
  }, []);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || flippedCards.includes(id) || matchedCards.includes(id)) {
      return;
    }

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstId, secondId]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <button onClick={() => window.location.reload()}>Restart Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
