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
  // console.log(MensProducts);
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
        <>
        <h2 className="Deals" >Hot Deals</h2>
        <Row  style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
        <Col lg={{span:6,offset:0}} md={{span:0}}  sm={{span:0}}   xs={{span:0}}>
          <img src={IMAGE1} alt="" style={{height:"100%",width:"100%"}}/>
          </Col>
          <Col className="productsStyling"  lg={{span:17,offset:1}}md={{span:23,offset:1}} sm={{span:23,offset:1}} xs={{span:23,offset:1}}>
          {MensProducts.map((items) => {
            return (
              <>
              <SingleProduct className="list" items={items} key={items.id} />
              </>
            );
          })}
        </Col>
        </Row>
            
        <h2 className="Deals" key={Products.id} >Hot Deals in Jewellery</h2>
        <Row>
        <Col className="productsStyling" lg={{span:20,offset:4}} md={{span:23,offset:1}} sm={{span:23,offset:1}} xs={{span:23,offset:1}}>
        
          {Jewelery.map((items) => {
            return (
              <SingleProduct className="list" items={items} key={items.id} />
            );
          })}
        </Col>
        </Row>

        <h2 className="Deals" key={Products.id} >Hot Deals In women Clothings</h2>
        <Row>
        <Col className="productsStyling" lg={{span:23,offset:0}} md={{span:24,offset:0}} sm={{span:24,offset:0}} xs={{span:24,offset:0}}>

          {WomensClothes.map((items) => {
            return (
              <SingleProduct className="list" items={items} key={items.id} />
            );
          })}
        </Col>
        </Row>
        
    
        <h2 className="Deals" key={Products.id} >Hot Deals In Electronics</h2>
        <Row>
        <Col className="productsStyling" lg={{span:23,offset:0}} md={{span:24,offset:0}} sm={{span:24,offset:0}} xs={{span:24,offset:0}}>
      
          {Electronics.map((items) => {
            return (
              <SingleProduct className="list" items={items} key={items.id} />
            );
          })}
        </Col>
        </Row>
        <Col className="Advertisement" lg={24}>
        <img src={IMAGE2} alt="" style={{height:"100%",width:"1000px"}} />
        </Col>
        </>
      
    
  );
};

export default ProductList;
