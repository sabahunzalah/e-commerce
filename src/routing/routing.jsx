import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react-dom";
import "../App.css";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AppLayout from "../components/Layout";
import SignupFormik from "../pages/formik";
import ProductDetail from "../pages/ProductDetail";
import AddToCart from "../pages/AddCartPage";


function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route
            exact
            path="/Register"
            element={
              <AppLayout>
                {" "}
                <Register />
              </AppLayout>
            }
          />
          <Route
            exact
            path="/formik"
            element={
              <AppLayout>
                {" "}
                <SignupFormik />
              </AppLayout>
            }
          />
          <Route
            exact
            path="/AddCartPage"
            element={
              <AppLayout>
                {" "}
                <AddToCart />
              </AppLayout>
            }
          />

          <Route
            exact
            path="/"
            element={
              <AppLayout>
                {" "}
                <Home />
              </AppLayout>
            }
          />
          <Route exact path = "/ProductDetail" element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
