import React from "react";

function FoodCard({ item, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="food-card">
      <div className="food-details">
        <span className="food-name">{item.name}</span>
        <span className="food-price">{item.price} EGP</span>
      </div>

      <div className="food-actions">
        <button className="btn add-btn" onClick={onIncrement}>
          ➕
        </button>
        <span className="total-number">{item.amount}</span>
        <button className="btn remove-btn" onClick={onDecrement}>
          ➖
        </button>
        <button className="btn remove-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
