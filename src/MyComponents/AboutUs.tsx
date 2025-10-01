import { Asterisk, Brush, Building, Building2Icon, CheckCircleIcon, Cross, Dessert, Drill, DrillIcon, Hammer, SignalLow,} from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
function AboutUs() {
  return (
    <div className='lg:h-screen  w-full grid lg:grid-cols-2 grid-cols-1 my-5 overflow-hidden'>
         <motion.div 
         initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='h-full overflow-hidden flex justify-center p-4 items-center'
        >
          <div className='lg:h-[70%] h-full w-[70%] relative'>
            <img src="/images/house1.webp" className='h-full w-full hover:scale-3d' alt="" />
            <motion.div
            animate={{rotateZ:0}}
            initial={{rotateZ: 360}}
            transition={{duration:7 , repeat:Infinity, ease : 'linear'}}

            className='h-[75vh] w-[75vh] -z-50 -top-6 text-amber-600 lg:-right-5 -right-26 flex-wrap gap-10 rounded-full  flex justify-between items-center  absolute'>
              <div className='flex justify-between w-full'>
              <Building size={32}/>
              <Building2Icon size={32}/>
              </div>
              <div className='flex justify-between w-full'>
              <Drill size={32}/>
              <Hammer size={32}/>
              </div>
            </motion.div>
          </div>

        </motion.div>
        <motion.div 
         initial={{x:100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='p-4 flex flex-col justify-center gap-3'>
          <h2 className='font-bold text-2xl text-amber-600'>ABOUT US</h2>
          <h1 className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi commodi cupiditate natus animi possimus alias, neque necessitatibus ad minus, architecto illo ut id! Reprehenderit ipsum minus praesentium pariatur deserunt?</p>
          <div className='w-full grid grid-cols-2 gap-4 my-5'>
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
    </div>
  )
}

export default AboutUs