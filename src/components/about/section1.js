import React from 'react'
import {motion} from 'framer-motion'

function Section1() {
  return (
  
        <div className="flex flex-wrap lg:space-x-12 items-center py-12">
          <div className="w-full lg:w-4/12 relative py-12 text-center mt-12 ">
            <h3 className='text-3xl font-bold md:text-5xl lg:text-3xl '>Nilai Yang Kami Pegang</h3>
            <p className='text-gray-500 py-3 md:text-xl lg:text-md'>ada beberapa Nilai-Nilai yang kami penggang ketika menjalankan usaha ini</p>
     
          </div>
          <div className="w-full lg:w-7/12 py-3 md:py-12">
            <div className="flex flex-wrap px-3 justify-center md:px-0">

              <motion.div 
               whileHover={{ scale: 1.1 }}
              className="w-[18rem] h-[18rem] md:w-[18rem] md:h-[18rem] py-20  bg-about1 ">
                  <div className='backdrop-blur-lg w-[18rem] h-[18rem] md:w-[18rem] md:h-[18rem] py-20 -mt-20 bg-no-repeat'>
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.1 }}
              className=" w-[18rem] h-[18rem] md:w-[18rem] md:h-[18rem] py-20 bg-blue-500">
                 <img src="../aset/jam.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-[18rem] h-[18rem] md:w-[18rem] md:h-[18rem] py-20 bg-pink-500">
                 <img src="../aset/cs.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-[18rem] h-[18rem] py-20 md:w-[18rem] md:h-[18rem] bg-purple-600">
                  <img src="../aset/tutor.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
            </div>
          </div>
        </div>
       
  
  )
}

export default Section1