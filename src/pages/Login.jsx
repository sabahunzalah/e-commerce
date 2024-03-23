import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import "./login.css";
import IMAGE1 from "../assets/images/68747470733a2f2f64626161736c74642e636f2e696e2f696d672f65636f6d6d657263652e676966.gif";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <Row className="container-main">
      <Col className="leftSide" lg={14}>
        <img src={IMAGE1} style={{ width: "100%", height: "100%" }}></img>
      </Col>
      <Col className="rightSide" lg={10}>
        <Row>
          <h1 style={{ color: " #f47458", textAlign: "center" }}>LogIn</h1>
          <Col lg={24} className="loginBox">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input required onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <h3 style={{ textAlign: "center" }}>
                I dont have an account?
                <Link to={"/Register"} style={{ color: "#f47458" }}>
                  {" "}
                  <span> Register Now</span>
                </Link>
              </h3>
              <div className="btnParent">
                <Button type="primary" className="submitbutton"   onClick={onLogin}>
                  LogIn
                </Button>

                <Button type="primary" className="submitbutton">
                  <Link to={"/"}> Back to Home</Link>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Login;
