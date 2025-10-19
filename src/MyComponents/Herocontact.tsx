import { CheckCheckIcon, CheckCircleIcon, ChevronDownSquareIcon, ChevronLeft, ChevronRight, LineChartIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
function Herocontact() {
  return (
    <div className='lg:h-[60vh] bg-cover -z-50  bg-no-repeat bg-center bg-[url(/images/bouldeng.avif)]  w-full grid lg:grid-cols-2 grid-cols-1 my-5 overflow-hidden'>
        <motion.div 
         initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='p-4 flex  clip-path z-10 bg-blue-950/50 justify-start items-center  gap-3'>
          <h2 className='font-bold text-6xl text-amber-600 flex items-center'><ChevronLeft size={67}/> Contact US <ChevronRight size={67}/></h2>
          
        </motion.div>
          <motion.div
        initial={{x:100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='flex justify-end pl-60 items-end clip-path2 h-full bg-blue-950/50 z-10 p-5'>
          <h1 className='text-3xl lg:w-[70%] flex space-x-3 text-white items-center '>Home<ChevronRight size={32} className='text-amber-600'/>Contact us</h1>
            {/* <img src="/images/download.jpeg" className='lg:h-[80%] h-full lg:w-[80%] w-[95%] ' alt="" /> */}
        </motion.div>
    </div>
  )
}

export default Herocontact