import React from "react";
import { useFormik } from "formik"; // useformik given by formik handles all values in our form
import { Col, Row } from "antd";
import "./formik.css";
import * as Yup from "yup";

const SignupFormik = () => {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    address: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    phonenumber: Yup.number()
      .min(2, "Too Short!")
      // .max(13, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    //first step to explain initial value  should be empty
    initialValues: {
      username: "",
      address: "",
      phonenumber: "",
      email: "",
      password: "",
    },
    //second step : formik give you onsubmit function ,its mean when you click onsubmit it bring value
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: SignupSchema,
  });
  return (
    <Row className="formikRow">
      <Col className="formikCol " lg={24} md={18} sm={23} xs={24}>
        <h3 style={{ color: "#f47458", fontSize: "35px" ,margin:0, }}>Registration...</h3>
        <form onSubmit={formik.handleSubmit} className="formikForm">
          <Row className="inputFeild">
            <Col lg={12} md={24} sm={24} xs={24}>
              <label htmlFor="username">User Name :</label>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red" }}> {formik.errors.username}</div>
              ) : null}
              <input
                id="username"
                name="username"
                onChange={formik.handleChange}
                type="text"
                value={formik.values.username}
              />
            </Col>
          </Row>
          <Row className="inputFeild">
            <Col lg={24} md={24} sm={24} xs={24}>
              <label htmlFor="address"> User Address :</label>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              {formik.touched.address && formik.errors.address ? (
                <div style={{ color: "red" }}> {formik.errors.address}</div>
              ) : null}
              <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </Col>
          </Row>

          <Row className="inputFeild">
            <Col lg={24} md={24} sm={24} xs={24}>
              <label htmlFor="phonenumber">Phone Number :</label>
              </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              {formik.touched.phonenumber  && formik.errors.phonenumber ? 
              <div  style={{color:"red"}}> {formik.errors.phonenumber}</div>:null
            }
              <input
            
                id=" phonenumber"
                name="phonenumber"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
              />
              </Col>
          </Row>
          <Row className="inputFeild">
            <Col lg={24} md={24} sm={24} xs={24}>
              <label htmlFor="email">Email Address :</label>
              </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              
              {formik.touched.email  && formik.errors.email ? 
              <div  style={{color:"red"}}> {formik.errors.email}</div>:null
            }
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
             </Col>
          </Row>
          <Row className="inputFeild">
            <Col lg={24} md={24} sm={24} xs={24}>
              <label htmlFor="email"> Your Password :</label>
              </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              {formik.touched.password  && formik.errors.password ? 
              <div  style={{color:"red"}}> {formik.errors.password}</div>:null
            }

              <input
           
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
             </Col>
           
          </Row>
          <button type="submit" className="submitBtn">
            Submit
          </button>
         
        </form>
      </Col>
    </Row>
  );
};

export default SignupFormik;
