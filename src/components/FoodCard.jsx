
import React, { useState } from 'react';

// testing data
const FakeData = [
  { id: 1, name: 'بيتزا', price: 85, image: 'pizza' },
  { id: 2, name: 'برجر', price: 50, image: 'burger' },
  { id: 3, name: 'سلطة', price: 30, image: 'salad' },
  { id: 4, name: 'ساندويش', price: 25, image: 'sandwich' },
  { id: 5, name: 'عصير', price: 15, image: 'juice' },
];


function FoodCard(props) {
  const [number, setunm] = useState(0);

  const handleAdd = () => {
    setunm(NUM => NUM + 1);
      console.log(number);

  };
  const addFun = () => {
    if (number > 0) {
      setunm(prevNumber => prevNumber - 1);
      console.log(number);
    }
  };
  const clear = () => {
    setunm(0);
  };

  return (
    <div className="food-card">
      <div className="food-details">
        <span className="food-name">{props.name}</span>
      </div>
      <div className="food-actions">
        <button className="btn add-btn" onClick={handleAdd}>➕</button>
        <span className="total-number">{number}</span>
        <button className="btn remove-btn" onClick={addFun}>➖</button>
      </div>
      <div className="clear-action">
        <button className="btn clear-btn" onClick={clear}>
          <span className="clear-icon">🔄</span>
          <span className="clear-text">0</span>
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
