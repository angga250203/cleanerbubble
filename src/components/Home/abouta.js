import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div className='bg-black md:h-[85vh] pt-8 pb-20 text-white'>
        <div className='max-w-6xl mx-auto  px-5'>
            <h3 className='text-gray-300 font-bold text-3xl text-center py-20 md:py-16'>Tentang kami</h3>
           <div className='flex flex-wrap '>
            <div className='w-full md:w-1/2 py-2 md:py-5 mb-5 px-12'>
                <Image
                 src="/asset/about.webp"
                 alt="Picture of the author"
                 width={350}
                 height={350} />
            </div>
            <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                <h3 className='text-2xl font-semibold font-poppins'>Cleaner Bubble</h3>
                <p className='text-gray-200 mt-4 pb-5 font-poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link href='/about' className='text-white  font-semibold shadow-lg bg-red-600 py-2 px-5 rounded-md'>Selengkapnya</Link>
            </div>
            </div> 

        </div>

    </div>
  )
}

export default About