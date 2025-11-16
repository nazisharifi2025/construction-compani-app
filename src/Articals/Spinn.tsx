import { motion } from 'framer-motion';
function Spinn() {
  return (
    <motion.div
    initial={{rotate:0}}
    whileInView={{rotate:360}}
    transition={{duration:1.3 , ease: 'linear' , repeat:Infinity}}
    className='h-20 w-20 rounded-full rounded-t-0 border-4 border-red-400 border-t-0'></motion.div>
  )
}

export default Spinn