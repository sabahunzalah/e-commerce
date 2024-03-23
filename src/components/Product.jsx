import React from 'react'
import './product.css'
import COSMETICPIC from'../assets/images/Cosmetics-beauty-products-for-makeup-on-transparent-background-PNG.png'
import DRESSPIC from '../assets/images/maxresdefault.jpg'
import BAGSANDSHOES from '../assets/images/bags and shoes.webp'
const productPic ={
  height:"100%",
  width:"100%"
}
const Product = () => {
  return (
    <div className='productsCategory'>
      <div className='singleProduct'><img src={COSMETICPIC} style={productPic}/> 
        Cosmetics
      </div>
      <div className='singleProduct'> <img src={DRESSPIC} style={productPic}/> Dresses</div>
      <div className='singleProduct'> <img src={BAGSANDSHOES} style={productPic}/>Bags/Shoes</div>
      <div className='singleProduct'> <img src={DRESSPIC} style={productPic}/>Electronics</div>
      <div className='singleProduct'> <img src={DRESSPIC} style={productPic}/>Baby care</div>
      <div className='singleProduct'> <img src={DRESSPIC} style={productPic}/>Electronics</div>
      
    </div>
  )
}

export default Product
