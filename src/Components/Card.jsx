import React from "react";
import "./Card.css";

const Card = ({ card, isFlipped, handleCardClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleCardClick(card.id)}
    >
      <div className="card-inner">
        <div className="card-front">{card.value}</div>
        <div className="card-back">?</div>
      </div>
    </div>
  );
};

export default Card;
