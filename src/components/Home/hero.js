import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <div className='  md:h-[75vh] bg-black'>
        <div className='max-w-6xl mx-auto  flex flex-wrap'>
         <div className='w-full md:w-7/12  mt-40 px-5 overflow-hidden'>
            <motion.h3 
            initial={{x:500}}
            animate={{x:0}}
            transition={{delay:0.5,duration:0.5}}
            className='text-white ml-20 text-center text-6xl font-bold'>Cleaner</motion.h3> 
            <motion.h3 
            initial={{x:-300}}
            animate={{x:0}}
            transition={{delay:1,duration:0.7}}
            className='text-white text-xl px-7 ml-5 md:ml-20 font-semibold'>shoes and care</motion.h3> 
            <motion.h3
            initial={{x:-300}}
            animate={{x:0}}
            transition={{delay:0.5,duration:0.7}}
            className='text-white text-6xl font-bold'>Bubble</motion.h3> 
            <motion.div
             initial={{rotate:-10}}
             animate={{rotate:0}}
             transition={{delay:0.5,duration:0.7}}
           
            >
            <Image
             src="/asset/hero1.webp"
             alt="Picture of the author"
             width={620}
             height={620}
            className='-z-10 -mt-10 md:-mt-32  ' />
            </motion.div>
         </div>
         <div className='w-full md:w-5/12 md:mt-40 px-5 '>
            <h3 className='text-white text-3xl font-semibold font-poppins'><span className='text-white'>Pilihan terbaik</span> untuk perawatan barang kesayangan anda</h3>
            <p className='text-gray-200 mt-5 font-poppins'>Kami menangani perawatan sepatu, tas dan topi. Kami melakukan perawatan secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk melakukan perawatan.Follow sosial media clean bubble untuk mendapat informasi mengenai promo</p>
            <div className='flex space-x-5 py-5 pb-24'>
                <motion.img
                whileHover={{scale:1.3}}
                src='../medsos/ig.webp' className='w-7 h-7 cursor-pointer' alt='medsos'/>
                <motion.img
                whileHover={{scale:1.3}}
                src='../medsos/tw.webp' className='w-8 h-7 cursor-pointer' alt='medsos'/>
                <motion.img
                whileHover={{scale:1.3}}
                src='../medsos/fb.webp' className='w-7 h-7 cursor-pointer' alt='medsos'/>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Hero