import { CheckCheckIcon, CheckCircleIcon, LineChartIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
function AboutUs() {
  return (
    <div className='lg:h-screen bg-cover -z-50  bg-no-repeat bg-center bg-[url(/images/bouldeng.avif)]  w-full grid lg:grid-cols-2 grid-cols-1 my-5 overflow-hidden'>
        <motion.div 
         initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='p-4 flex flex-col clip-path z-10 bg-blue-950/70 justify-center gap-3'>
          <h2 className='font-bold text-2xl text-amber-600'>ABOUT US</h2>
          <h1 className='text-4xl lg:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className='text-gray-400 lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi commodi cupiditate natus animi possimus alias, neque necessitatibus ad minus, architecto illo ut id! Reprehenderit ipsum minus praesentium pariatur deserunt?</p>
          <div className='w-[70%] grid grid-cols-2 gap-4 my-5'>
            <div className='flex justify-center items-center space-x-2 shadow-md shadow-gray-400 p-2'>
              <CheckCircleIcon className='text-amber-600' size={24}/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex justify-center items-center space-x-2 shadow-md shadow-gray-400 p-2'>
              <CheckCircleIcon className='text-amber-600' size={24}/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex justify-center items-center space-x-2 shadow-md shadow-gray-400 p-2'>
              <CheckCircleIcon className='text-amber-600' size={24}/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex justify-center items-center space-x-2 shadow-md shadow-gray-400 p-2'>
              <CheckCircleIcon className='text-amber-600' size={24}/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </motion.div>
          <motion.div
        initial={{x:100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='flex justify-center items-center clip-path2 h-full bg-blue-950/60 z-10 overflow-hidden '>
            {/* <img src="/images/download.jpeg" className='lg:h-[80%] h-full lg:w-[80%] w-[95%] ' alt="" /> */}
        </motion.div>
    </div>
  )
}

export default AboutUs