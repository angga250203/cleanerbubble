import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Home/navbar'
import Footer from '@/components/Home/footer'
import Link from 'next/link'

function Blog() {
  return (
    <>
         <Head>
        <title>Blog | Cleaner Bubble</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Navbar/>

<div className="bg-aboutbg h-[30vh] md:h-[20vh]   lg:h-[40vh] ">
                <div className="h-[30vh] md:h-[20vh] lg:h-[40vh]  backdrop-blur-xl ">
            <h3 className="text-center font-poppins text-3xl md:text-5xl font-bold pt-36 text-white ">Blog</h3>
            </div>
            </div>
    <div className='max-w-6xl mx-auto pt-24 px-5'>
        <h3 className='text-4xl font-bold'>Berita Terbaru</h3>
        <p className='text-gray-500 text-xl pb-20'>Temukan berita seputar sepatu dan lain-lain terbaru yang dapat menambah wawasan kita</p>
           <div className='flex flex-wrap justify-center  pb-24 md:space-x-12 lg:space-x-24 '>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/adidasg.webp' className='h-[12rem] w-[16rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className=' mt-52 text-center md:text-start pb-2 font-semibold text-xl font-poppins'>Cerita dibalik sepatu Jordan</h3>
                    <p className='text-gray-500 text-center md:text-start text-sm pb-5 font-poppins'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <a href='' className='text-white bg-red-600 px-5 py-2 rounded-md font-semibold absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 '>selengkapnya</a>
                </div>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/casual.jpg' className='h-[12rem] w-[16rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className=' mt-52 text-center md:text-start pb-2 font-semibold text-xl font-poppins'>Adidas Spezial identik dengan suporter</h3>
                    <p className='text-gray-500 text-center md:text-start text-sm pb-5 font-poppins'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <Link href='/adidas' className='text-white bg-red-600 px-5 py-2 rounded-md font-semibold absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 '>selengkapnya</Link>
                </div>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/airmax97.webp' className='h-[12rem] w-[16rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className=' mt-52 text-center md:text-start pb-2 font-semibold text-xl font-poppins'>Asal usul bentuk dari airmax-97</h3>
                    <p className='text-gray-500 text-center md:text-start text-sm pb-5 font-poppins'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <a href='' className='text-white bg-red-600 px-5 py-2 rounded-md font-semibold absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 '>selengkapnya</a>
                </div>
               
               
            </div>
    </div>
    <Footer/>
    </>  
  )
}

export default Blog