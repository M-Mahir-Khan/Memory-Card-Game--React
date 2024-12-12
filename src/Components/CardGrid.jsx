import React from "react";
import Card from "./Card";
import "./CardGrid.css";

const CardGrid = ({ cards, flippedCards, matchedCards, handleCardClick }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isFlipped={
            flippedCards.some((flipped) => flipped.id === card.id) ||
            matchedCards.includes(card.id)
          }
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default CardGrid;
