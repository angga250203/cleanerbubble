import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

function About() {
  return (
    <div className='bg-gray-900 h-[140vh] md:h-[100vh] pt-8 rounded-t-[2rem] md:rounded-t-[5rem]  text-white'>
        <div className='max-w-6xl mx-auto  px-5'>
            <h3 className='text-white font-bold text-3xl md:text-5xl font-maison text-center py-20 md:py-16'>Tentang kami</h3>
           <div className='flex flex-wrap '>
            <motion.div 
             initial={{opacity:0,scale:1.3}}
             whileInView={{opacity:1,scale:1}}
             transition={{delay:0.7,duration:1}}
             viewport={{ once: true }}
            className='w-full md:w-1/2 py-2 md:py-5 mb-5 px-12'>
                <Image
                 src="/asset/hero3.png"
                 alt="Picture of the author"
                 width={350}
                 height={350} className="" />
            </motion.div>
            <div className='w-full md:w-1/2 mt-5 md:mt-12'>
              <div className='bg-white rounded-xl w-[7rem] text-center '>
                <h3 className='text-2xl text-black  font-semibold font-poppins'>Cleaner</h3>
                <p className=' text-sm text-black '>shoes and care</p>
                <h3 className='text-2xl text-black font-semibold font-poppins'>Bubble</h3>
              </div>
                <p className='text-gray-200 mt-4 pb-5 font-poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link href='/about' className='text-white  font-semibold shadow-lg bg-green-500 py-2 px-5 rounded-md'>Selengkapnya</Link>
            </div>
            </div> 

        </div>

    </div>
  )
}

export default About