import React from "react";
import { Layout, theme, Input } from "antd";
import { Link } from "react-router-dom";
import "./layout.css";
import { TiShoppingCart } from "react-icons/ti";
const { Header, Content, Footer } = Layout;
const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <Link style={{ color: "white" }} to={"/"}>
          <div className="headerlogo">
            <h3 style={{ margin: "0%" }}>
           ShoopyHigh
            </h3>
            <div style={{ width: "50px", height: "50px" }}>
              {" "}
              <TiShoppingCart style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </Link>
        <div className="headerLinks">
          <Input style={{ height: "40px" }} placeholder="find products" />
          <Link style={{ color: "white" }} to={"/Login"}>
            LogIn
          </Link>
        </div>
      </Header>
      <Content className="main">
        <div>{children}</div>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};
export default AppLayout;
