import React, { useState } from "react";
import FoodCard from "./components/food_card";
import CustomNavBar from "./components/nav_bar";

// testing data 
const FakeData = [
  { name: "بيتزا", price: 85, image: "pizza", amount: 0 },
  { name: "برجر", price: 50, image: "burger", amount: 0 },
  { name: "سلطة", price: 30, image: "salad", amount: 0 },
  { name: "ساندويش", price: 25, image: "sandwich", amount: 0 },
  { name: "عصير", price: 15, image: "juice", amount: 0 },
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
    <div>
      <CustomNavBar />
      <button onClick={handleReset}> Reset </button>
<div className="food-list">
  {data.length === 0 ? (
    <p>🚨 لا توجد عناصر، من فضلك ضيف بيانات.</p>
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
