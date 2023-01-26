import React from 'react'
import Image from 'next/image'
import Home from '@/pages'
import Link from 'next/link'
import {motion} from 'framer-motion'

function Jasa() {
    const projectVariant ={
        hidden: {
          y: 150,
          opacity: 0.5,
        },
    
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.1,
            ease: "easeOut",
          },
        },
      }

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
    <div className='max-w-6xl mx-auto mt-32 md:mt-40'>
        <h3 className='text-center text-3xl font-bold font-poppins'>Layanan Kami</h3>
        <p className='text-center mb-12 font-poppins'>Kami memberikan berbagai macam layanan untuk perawatan barang kesayangan anda yang akan dikerjakan oleh tim kami yang sudah berpengalaman dan professional.</p>
        <div className='flex flex-wrap justify-center md:space-x-12 lg:space-x-24'>

     
    
            <motion.div 
            initial={`hidden`}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={projectVariant}
            className='w-full md:w-3/12 relative py-5'>
                <motion.div
                initial={`hidden`}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={imageVariant}
                >
                <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src="/asset/cuci5.svg" className='absolute z-10 left-1/2 -translate-x-1/2'/></motion.div>
                <h3 className='font-bold text-2xl mt-64 md:mt-56 text-center font-poppins z-20'>CLEANING</h3>
                <p className='text-center font-poppins px-12 md:px-0'>Treatment pencucian untuk menghilangkan noda dan aman untuk semua bahan.</p>
            </motion.div>


            <motion.div 
            initial={`hidden`}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={projectVariant}
            className='w-full md:w-3/12 relative py-5'>
                <motion.div
                initial={`hidden`}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={imageVariant}
                >
                <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src="/asset/cuci6.svg" className='absolute z-10 left-1/2 -translate-x-1/2'/></motion.div>
                <h3 className='font-bold z-20 text-2xl mt-64 md:mt-56 text-center font-poppins'>REPAINT</h3>
                <p className='text-center font-poppins px-12 md:px-0'>Treatment pewarnaan ulang/penggantian warna untuk mencerahkan kembali warna sepatu anda</p>
            </motion.div>


            <motion.div 
             initial={`hidden`}
             whileInView={"visible"}
             viewport={{ once: true }}
             variants={projectVariant}
            
            className='w-full md:w-3/12 relative py-5'>
                <motion.div
                initial={`hidden`}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={imageVariant}
                >
                <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src="/asset/cuci4.svg" className='absolute z-10 left-1/2 -translate-x-1/2'/></motion.div>
                <h3 className='font-bold z-20 text-2xl mt-64 md:mt-56 text-center font-poppins'>OTHERS</h3>
                <p className='text-center font-poppins px-12 md:px-0'>Konsultasikan masalah sepatu, tas kalian langsung pada tim kami.</p>
            </motion.div>
     
        </div>
        <div className='flex justify-center'>
        <Link href="/services">
                <button className="learn-more z-40">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text cursor-pointer">Learn More</span>
                    </button>
        </Link>
        </div>
    </div>
  )
}



export default Jasa