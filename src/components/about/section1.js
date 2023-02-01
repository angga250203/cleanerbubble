import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

function Section1() {
  return (
  
    <div className='flex flex-wrap justify-center pb-24 mt-28  lg:space-x-24'>
    <div className='w-full relative md:w-3/12 mb-24 md:mb-0 bg-green-600 h-[25rem] rounded-[2rem] shadow-2xl shadow-green-500/40'>
    <Image
    alt="Picture of the author"
    width={170}
    height={170} src="/asset/puas.png" className='absolute -top-20 left-1/2 -translate-x-1/2'/> 
    <h3 className='text-white text-3xl pb-7 font-bold mt-32 px-5'>Customer Obsessed</h3>
    <p className='text-white  font-semibold px-5 '>Kepuasan konsumen merupakan hal yang paling kami jaga. Kepuasan Anda menjadi pemacu semangat untuk kami agar terus berinovasi.</p>
    </div>


    <div className='w-full md:w-3/12 relative mb-24 md:mb-0 bg-orange-600 h-[25rem] rounded-[2rem] shadow-2xl shadow-orange-500/40'>
    <Image
    alt="Picture of the author"
    width={170}
    height={170} src="/asset/inte.png" className='absolute -top-20 left-1/2 -translate-x-1/2'/> 
    <h3 className='text-white text-3xl pb-7 font-bold mt-32 px-5'>Integrity</h3>
    <p className='text-white px-5  font-semibold'>Displin, jujur, dan dedikasi merupakan hal yang kami jaga agar terus mendapat kepercayaan dari konsumen.</p>
    </div>



    <div className='w-full md:w-3/12 relative mb-24 md:mb-0 bg-purple-600 h-[25rem] rounded-[2rem] shadow-2xl shadow-purple-500/40'>
    <Image
    alt="Picture of the author"
    width={170}
    height={170} src="/asset/ino.png" className='absolute -top-20 left-1/2 -translate-x-1/2'/> 
    <h3 className='text-white text-3xl pb-7 font-bold mt-32 px-5'>Inovatif</h3>
    <p className='text-white px-5  font-semibold'>Kami akan terus menerus menciptakan hal-hal atau pun terobosan yang baru demi kenyamanan konsumen</p>
    </div>
  </div>
       
  
  )
}

export default Section1