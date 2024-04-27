import React, { useContext } from "react";
import { Layout, theme, Input } from "antd";
import { Link } from "react-router-dom";
import "./layout.css";
import { TiShoppingCart, TiZoomInOutline } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { CartContext } from "./CartItem/CartItemContext";

const { Header, Content, Footer } = Layout;
const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const{itemAmount} = useContext (CartContext)

  return (
    <Layout style={{ backgroundColor: "#dff1da;" }}>
      <Header className="header">
        <Link style={{ color: "white" }} to={"/"}>
          <div className="headerlogo">
            <h3 style={{ margin: "0%", fontSize: 24 }}>ShoopyHigh</h3>
            <div style={{ width: "50px", height: "50px" }}>
              {" "}
              <TiShoppingCart style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </Link>
        <Input
          style={{
            height: "40px",
            display: "-ms-flexbox",
            width: "500px",
            fontSize: 18,
            color: "black",
          }}
          placeholder="What are you looking for...?"
          // suffix={<TiZoomInOutline style={{ color: "black" }} />}
          suffix={<AiOutlineSearch style={{ color: "black" }} size={23} />}
        />
        {/* <div style={{ width: "50px", height: "50px" }}>
          {" "}
          <TiZoomInOutline  style={{ width: "100%", height: "100%" }} />
        </div> */}
        <div className="headerLinks">
          <Link style={{ color: "black" }} to={"/Login"}>
            LogIn
          </Link>
          <Link style={{ color: "black" }} to={"/formik"}>
            Register
          </Link>
          <Link style={{ color: "black" }}>Contact</Link>
          <Link  to={"/AddCartPage"}>
            <BsBag  style={{color:"black",fontSize:"20px",fontWeight:"600px"}}/>
          </Link>
            <div className="itemAmountmain">{itemAmount}</div>
        </div>
      </Header>
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
