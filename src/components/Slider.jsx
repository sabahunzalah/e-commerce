
import React from 'react'
import { Carousel } from 'antd';
import './slider.css'
import IMAGE1 from '../assets/images/image2.jpg'
import IMAGE2 from '../assets/images/image1.webp'
import IMAGE3 from '../assets/images/image3.jpg'
import IMAGE4 from "../assets/images/image6.jpg"
import { ColorFormat } from 'antd/es/color-picker/interface';



const Slider = () => {
  return (
    <Carousel autoplay={true}   dotPosition="botom" dots={false} className='carousel'>
    <div className='carousalDiv'>
      <img src={IMAGE1} alt=""  className='carousalImages'/>
    </div>
    <div  className='carousalDiv'>
      <img src={IMAGE2} alt=""  className='carousalImages' />
    </div>
    <div  className='carousalDiv'>
      <img src={IMAGE3} alt="" className='carousalImages' />
    </div>
    <div  className='carousalDiv'>
      <img src={IMAGE4} alt="" className='carousalImages' />
    </div>
  </Carousel>
 





  )


}

export default Slider;
