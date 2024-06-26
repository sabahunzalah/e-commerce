import React from "react";
import "./style.css";
import Items from "./dummyData";

const ScrumItem = (props) => {
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
    <div>
      <h1
        style={{
          fontStyle: "oblique",
          paddingLeft: "10px",
          fontSize: "30px",
          
        }}
      >
        Slide To Get Top Deals
      </h1>
      <div className="container">
        <div className="card-list">
          {Items.map((item) => (
            <ScrumItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
