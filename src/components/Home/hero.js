import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'


function Hero() {

  return (
    <div className=' bg-gradient-to-r h-screen -mt-24 from-black to-gray-900 '>
   
    <div className='max-w-6xl mx-auto flex justify-center flex-wrap px-5 pt-56  '>
        <div className='w-full md:w-1/2'>
        <h3 className=' text-3xl md:text-5xl text-white font-bold font-poppins'>Pilihan Terbaik untuk barang  kesayangan anda</h3>
            <p className=' text-sm md:text-lg text-white py-5'>Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan perawatan secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk melakukan perawatan.</p>
            <Link href="/" className='bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-5 rounded-md'>Contact</Link>
        </div> 
        <motion.div
        initial={{opacity:0,scale:1.3}}
        animate={{opacity:1,scale:1}}
        transition={{delay:0.7,duration:1}}
        viewport={{ once: true }}

        className='w-full md:w-1/2'>

                <Image
        src="/asset/heroo.png"
        alt="Picture of the author"
        width={450}
        height={450}
        className=' mt-12 md:-mt-12 w-[20rem] md:w-[30rem]' />
        </motion.div>

    </div>
      

       
        
 
    
    </div>
  )
}

export default Hero



