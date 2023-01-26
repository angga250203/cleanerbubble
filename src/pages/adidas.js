import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Home/navbar'
import Image from 'next/image'
import Footer from '@/components/Home/footer'

function adidas() {
  return (
    <>
         <Head>
        <title>Blog | Adidas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar/>
      <div className='max-w-3xl mx-auto pt-40 px-5'>
    <p className='text-xl  py-2 text-gray-500'>Bayu jaka | 25 Desember 2022</p>
    <h3 className='text-3xl md:text-4xl font-bold font-poppins pb-12'>Adidas Spezial identik dengan suporter</h3>
      <Image
                 alt="Picture of the author"
                 width={400}
                 height={400} src='/asset/casual.jpg' className='md:h-[24rem] h-[12rem]  w-[20rem] md:w-[40rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>

    <p className='md:mt-[27rem] mt-[14rem]  text-xl'>Sepakbola merupakan salah satu olahraga yang paling digemari oleh
masyarakat umum. Bukan hanya sebagai hiburan semata, sepakbola adalah identitas
sekaligus kebanggan dari sebuah daerah. Sepakbola tak lepas dari dukungan suporter
yang senantiasa memberikan dukungan secara moral maupun secara materil.
Keberagaman para suporter yang mendukung tim kesayangan dalam berlaga pun
bermacam-macam latar belakang. Adaptasi gaya suporter dari berbagai belahan dunia
dipadu padankan oleh berbagai kelompok suporter sebagai pembeda dengan kelompok
suporter lainnya.
</p>

<p className='text-xl py-5'>
Berbagai dimensi lain yang menjalar ke luar stadion seperti polah suporter dan serba-serbi pakaian juga tak kalah menarik untuk disimak. Karenanya, sepak bola dianggap sebagai satu kultur yang mendunia.

Suporter, meski teritori mereka ada di pinggir luar lapangan, mampu berkontribusi banyak pada kultur sepak bola. Pada gaya berpakaian misalnya, ada sejumlah ciri khas pakaian suporter bola yang diaplikasikan universal, terlebih gaya pakaian kasual ala para casual. Gaya berpakaian tersebut belakangan semakin digemari seiring lebih banyak para penggemar sepak bola lokal yang mengadaptasi paham casual ketika mendukung timnya di stadion.
</p>

<p className='text-xl pb-12'>Tampilan kelompok suporter ini agaknya sulit diidentifikasi ketika berada di luar stadion. Tidak ada balutan jersey warna-warni kebesaran di tubuh mereka. Sebaliknya, para casual justru memilih pakaian dari merek garmen ternama. Anda akan mudah mengenali orang-orang yang dimaksud ketika melihat sekelompok suporter mengenakan kaos polo, jaket, sepatu hingga kupluk berlogo Adidas, Fila, Champion, Burberry, ataupun Lacoste tengah berjalan memasuki stadion.</p>
    
      </div>

      <Footer/>
    </>
  )
}

export default adidas