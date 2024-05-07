import React,{useContext} from 'react'

import "./Addtocart.css"

import CartItem from '../components/CartItem/CartItem'
import { CartContext } from '../components/CartItem/CartItemContext'
import { FiTrash2 } from "react-icons/fi";

const AddToCart = () => {
  const {cart,clearCart,total}=( useContext(CartContext))
  return (
    <div className='addToCartPage'>{cart.map(item=>{
      return <CartItem  item={item} key={item.id}/>
    })}
      <div style={{border :"2px solid black"}}>
        <div className='TotalPricediv'>
          {/* total price */}
          <div>
          <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div className='trashBin'><FiTrash2  onClick={clearCart}/> </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCart
