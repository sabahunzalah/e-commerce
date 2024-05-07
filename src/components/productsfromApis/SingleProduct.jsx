import React, { useContext } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../CartItem/CartItemContext";
import { BsCartPlus } from "react-icons/bs";



const SingleProduct = ({ items }) => {
  // console.log("result123", items);
  const { id, image, title, price } = items;
  const { addToCart } = useContext(CartContext);
  return (
    <Row>
      <Col className="singleCard" lg={{span:23,offset:1}} md={{span:23,offset:1}} sm={{span:23,offset:1}} xs={{span:23,offset:1}}>
       
        <img src={image} alt="" height={100} width={100} className="imgstyle" />
        <Link to={"/ProductDetail"}>
          {" "}
          <h4 style={{ marginTop: "0", marginBottom: "0", color: "Black" }}>
            {title}
          </h4>
        </Link>
        <h3 style={{ marginTop: "0", marginBottom: "0", color: "red" }}>
          {" "}
          ${price}
        </h3>
        <button className="Btn">Hot Deals</button>
        <div className="addBtn">
          <button
            style={{
              backgroundColor: "transparent",
              border: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "25px",
              top: "0px",
              left: "0px",
            }}
            onClick={() => addToCart(id, items)}
          >
            <BsCartPlus />
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default SingleProduct;
