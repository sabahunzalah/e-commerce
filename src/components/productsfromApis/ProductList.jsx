import React, { useContext } from "react";
import { ProductContext } from "./Product";
import SingleProduct from "./SingleProduct";
import { Col, Row } from "antd";
import IMAGE1 from "../../assets/images/image3-removebg-preview.png"
import IMAGE2 from "../../assets/images/83374-ecommerce.webp"

const ProductList = () => {
  const { Products } = useContext(ProductContext);
  const MensProducts = Products.filter((item) => {
    return item.category === "men's clothing";
  });
  console.log(MensProducts);
  const Jewelery = Products.filter((item) => {
    return item.category === "jewelery";
  });
  const Electronics = Products.filter((item) => {
    return item.category === "electronics";
  });
  const WomensClothes = Products.filter((item) => {
    return item.category === "women's clothing";
  });
  return (
    
      <Row>
        <h2 className="Deals">Hot Deals</h2>
        <Col className="productsStyling" lg={24}>
          <img src={IMAGE1} alt="" height={300}  width={400}/>
          {MensProducts.map((items) => {
            return (
              <>
              <SingleProduct className="list" items={items} key={items.id} />
              </>
            );
          })}
        </Col>

        <h2 className="Deals">Hot Deals In women Clothings</h2>
        <Col className="productsStyling" lg={24}>

          {WomensClothes.map((items) => {
            return (
              <SingleProduct className="list" items={items} key={items.id} />
            );
          })}
        </Col>
        
        
        <h2 className="Deals">Hot Deals in Jewellery</h2>
        <Col className="productsStyling" lg={24}>
        
          {Jewelery.map((items) => {
            return (
              <SingleProduct className="list" items={items} key={items.id} />
            );
          })}
        </Col>
        <h2 className="Deals">Hot Deals In Electronics</h2>
        <Col className="productsStyling" lg={24}>
      
          {Electronics.map((items) => {
            return (
              <SingleProduct className="list" items={items} key={items.id} />
            );
          })}
        </Col>
        <Col className="Advertisement" lg={24}>
        <img src={IMAGE2} alt="" style={{height:"100%",width:"1000px"}} />
        </Col>
      </Row>
    
  );
};

export default ProductList;
