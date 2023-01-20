import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='max-w-6xl mx-auto px-5  '>
      <div className='border-b-2 py-12 border-gray-300 flex flex-wrap md:space-x-12 lg:space-x-32'>
        <div className='w-full md:w-4/12 mt-32 '>
            <div className=''>
                <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/logo.webp'  className='bg-black rounded-md w-32 py-5 px-5'/>
                <p className='mt-5 text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                <h3 className='mt-4 font-bold'>WhatsApp</h3>
                <p className='mt-1 text-xl text-gray-600'>+628856787876</p>
                <h3 className='mt-4 font-bold'>Email</h3>
                <p className='mt-1 text-xl text-gray-600'>CleanerBubble@gmai.com</p>
            </div>
        </div>
        <div className='w-full md:w-6/12 md:mt-56 mt-5'>
            <h3 className='text-2xl font-bold'>Store</h3>
            <p>Jl. Ciliwung No.2, Purwantoro, Kec. Blimbing, Kota Malang, Jawa Timur 65126</p>
            <h3 className='text-2xl font-bold mt-5'>Media sosial</h3>
        
        </div>
        </div>
        <p className='py-12 text-center text-gray-500'>© 2020-2022 Cleaner Bubble. All Right Reserved.</p>
    </div>
  )
}

export default Footer