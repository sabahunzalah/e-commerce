import React,{useContext} from "react";
import Slider from "../components/Slider";
import ScrumItem from "../components/showItems";
import ScrumItem2 from "../components/ProductCategory/ProductsCategories";
import ItemImages from "../assets/Items";
import {ProductContext } from "../components/Product";

const Home = () => {

  const {Products} = useContext(ProductContext)
  console.log(Products)
  return (
    <div style={{ border: 1, borderColor: "black" }}>
      <Slider />
      <div style={{ backgroundColor: "white", height: 85, width: "100%",}}>
        <img
          src={ItemImages.ScrumImage}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <ScrumItem />
      <ScrumItem2 />
      {/* <div>{Products.map(Products => {return<div key={Products.id}>{Products.title}</div>}
      )}</div> */}
      
    </div>
  );
};

export default Home;
