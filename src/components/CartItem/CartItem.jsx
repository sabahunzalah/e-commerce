import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { CartContext } from "./CartItemContext";


const CartItem = ({ item }) => {
  const { removeFromCart,increaseAmount ,decreaseAmount} = useContext(CartContext);
  const { id, image, title, price, amount } = item;
  return (
    <div className="productlistCart">
      <div className="singleProductCart">
        <Link to={`/ProductDetail/${id}`}>
          <img className="ProductImg" src={image} alt="" />
        </Link>
        <div className="ProductDetailcart">
          
            <div className="PricingDiv">
              <div className="AddOrRemove">
                <IoMdRemove onClick={()=>decreaseAmount(id)}/>
                <div >{amount}</div>
                <IoMdAdd onClick={()=>increaseAmount(id)} />
              </div>
              <div className="finalPrice">
                <div>$ {price}</div>
                <div>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
              </div>
              <IoMdCloseCircle
            className="closebtn"
            onClick={() => removeFromCart(id)}
          />
            </div>
           
          
        </div>
      
       
      </div>
      <div className="productname">
        <Link to={`/ProductDetail/${id}`} style={{ color: "black" }}>
            {title}
            </Link>
        </div>
    </div>
    
  );
};

export default CartItem;
