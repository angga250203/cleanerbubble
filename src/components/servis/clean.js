import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {jasa} from '../data'




import React from 'react'
import {motion} from 'framer-motion'

function Clean() {
  
    
  return (
    <div className="max-w-6xl mx-auto mt-24 flex flex-wrap justify-center ">
      
         {jasa.map((item) => { 
            return(
              
              <motion.div
              initial={{opacity:0,scale:1.2}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:0.5,delay:0.3}}
              viewport={{ once: true }}
              className='w-full md:w-4/12 mt-20 md:mt-32 bg-gray-800 shadow-2xl mx-5 mb-24 md:mb-0 relative h-[20rem] rounded-[2rem]' key={item.id}>
        <Image
        alt="Picture of the author"
        width={100}
        height={100} src={item.img} className='absolute z-10 bg-green-500 px-1 py-1 rounded-2xl left-10 shadow-xl shadow-green-500/50 -top-10'/> 
        <h3 className='text-white text-3xl font-bold mt-28 pb-7 px-5'>{item.name}</h3>
        <p className='px-5 text-white'>{item.desc}</p>
        </motion.div>
            
          
           )
    })}
    </div>
  )
}

export default Clean