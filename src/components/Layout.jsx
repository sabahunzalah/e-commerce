import React, { useContext } from "react";
import { Layout, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./layout.css";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { CartContext } from "./CartItem/CartItemContext";

const { Content, Footer } = Layout;
const AppLayout = ({ children }) => {
  const { itemAmount } = useContext(CartContext);

  return (
    <Layout
      style={{
        backgroundColor: "#dff1da;",
       
      }}
    >
      <Row style={{ color: "#ecdb5f" }} className="top-nav">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Col
          lg={{ span: 5 }}
          md={{ span: 5 }}
          xs={{ span: 12 }}
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "4px",
          }}
        >
          <Link to={"/"}>
            <p
              style={{
                margin: "0%",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#332d2d",
              }}
            >
              ShopyHigh
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <TiShoppingCart
              style={{
                width: "60px",
                height: "35px",
                fontWeight: "bold",
                color: "#332d2d",
              }}
            />
          </Link>
        </Col>
        <Col lg={{ span: 7 }} md={{ span: 6, offset: 1 }} xs={{ span: 0 }}>
          <Input
            style={{
              // height: "40px",
              display: "-ms-flexbox",
              width: "100%",
              fontSize: 18,
              color: "black",
            }}
            placeholder="What are you looking for...?"
            // suffix={<TiZoomInOutline style={{ color: "black" }} />}
            suffix={<AiOutlineSearch style={{ color: "black" }} size={23} />}
          />
        </Col>
        <Col lg={{ span: 7, offset: 1 }} md={{ span: 9, offset: 1 }} xs={0.5}>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button" />
          </label>
          <ul className="menu">
            <li>
              <Link style={{ color: "black" }} to={"/Login"}>
                LogIn
              </Link>
            </li>
            <li>
              {" "}
              <Link style={{ color: "black" }} to={"/formik"}>
                Register
              </Link>
            </li>
            <li>
              {" "}
              <Link style={{ color: "black" }}>Contact</Link>
            </li>
            <li style={{ display: "flex", flexDirection: "" }}>
              <div>
                {" "}
                <Link to={"/AddCartPage"}>
                  <BsBag
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "600px",
                    }}
                  />
                </Link>
              </div>
              <div className="itemAmountmain">{itemAmount}</div>
            </li>
          </ul>
        </Col>
      </Row>

      <Content className="main">
        <div>{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppLayout;
