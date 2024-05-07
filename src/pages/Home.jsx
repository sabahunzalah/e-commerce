import React from "react";
import Slider from "../components/slider/Slider";
import ScrumItem from "../components/showItems";
import RecommendedItem from "../components/ProductCategory/ProductsCategories";
import ItemImages from "../assets/Items";
import { ProductContext } from "../components/productsfromApis/Product";
import ProductList from "../components/productsfromApis/ProductList";


const Home = () => {
  return (
    <div>
     
      <Slider />
      <ScrumItem />
      <ProductList />
      <RecommendedItem />
    </div>
  );
};

export default Home;
