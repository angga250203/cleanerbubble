import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Home/navbar'
import Image from 'next/image'
import Footer from '@/components/Home/footer'

function jordan() {
  return (
    <>
         <Head>
        <title>Blog | Jordan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar/>
      <div className='max-w-3xl mx-auto pt-40 px-5'>
    <p className='text-xl  py-2 text-gray-500'>Bayu jaka | 23 Desember 2022</p>
    <h3 className='text-3xl md:text-4xl font-bold font-poppins pb-12'>Sejarah Air jordan 1</h3>
      <Image
                 alt="Picture of the author"
                 width={400}
                 height={400} src='/asset/jordan.jpg' className='md:h-[24rem] h-[12rem]  w-[20rem] md:w-[40rem] object-cover rounded-md absolute left-1/2 -translate-x-1/2'/>

    <p className='md:mt-[27rem] mt-[14rem]  text-xl'>Sepakbola merupakan salah satu olahraga Sepatu Air Jordan 1 diluncurkan untuk pertama kalinya oleh Nike pada 15 September 1985.

Sepatu ini merupakan hasil karya desainer Peter Moore itu yang dimasanya laku keras.

Nama besar Michael Jordan sang pemain mega bintang pada zaman tersebut benar-benar mampu membantu mendongkrak penjualan sepatu model tersebut.
</p>

<p className='text-xl py-5'>
Dimasa itu marketing yang digunakan Nike memaki slogan, “Untungnya, NBA tak bisa menghentikanmu dari memakainya”.

Pada berapa periode tertentu, di Amerika Serikat, sepatu Air Jordan 1 bisa setara dengan nyawa.

Permintaannya begitu tinggi untuk produk Nike itu, sehingga perampasan sepatu yang tengah dipakai pun sering terjadi di Amerika Serikat.

Sepatu Air Jordan 1 yang bernilai ini seperti sebuah emas yang bernilai, ini merupakan periode ketika orang-orang lebih tertarik melihat dan berkeinginan untuk mencuri sepatu daripada sebuah emas.Di masa tersebut, semua sepatu olahraga berwarna hitam dan putih. Saat itu, warna Air Jordan 1 memiliki warna merah dan hitam, namun ketika Jordan melihat warna tersebut, dia menolak untuk bekerja sama.

Menurutnya, warna hitam dan merah adalah warna iblis sehingga dia tidak ingin memakainya.

Sang legenda basket itu awalnya memiliki ketertarikan ingin menjalin kerja sama dengan brand Adidas atau Converse. Tapi, sang ibu membujuknya untuk bernegosiasi dengan Nike.
</p>

<p className='text-xl pb-12'>Sepatu ini sempat dilarang lantaran sepatu olahraga memiliki regulasi mengharuskan berwarna hitam dan putih.

Meski begitu, Jordan tidak mendengarkan larangan NBA dan tetap memakai sepatu itu setiap kali dia bertanding.

Akibatnya, NBA memberikan denda senilai Rp7,8 miliar per pertandingan, tapi Nike dengan senang hati membayar denda tersebut, efek penolakan pelarangan ini membuat dunia olahraga memiliki peraturan baru.

Setelah kejadian tersebut, cabang olahraga lain juga mengikuti peraturan pewarnaan bebas terhadap sepatu olahraga dan kebebasan kreatifitas bukan sekedar desain saja, namun sekarang sudah dapat dipadukan dengan warna-warna lain.

Nike berhasil menjual dengan harga Rp1,18 juta perpasang dan berhasil mendapatkan uang sebesar 166 juta dolar AS (Rp2,36 triliun) pada tahun pertama penjualan.

Sejak peluncuran Air Jordan 1 pada tahun 1985, Nike sudah memproduksi 36 seri (tidak termasuk pada variasi warna dan retro). Total seluruh pendapatan Nike sekitar 10% merupakan hasil penjualan seri Air Jordan 1 pada tahun 2019.

Cerita mengenai sepak terjang sepatu ini diceritakan juga dalam seri dokumenter Netflix The Last Dance.</p>
      </div>

      <Footer/>
    </>
  )
}

export default jordan