import React from 'react'

function Pelayanan() {
  return (
    <div className='mt-32  md:mt-52 max-w-6xl mx-auto px-5 md:py-12'>
        <div className='flex flex-wrap mb-12 md:space-x-12 lg:space-x-16'>
            <div className='w-full md:w-5/12'>
            <h3 className='text-2xl md:text-2xl font-semibold font-poppins'>Bagaimana Kami Melakukan Perawatan untuk Barang Kesayangan Anda</h3>
            </div>
            <div className='w-full md:w-6/12'>
            <p className='mt-5 md:mt-0 md:text-xl mb-2 md:mb-9 font-poppins text-gray-500'>Kami merupakan jasa perawatan premium sepatu, tas dan topi.Sampai saat ini kami telah menyelesaikan 29098 pasang sepatu dan akan terus bertambah.</p>
            </div>
            
            
        </div>
        <div className='flex flex-wrap justify-center md:space-x-12 lg:space-x-24'>
            <div className='w-full md:w-3/12 relative py-5'>
                <img src='../asset/cs.png' className='w-40 absolute left-1/2 -translate-x-1/2 '/>
                <h3 className='text-2xl text-center mt-36 font-bold'>Customer services</h3>
                <p className='text-gray-500 px-12 md:px-0 text-center'>customer service yang responsif dan siap untuk melayani anda</p>
            </div>
            <div className='w-full md:w-3/12 relative py-5'>
                <img src='../asset/pengalaman.png' className='w-36 absolute left-1/2 -translate-x-1/2 '/>
                <h3 className='text-2xl text-center font-bold mt-36'>Expert Technician</h3>
                <p className='text-gray-500 text-center px-12 md:px-0'>Berpengalaman lebih dari 2 tahun di industri cuci sepatu </p>
            </div>
            <div className='w-full md:w-3/12 mb-16 md:mb-0 relative py-5'>
                <img src='../asset/ship.png' className='w-40 py-12 absolute left-1/2 -translate-x-1/2 '/>
                <h3 className='text-2xl text-center font-bold mt-36'>Free Pickup Delivery</h3>
                <p className='text-gray-500 text-center px-12 md:px-0'>Pickup delivery gratis dengan jarak maksimal 6 km</p>
            </div>
        </div>
    </div>
  )
}

export default Pelayanan