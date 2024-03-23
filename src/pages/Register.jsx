import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import { Button, Form, Input } from "antd";
import { Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './register.css'

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div >
      <Row className="register" >
        <Col className="registerForm">
          <h3 style={{color:"#f47458" ,fontSize:"25px"}}>Registration...</h3>
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
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                 
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              rules={[
                {
                  required: true,
                 
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
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Item>
            <h3 style={{ textAlign: "center" }}>
              I already have an account?{" "}
              <Link to={"/login"} style={{ color: "#f47458" }}>
                Login now
              </Link>
            </h3>

            <Button
              className="submitbutton   btn"
              block
              type="submit"
              onClick={onSubmit}
            >
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
