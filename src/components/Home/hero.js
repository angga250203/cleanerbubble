import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'


function Hero() {

  return (
    <div className=' bg-gradient-to-r h-screen -mt-24 from-black to-gray-400'>
   
    <div className='max-w-6xl mx-auto flex flex-wrap px-5 pt-56 '>
        <div className='w-full md:w-1/2'>
        <h3 className=' text-3xl md:text-5xl text-white font-bold font-poppins'>Pilihan Terbaik untuk barang  kesayangan anda</h3>
            <p className=' text-sm md:text-lg text-white py-5'>Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan perawatan secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk melakukan perawatan.</p>
            <Link href="/" className='bg-green-500 text-white py-2 px-5 rounded-md'>Contact</Link>
        </div> 
        <div className='w-full md:w-1/2'>

                <Image
        src="/asset/hero2.webp"
        alt="Picture of the author"
        width={450}
        height={450}
        className=' w-[15rem] md:w-[30rem]' />
        </div>

    </div>
      

       
        
 
    
    </div>
  )
}

export default Hero



