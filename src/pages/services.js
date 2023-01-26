import Footer from "@/components/Home/footer"
import Navbar from "@/components/Home/navbar"
import Clean from "@/components/servis/clean"
import Other from "@/components/servis/other"
import Repaint from "@/components/servis/repaint"
import Head from "next/head"


export default function Services() {
    return (
      <>
        <Head>
          <title>Services | Cleaner Bubble</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <Navbar/>
        <div className="bg-aboutbg h-[30vh] md:h-[20vh]   lg:h-[40vh] ">
                <div className="h-[30vh] md:h-[20vh] lg:h-[40vh]  backdrop-blur-xl ">
            <h3 className="text-center font-poppins text-3xl md:text-5xl font-bold pt-36 text-white ">OUR SERVICES</h3>
            </div>
            </div>
            
          <div className="max-w-6xl mx-auto px-5">
            <h3 className="text-4xl font-poppins font-semibold pt-28">Cleaning</h3>
            <Clean/>
            <h3 className="text-4xl font-poppins font-semibold pt-28">Repaint</h3>
            <Repaint/>
            <h3 className="text-4xl font-poppins font-semibold pt-28">Other</h3>
            <Other/>
          </div>

          <Footer/>


        </>
  )
}
