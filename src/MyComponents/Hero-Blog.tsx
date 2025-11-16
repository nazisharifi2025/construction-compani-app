import { ChevronLeft, ChevronRight} from 'lucide-react'
import { motion } from 'framer-motion'
function HeroBlog() {
  return (
    <div className='lg:h-[60vh] h-[24vh] bg-cover -z-50  bg-no-repeat bg-center bg-[url(/images/bouldeng.avif)]  w-full grid lg:grid-cols-2 grid-cols-1 my-5 overflow-hidden'>
        <motion.div 
         initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='p-4 lg:flex hidden  clip-path z-10 bg-blue-950/70 justify-start items-center  gap-3'>
          <h2 className='font-bold text-6xl text-amber-600 flex items-center'><ChevronLeft size={67}/> Blog Page <ChevronRight size={67}/></h2>
          
        </motion.div>
          <motion.div
        initial={{x:100}}
        whileInView={{x:0}}
        transition={{duration:1.3 , ease: 'linear'}}
        className='flex justify-end lg:pl-60 pl-49 items-end clip-path2 h-full bg-blue-950/60 z-10 p-5'>
          <h1 className='lg:text-3xl text-xl lg:w-[70%] flex space-x-3 text-white items-center '>Home<ChevronRight size={32} className='text-amber-600'/>Blog Page</h1>
            {/* <img src="/images/download.jpeg" className='lg:h-[80%] h-full lg:w-[80%] w-[95%] ' alt="" /> */}
        </motion.div>
    </div>
  )
}

export default HeroBlog