import { Asterisk, Brush, Building, Building2Icon, CheckCircleIcon, Cross, Dessert, Drill, DrillIcon, Hammer, SignalLow,} from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
function AboutCom() {
  return (
    <div className='lg:h-screen  w-full grid lg:grid-cols-2 grid-cols-1 my-5 overflow-hidden'>
         <motion.div 
         initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='h-full overflow-hidden flex justify-center p-4 items-center'
        >
          <div className='lg:h-[70%] h-full w-[70%]  overflow-hidden'>
            <img src="/images/1.jpg" className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' alt="" />
          </div>

        </motion.div>
        <motion.div 
         initial={{x:100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='p-4 flex flex-col justify-center gap-3'>
          <h2 className='font-bold text-2xl text-amber-600'>ABOUT US</h2>
          <h1 className='text-4xl'>25 Years Experience</h1>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi commodi cupiditate natus animi possimus alias, neque necessitatibus ad minus, architecto illo ut id! Reprehenderit ipsum minus praesentium pariatur deserunt?</p>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi commodi cupiditate natus animi possimus alias, neque necessitatibus ad minus, architecto illo ut id! Reprehenderit ipsum minus praesentium pariatur deserunt?</p>
           <button className='px-5 py-3 w-fit bg-amber-600 text-white'>LEARN MORE..</button>
        </motion.div>
    </div>
  )
}

export default AboutCom