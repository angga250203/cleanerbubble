import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'


function Hero() {

  return (
    <div className='overflow-hidden'>
    <motion.div
    initial={{x:700}}
    animate={{x:0}}
    transition={{duration:1.5,delay:0.5}}
    className='absolute right-0 mt-12'>
          <div className='w-[15rem] h-[5rem] md:w-[25rem] md:h-[10rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-tl-2xl rounded-bl-2xl'>
        <Image
             src="/asset/hero2.webp"
             alt="Picture of the author"
             width={450}
             height={450}
            className='-mt-20 md:-mt-20 absolute right-32 md:right-36 w-[15rem] md:w-[23rem]' />
        </div>
        </motion.div>
    <div className=' max-w-6xl mx-auto mt-24 py-12 pb-12 '>
      <div className='absolute top-40 md:top-4'>
        <div className='pt-24 md:pt-32 max-w-3xl mx-auto px-5'>
            <h3 className=' text-3xl md:text-5xl  font-bold font-poppins'>Pilihan Terbaik untuk barang  kesayangan anda</h3>
            <p className=' text-sm md:text-lg  py-5'>Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan perawatan secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk melakukan perawatan.</p>
            
        </div>
        
      </div>
    </div>
    <motion.div 
    initial={{x:-700}}
    animate={{x:0}}
    transition={{duration:1.5,delay:0.3}}
    className='mt-60 md:mt-44'>
          <div className='w-[15rem] h-[5rem] md:w-[25rem] md:h-[10rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-tr-2xl rounded-br-2xl'>
        <Image
             src="/asset/hero1.webp"
             alt="Picture of the author"
             width={450}
             height={450}
            className='-mt-20 md:-mt-20 absolute left-32 w-[15rem] md:w-[25rem] md:left-36 ' />
        </div>
        </motion.div>
    </div>
  )
}

export default Hero