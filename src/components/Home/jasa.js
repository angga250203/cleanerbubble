import React from 'react'

function Jasa() {
  return (
    <div className='max-w-6xl mx-auto mt-32 md:mt-40'>
        <h3 className='text-center text-3xl font-bold font-poppins'>Layanan Kami</h3>
        <p className='text-center mb-12 font-poppins'>Ingin mencerahkan kembali sepatu lama anda? serahkan pada kami!</p>
        <div className='flex flex-wrap justify-center md:space-x-12 lg:space-x-24'>
            <div className='w-full md:w-3/12 relative py-5'>
                <img src='../asset/cuci5.svg' className='absolute left-1/2 -translate-x-1/2'/>
                <h3 className='font-bold text-2xl mt-56 text-center font-poppins'>CLEANING</h3>
                <p className='text-center font-poppins px-12 md:px-0'>Treatment pencucian untuk menghilangkan noda dan aman untuk semua bahan</p>
            </div>
            <div className='w-full md:w-3/12 relative py-5'>
            <img src='../asset/cuci6.svg' className='absolute left-1/2 -translate-x-1/2'/>
            <h3 className='font-bold text-2xl mt-56 text-center font-poppins'>REPAINT</h3>
                <p className='text-center font-poppins px-12 md:px-0'>Treatment pewarnaan ulang/penggantian warna untuk mencerahkan kembali warna sepatu anda</p>
            </div>
            <div className='w-full md:w-3/12 relative py-5'>
            <img src='../asset/cuci4.svg' className='absolute left-1/2 -translate-x-1/2'/>
            <h3 className='font-bold text-2xl mt-56 text-center font-poppins'>OTHERS</h3>
                <p className='text-center font-poppins px-12 md:px-0'>Konsultasikan masalah sepatu, tas kalian langsung pada tim kami.</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Jasa