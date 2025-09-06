import React from "react";
  

function FoodCard({ item, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="food-card">
      <div className="food-details">
        <h3 className="food-name">{item.name}</h3>
      </div>

      <div className="food-actions">
        <button className="btn increment" onClick={onIncrement}>
          ➕
        </button>
        <span className="food-amount">{item.amount}</span>
        <button className="btn decrement" onClick={onDecrement}>
          ➖
        </button>
      </div>

      <button className="btn delete" onClick={onDelete}>
         حذف
      </button>
    </div>
  );
}

export default FoodCard;
