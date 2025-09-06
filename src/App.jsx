

import React, { useState } from "react";
import FoodCard from "./components/food_card";
import CustomNavBar from "./components/nav_bar";
import "./App.css";
import { Route, Routes } from "react-router";
import AboutMe from "../src/pages/aboutme_view";
import AboutCompany from "./components/AboutCompany";
import AboutPeople from "./components/AboutPeople";
import Contact from "./components/Contact";
import Newww from "./components/Newww";
import Login from "./pages/login";

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

  const handleReset = () => {
    const newData = data.map((el) => ({ ...el, amount: 0 }));
    setData(newData);
  };

  const handleIncrement = (item) => {
    const newData = data.map((el) => {
      if (el.name === item.name) {
        return { ...el, amount: el.amount + 1 };
      }
      return el;
    });
    setData(newData);
  };

  const handleDecrement = (item) => {
    const newData = data.map((el) => 
      el.name === item.name 
        ? { ...el, amount: el.amount === 0 ? 0 : el.amount - 1 } 
        : el
    );
    console.log(newData);
    setData(newData);
  };

  const deleteItemFromScreen = (item) => {
    const newData = data.filter((el) => el.name !== item.name);
    setData(newData);
  };

  return (
    <div className="app-container">
      {/* <CustomNavBar /> */}
{/*       
      <div className="actions">
        <button className="reset-btn" onClick={handleReset}>🔄 Reset</button>
      </div> */}

    <Routes>
      {/* route عادي */}
      <Route path="/about-me" element={<AboutMe />} />

      {/* Nested Routes */}
      <Route path="/about-me" element={<Newww/>}>
        <Route path="company" element={<AboutCompany />} />
        <Route path="people" element={<AboutPeople />} />
      </Route>

      <Route path="/contact" element={<Contact />} />
    </Routes>
<Login></Login>

      {/* <div className="food-list">
        {data.length === 0 ? (
          <p className="EmptyMessage">مفيش اكل جرب تاني  </p>
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

      
       */}
    </div>
  );
}

export default App;
