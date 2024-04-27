import React, { useContext } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../CartItem/CartItemContext";

import { BsPlusLg, BsEyeFill } from "react-icons/bs";

const SingleProduct = ({ items }) => {
  // console.log("result123", items);
  const { id, image, title, price } = items;
  const {addToCart} = useContext(CartContext)
  return (
    <Row>
      <Col className="singleCard" lg={20} md={18} >
        {/* <FilledButton /> */}
        <img src={image} alt="" height={100} width={100} className="imgstyle" />
        <Link  to={"/ProductDetail"}>
          {" "}
          <h4 style={{ marginTop: "0", marginBottom: "0",color: "Black" }}>{title}</h4>
        </Link>
        <h3 style={{ marginTop: "0", marginBottom: "0", color: "red" }}>
          {" "}
          ${price}
        </h3>
        <button className="Btn">Hot Deals</button>
        <div className="addBtn">
          <button style={{ background: "red", border: "white",display:"flex",flexDirection:"row" ,justifyContent:"center",alignItems:"center", padding:"4px" }} onClick={()=>addToCart(id, items)}>
            <BsPlusLg />
          </button>
          <Link to={`/ProductDetail/${id}`}>
            <button>
              <BsEyeFill />
            </button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default SingleProduct;
