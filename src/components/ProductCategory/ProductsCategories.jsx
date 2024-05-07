import React from "react";
import "./product1.css";
import RecommendedProducts from "./Categories.js";
import FilledButton from "../Button/filledButton.jsx";
import { Row, Col } from "antd";

const RecommendedItem = (props) => {
  const { item } = props;
  return (
    <div className="CardLayout">
      <div style={{ position: "relative", justifyContent: "center" }}>
        <FilledButton />
      </div>
      <div style={{ width: 150, height: 100, justifyContent: "center" }}>
        <img
          src={item.image}
          style={{
            width: "100%",
            height: "100%",
            borderWidth: 1,
            borderColor: "red",
          }}
        />
      </div>
      <div>
        <h4>{item.title}</h4>
      </div>
      <div>{item.description}</div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="container1">
      <h1>Trending Deals</h1>
      <Row>
        {RecommendedProducts.map((item) => (
          <Col
            className="card-list1"
            lg={{ span: 3, offset: 1 }}
            md={{ span: 4, offset: 1 }}
            sm={{ span: 6, offset: 1 }}
          >
            <RecommendedItem key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardList;
