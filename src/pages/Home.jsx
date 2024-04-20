import React,{useContext} from "react";
import Slider from "../components/slider/Slider";
import ScrumItem from "../components/showItems";
import RecommendedItem from "../components/ProductCategory/ProductsCategories";
import ItemImages from "../assets/Items";
import {ProductContext} from "../components/productsfromApis/Product";
import ProductList from "../components/productsfromApis/ProductList";

const Home = () => {

  const {Products} = useContext(ProductContext)
  console.log(Products)
  return (
    <div>
      <Slider />
      <div style={{ backgroundColor: "white", height: 85, width: "100%",}}>
        <img
          src={ItemImages.ScrumImage}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <ScrumItem />
      <RecommendedItem />
      <ProductList />

      
    </div>
  );
};

export default Home;
