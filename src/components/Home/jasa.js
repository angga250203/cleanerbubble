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
    <div className='bg-gray-900 h-[210vh] md:h-[130vh] '>
    <div className='bg-img h-[60vh] rounded-b-[6rem]'>
    <div className='max-w-6xl mx-auto '>
        <h3 className='text-center text-3xl md:text-[3rem] pt-24 pb-5  font-bold font-maison text-white'>Layanan Kami</h3>
        <p className='text-center max-w-3xl mx-auto mb-12 font-poppins text-white'>Kami memberikan berbagai macam layanan untuk perawatan barang kesayangan anda yang akan dikerjakan oleh tim kami yang sudah berpengalaman dan professional.</p>
        <div className='flex flex-wrap justify-center md:space-x-12 lg:space-x-24 mt-32'>

        <div className='w-full relative md:w-3/12 shadow-2xl mx-5 mb-24 md:mb-0 bg-gray-800 h-[20rem] rounded-[2rem]'>
        <Image
        alt="Picture of the author"
        width={100}
        height={100} src="/asset/cuci5.svg" className='absolute z-10 bg-green-500 px-1 py-1 rounded-2xl left-10 shadow-xl shadow-green-500/50 -top-10'/> 
        <h3 className='text-white text-3xl font-bold mt-28 pb-7 px-5'>CLEANING</h3>
        <p className='px-5 text-white'>Treatment pencucian untuk menghilangkan noda dan aman untuk semua bahan.</p>
        </div>



        <div className='w-full md:w-3/12 bg-gray-800 shadow-2xl mx-5 mb-24 md:mb-0 relative h-[20rem] rounded-[2rem]'>
        <Image
        alt="Picture of the author"
        width={100}
        height={100} src="/asset/cuci6.svg" className='absolute z-10 bg-blue-300 px-1 py-1 rounded-2xl left-10 shadow-xl shadow-blue-300/50 -top-10'/> 
        <h3 className='text-white text-3xl font-bold mt-28 pb-7 px-5'>REPAINT</h3>
        <p className='px-5 text-white'>Treatment pewarnaan ulang/penggantian warna untuk mencerahkan kembali warna sepatu anda</p>
        </div>



        <div className='w-full md:w-3/12 bg-gray-800 shadow-2xl mx-5 mb-5 md:mb-0 relative h-[20rem] rounded-[2rem]'>
        <Image
        alt="Picture of the author"
        width={100}
        height={100} src="/asset/cuci4.svg" className='absolute z-10 bg-pink-400 px-1 py-1 rounded-2xl left-10 shadow-xl shadow-pink-400/50 -top-10'/> 
        <h3 className='text-white text-3xl font-bold mt-28 pb-7 px-5'>OTHERS</h3>
        <p className='px-5 text-white'>Konsultasikan masalah sepatu, tas kalian langsung pada tim kami.</p>
        </div>
    
           



            
     
        </div>
        <div className='flex justify-center mt-16'>
        <Link href="/services">
                <button className="learn-more z-40">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text text-white cursor-pointer">Learn More</span>
                    </button>
        </Link>
        </div>
    </div>
    </div>
    </div>
  )
}



export default Jasa
 