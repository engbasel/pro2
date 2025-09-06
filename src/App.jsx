

import React, { useState } from "react";
import FoodCard from "./components/food_card";
import CustomNavBar from "./components/nav_bar";
import "./App.css";

// testing data 
const FakeData = [
  { name: "كشري", price: 30, image: "koshari", amount: 0 },
  { name: "فول وطعمية", price: 20, image: "foul_taameya", amount: 0 },
  { name: "ملوخية", price: 40, image: "molokhia", amount: 0 },
  { name: "محشي", price: 50, image: "mahshi", amount: 0 },
  { name: "كباب وكفتة", price: 120, image: "kebab_kofta", amount: 0 },
];

function App() {
  const [data, setData] = useState(FakeData);

  // reset
  const handleReset = () => {
    const newData = data.map((el) => ({ ...el, amount: 0 }));
    setData(newData);
  };

  // increment
  const handleIncrement = (item) => {
    const newData = data.map((el) => {
      if (el.name === item.name) {
        return { ...el, amount: el.amount + 1 };
      }
      return el;
    });
    setData(newData);
  };

  // decrement
  const handleDecrement = (item) => {
    const newData = data.map((el) => 
      el.name === item.name 
        ? { ...el, amount: el.amount === 0 ? 0 : el.amount - 1 } 
        : el
    );
    console.log(newData);
    setData(newData);
  };

  // delete
  const deleteItemFromScreen = (item) => {
    const newData = data.filter((el) => el.name !== item.name);
    setData(newData);
  };

  return (
    <div className="app-container">
      <CustomNavBar />
      
      <div className="actions">
        <button className="reset-btn" onClick={handleReset}>🔄 Reset</button>
      </div>

      <div className="food-list">
        {data.length === 0 ? (
          <p className="EmptyMessage"> لا توجد </p>
        ) : (
          data.map((item) => (
            <FoodCard
              key={item.name}
              item={item}
              onIncrement={() => handleIncrement(item)}
              onDecrement={() => handleDecrement(item)}
              onDelete={() => deleteItemFromScreen(item)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
