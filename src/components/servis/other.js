import Image from "next/image";
import {other} from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import React from 'react'

function Other() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
      autoplaySpeed: 2100,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
      
         
        ]
      };
  return (
    <div className="max-w-6xl mx-auto h-[100vh] overflow-hidden">
         <Slider {...settings}>  
       {other.map((item) => { 
            return(
              
              <div className='w-full mt-32 bg-gray-800 shadow-2xl mx-5 mb-24 md:mb-0 relative h-[20rem] rounded-[2rem]' key={item.id}>
        <Image
        alt="Picture of the author"
        width={100}
        height={100} src={item.img} className='absolute z-10 bg-green-500 px-1 py-1 rounded-2xl left-10 shadow-xl shadow-green-500/50 -top-10'/> 
        <h3 className='text-white text-3xl font-bold mt-28 pb-7 px-5'>{item.name}</h3>
        <p className='px-5 text-white'>{item.desc}</p>
        </div>
            
          
           )
    })}
    </Slider>   
    </div>
  )
}

export default Other