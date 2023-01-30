import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Why() {
  return (
    <div className='bg-gray-900 h-[80vh] md:h-[100vh] pt-16'>
      <div className='max-w-3xl mx-auto '>
        <h3 className='text-white text-3xl font-bold text-center pb-3'>Lokasi Kami</h3>
        <p className='text-white text-center'>Temukan Kami di Kota Terdekat Sekitar Anda.</p>
        <div className='flex justify-center mt-7'>
        <Link href="/services">
                <button className="learn-more z-40">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text text-white cursor-pointer">Lihat Toko</span>
                    </button>
        </Link>
        </div>
      </div>
    <div className='max-w-6xl  mx-auto px-5 py-16 flex justify-center'>
    <Image
                 alt="Picture of the author"
                 width={500}
                 height={250} src="/asset/lokasi.png" className='absolute z-10 left-1/2 -translate-x-1/2 w-[20rem] md:w-[30rem]'/>
    
    </div>
    </div>
  )
}

export default Why


