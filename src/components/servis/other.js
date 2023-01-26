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
    <>
         <Slider {...settings}>  
       {other.map((item) => { 
            return(
              
                <div className='w-full px-12 relative py-5' key={item.id} >
                <Image
                 alt="Picture of the author"
                 width={250}
                 height={250} src={item.img} className='absolute z-10 left-1/2 -translate-x-1/2'/>
                <h3 className='font-bold text-2xl mt-64 md:mt-56 text-center font-poppins z-20'>{item.name}</h3>
                <p className='text-center text-gray-600 font-poppins '>{item.desc}</p>
            </div>
          
           )
    })}
    </Slider>   
    </>
  )
}

export default Other