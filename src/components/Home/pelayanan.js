import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'


function Pelayanan() {
    const imageVariant ={
        hidden: {
          scale: 0.7,
        },
    
        visible: {
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          },
        },
      }
  return (
    <motion.div 
   
    className='mt-32  md:mt-16 md:mb-16 max-w-6xl mx-auto px-5 md:py-12'>
        <div className='flex flex-wrap mb-12 md:space-x-12 lg:space-x-16'>
            <div className='w-full md:w-5/12'>
            <h3 className='text-2xl md:text-3xl font-semibold font-poppins'>Bagaimana Kami Melakukan Perawatan untuk Barang Kesayangan Anda</h3>
            </div>
            <div className='w-full md:w-6/12'>
            <p className='mt-5 md:mt-0 md:text-xl mb-2 md:mb-9 font-maison text-gray-500'>Kami merupakan jasa perawatan premium sepatu, tas dan topi.Sampai saat ini kami telah menyelesaikan 29098 pasang sepatu dan akan terus bertambah.</p>
            </div>
            
            
        </div>
        <div className='flex flex-wrap justify-center md:space-x- mt-28 lg:space-x-24'>
          <motion.div 
          whileHover={{scale:1.1}}
          transition={{duration:0.4}}
          whileTap={{scale:0.8}}
          className='w-full relative md:w-3/12 mb-24 md:mb-0 bg-green-500 h-[25rem] rounded-[2rem] shadow-2xl shadow-green-500/90'>
          <Image
          alt="Picture of the author"
          width={170}
          height={170} src="/asset/cs.png" className='absolute -top-20 left-1/2 -translate-x-1/2'/> 
          <h3 className='text-white text-4xl pb-7 font-bold mt-32 px-5'>Customer services</h3>
          <p className='text-white text-xl font-semibold px-5 '>customer service yang responsif dan siap untuk melayani anda</p>
          </motion.div>


          <motion.div 
          whileHover={{scale:1.1}}
          transition={{duration:0.4}}
          whileTap={{scale:0.8}}
          className='w-full md:w-3/12 relative mb-24 md:mb-0 bg-orange-500 h-[25rem] rounded-[2rem] shadow-2xl shadow-orange-500/90'>
          <Image
          alt="Picture of the author"
          width={170}
          height={170} src="/asset/gg.png" className='absolute -top-20 left-1/2 -translate-x-1/2'/> 
          <h3 className='text-white text-4xl pb-7 font-bold mt-32 px-5'>Expert Technician</h3>
          <p className='text-white px-5 text-xl font-semibold'>Berpengalaman lebih dari 2 tahun di industri cuci sepatu</p>
          </motion.div>



          <motion.div
          whileHover={{scale:1.1}}
          transition={{duration:0.4}}
          whileTap={{scale:0.8}}
          className='w-full md:w-3/12 relative mb-24 md:mb-0 bg-purple-500 h-[25rem] rounded-[2rem] shadow-2xl shadow-purple-500/90'>
          <Image
          alt="Picture of the author"
          width={170}
          height={170} src="/asset/kr1.png" className='absolute -top-20 left-1/2 -translate-x-1/2'/> 
          <h3 className='text-white text-4xl pb-7 font-bold mt-32 px-5'>Free Pickup Delivery</h3>
          <p className='text-white px-5 text-xl font-semibold'>Pickup delivery gratis dengan jarak maksimal 6 km</p>
          </motion.div>
        </div>
    </motion.div>
  )
}

export default Pelayanan