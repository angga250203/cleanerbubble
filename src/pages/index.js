
import About from '@/components/Home/abouta'
import Blogawal from '@/components/Home/blogawal'
import Footer from '@/components/Home/footer'
import Hero from '@/components/Home/hero'
import Jasa from '@/components/Home/jasa'
import Navbar from '@/components/Home/navbar'
import Pelayanan from '@/components/Home/pelayanan'
import Why from '@/components/Home/why'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>
      <Hero/>
      <Pelayanan/>
      <About/>  
      <Jasa/>
      <Why/>
      <Blogawal/>
      <Footer/>
      
   
    </>
  )
}
