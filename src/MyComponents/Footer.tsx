import { Facebook, Github, House, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <div className='h-[70vh] w-full bg-no-repeat bg-cover bg-center bg-[url(/images/house.avif)] '>
        <div
        className=' h-full flex flex-col gap-10 items-center w-full'>
        <div className='h-[80%]  w-full  grid grid-cols-2'>
        <motion.div
             initial={{x:-100,opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{duration:1.3, ease: 'linear'}} className='flex flex-col justify-center p-6 text-black gap-8 h-full'>
            <h1 className='text-2xl font-bold font-paci'>Sharifi Constrction Company</h1>
            <p className='text-amber-600 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta, corporis quae in error magni quaerat optio consequuntur nulla ad culpa molestias a. Inventore praesentium corrupti quis, neque animi explicabo.</p>
            <motion.div
             initial={{x:-100 , opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{duration:1.3, ease: 'linear'}}
            className='flex space-x-6'>
                <Instagram className='hover:text-amber-600 cursor-pointer'/>
                <Linkedin className='hover:text-amber-600 cursor-pointer' />
                <Github className='hover:text-amber-600 cursor-pointer'/>
                <Facebook className='hover:text-amber-600 cursor-pointer'/>
                <Twitter className='hover:text-amber-600 cursor-pointer'/>
                <Youtube className='hover:text-amber-600 cursor-pointer'/>
            </motion.div>
        </motion.div>
        <div className='h-full w-full flex justify-center items-center'>
        <div className='grid grid-cols-3 w-[60%] h-[70%] gap-2 justify-center p-6  items-center'>
            <div className='h-32 w-32 rounded-md relative group'>
           <img src="/images/boulding].webp" className='h-full rounded-md w-full' alt="" />
           <div className='h-32 w-32 rounded-md bg-white/60 absolute top-0 right-0 group-hover:flex transition-all duration-500 ease-linear text-amber-600 hidden justify-center items-center'><Instagram size={38}/></div>
           </div>
            <div className='h-32 w-32 rounded-md relative group'>
           <img src="/images/hero6.jpg" className='h-full rounded-md w-full' alt="" />
           <div className='h-32 w-32 rounded-md bg-white/60 absolute top-0 right-0 group-hover:flex transition-all duration-500 ease-linear text-amber-600 hidden justify-center items-center'><Instagram size={38}/></div>
           </div>
            <div className='h-32 w-32 rounded-md relative group'>
           <img src="/images/house.avif" className='h-full rounded-md w-full' alt="" />
           <div className='h-32 w-32 rounded-md bg-white/60 absolute top-0 right-0 group-hover:flex transition-all duration-500 ease-linear text-amber-600 hidden justify-center items-center'><Instagram size={38}/></div>
           </div>
            <div className='h-32 w-32 rounded-md relative group'>
           <img src="/images/hero1.jpg" className='h-full rounded-md w-full' alt="" />
           <div className='h-32 w-32 rounded-md bg-white/60 absolute top-0 right-0 group-hover:flex transition-all duration-500 ease-linear text-amber-600 hidden justify-center items-center'><Instagram size={38}/></div>
           </div>
            <div className='h-32 w-32 rounded-md relative group'>
           <img src="/images/p.avif" className='h-full rounded-md w-full' alt="" />
           <div className='h-32 w-32 rounded-md bg-white/60 absolute top-0 right-0 group-hover:flex transition-all duration-500 ease-linear text-amber-600 hidden justify-center items-center'><Instagram size={38}/></div>
           </div>
            <div className='h-32 w-32 rounded-md relative group'>
           <img src="/images/bouldeng.avif" className='h-full rounded-md w-full' alt="" />
           <div className='h-32 w-32 rounded-md bg-white/60 absolute top-0 right-0 group-hover:flex transition-all duration-500 ease-linear text-amber-600 hidden justify-center items-center'><Instagram size={38}/></div>
           </div>
        </div>
        </div>
        </div>
         <ul className='w-[60%] px-9 flex space-x-12 border-b justify-center border-black text-black text-xl'>
                <li className='hover:text-amber-600 cursor-pointer'>Home</li>
                <li className='hover:text-amber-600 cursor-pointer'>About</li>
                <li className='hover:text-amber-600 cursor-pointer'>Serveces</li>
                <House className='text-amber-600 ' size={38}/>
                <li className='hover:text-amber-600 cursor-pointer'>Blog</li>
                <li className='hover:text-amber-600 cursor-pointer'>Contact Us</li>
                <li className='hover:text-amber-600 cursor-pointer'>Wether</li>
            </ul>
            </div>
    </div>
  )
}

export default Footer