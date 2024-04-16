import React from "react";
import "./style.css";
import RecommendedProducts from "./Categories.js"


const ScrumItem2 = (props) => {
  const { item } = props; 
  return (
    <div className="card-list-item">
    <img
      src={item.image}
      alt={item.title}
      style={{ width: "100%", height: "100%" }}
    />
  </div>
  );
};

const CardList = () => {
  return (
    <div className="container">
    <div className="card-list">
      {RecommendedProducts.map((item) => (
        <ScrumItem2 key={item.id} item={item} /> 
      ))}
    </div>
  </div>
  );
};

export default CardList;
