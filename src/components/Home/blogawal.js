import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

function Blogawal() {
  return (
    <div className='bg-gray-900  '>
        <motion.div
        initial={{opacity:0.5,y:500}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.7}}
        viewport={{ once: true }}
        className='bg-white rounded-t-[2rem] md:rounded-t-[5rem] relative'>
        <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/news.png' className='absolute -top-32 left-12 md:left-24 w-[15rem] '/>
        <div className='max-w-6xl mx-auto px-5'>
            <h3 className='text-center font-bold text-5xl  pt-20 pb-2 font-poppins'>Berita terbaru</h3>
            <p className='text-gray-700 text-center font-poppins'>Temukan berita seputar sepatu dan lain-lain terbaru yang dapat menambah wawasan kita</p>
            <div className='flex flex-wrap justify-center mt-24  pb-24 md:space-x-12 lg:space-x-24 '>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/adidasg.webp' className='h-[10rem] w-[18rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className=' mt-44 mx-9 md:mx-0  pb-2 font-semibold text-2xl font-poppins '>Cerita dibalik sepatu Jordan</h3>
                    <p className='text-gray-500 mx-9 md:mx-0'>Informasi/ 23 januari 2023</p>
                    
                  
                </div>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/casual.jpg' className='h-[10rem] w-[18rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className=' mt-44 mx-9 pb-2 md:mx-0 font-semibold text-2xl font-poppins '>Adidas Spezial identik dengan suporter</h3>
                    <p className=' text-gray-500 mx-9 md:mx-0'>Informasi/ 23 januari 2023</p>
                </div>
                <div className='w-full md:w-3/12 relative pb-20'>
                    <Image
                 alt="Picture of the author"
                 width={350}
                 height={350} src='/asset/airmax97.webp' className='h-[10rem] w-[18rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>
                    <h3 className=' mt-44 mx-9 pb-2 md:mx-0 font-semibold text-2xl font-poppins '>Asal usul bentuk dari airmax-97</h3>
                    <p className=' text-gray-500 mx-9 md:mx-0'>Informasi/ 23 januari 2023</p>
                    
                </div>
               
               </div>

        </div>
        <div className='flex justify-center'>
        <Link href="/blog" className='-mt-20 pb-12'>
        <button className="learn-more z-40">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text cursor-pointer text-green-500">Learn More</span>
                    </button>
        </Link>
        </div>
        </motion.div>
    </div>
  )
}

export default Blogawal