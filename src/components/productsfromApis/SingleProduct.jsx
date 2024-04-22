import React from "react";
import FilledButton from "../Button/filledButton";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import { BsPlusLg ,BsEyeFill} from "react-icons/bs";

const SingleProduct = ({ items }) => {
  console.log("result123", items);
  const { id, image, title, price } = items;
  return (
    <Row>
      <Col className="singleCard" lg={20} md={18}>
        {/* <FilledButton /> */}
        <img src={image} alt="" height={100} width={100} className="imgstyle" />
        <h4 style={{ marginTop: "0", marginBottom: "0" }}>{title}</h4>
        <h3 style={{ marginTop: "0", marginBottom: "0" }}> ${price}</h3>
        <div className="addBtn">
          <button style={{background:"red",border:"white"}}>
            <BsPlusLg  />
          </button>
          <Link to={"/Login"}>
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
