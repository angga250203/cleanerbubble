import React from 'react'
import Image from 'next/image'

function Blogawal() {
  return (
    <div className='bg-black  mt-20 '>
        <div className='max-w-6xl mx-auto px-5'>
            <h3 className='text-center font-bold text-4xl text-white pt-20 pb-2 font-poppins'>Berita terbaru</h3>
            <p className='text-gray-300 text-center font-poppins'>Temukan berita seputar sepatu dan lain-lain terbaru yang dapat menambah wawasan kita</p>
            <div className='flex flex-wrap justify-center  pb-24 md:space-x-12 lg:space-x-24 mt-16'>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/adidasg.webp' className='h-[12rem] w-[16rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className='text-white mt-52 text-center md:text-start pb-2 font-semibold text-xl font-poppins'>Cerita dibalik sepatu Jordan</h3>
                    <p className='text-gray-300 text-center md:text-start text-sm pb-5 font-poppins'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <a href='' className='text-white bg-red-600 px-5 py-2 rounded-md font-semibold absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 '>selengkapnya</a>
                </div>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/adidasg.webp' className='h-[12rem] w-[16rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className='text-white mt-52 text-center md:text-start pb-2 font-semibold text-xl font-poppins'>Adidas Spezial identik dengan suporter</h3>
                    <p className='text-gray-300 text-center md:text-start text-sm pb-5 font-poppins'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <a href='' className='text-white bg-red-600 px-5 py-2 rounded-md font-semibold absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 '>selengkapnya</a>
                </div>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/airmax97.webp' className='h-[12rem] w-[16rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className='text-white mt-52 text-center md:text-start pb-2 font-semibold text-xl font-poppins'>Asal usul bentuk dari airmax-97</h3>
                    <p className='text-gray-300 text-center md:text-start text-sm pb-5 font-poppins'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <a href='' className='text-white bg-red-600 px-5 py-2 rounded-md font-semibold absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 '>selengkapnya</a>
                </div>
               
               
            </div>

        </div>
    </div>
  )
}

export default Blogawal