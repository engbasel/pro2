import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <div >
      <h1>🛒 صفحة السلة</h1>
      <p>هنا هتلاقي كل المنتجات اللي ضفتها للسلة.</p>
      
 
    </div>
  );
}
