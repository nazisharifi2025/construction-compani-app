import { ChevronRight, Facebook, Github, Instagram, Linkedin, Phone, PhoneCallIcon, Twitter, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <div className='lg:h-[77vh] h-[93vh] w-full bg-slate-950 '>
        <div
        className=' h-full flex flex-col gap-10 items-center w-full'>
        <div className='h-[83%] w-full  grid lg:grid-cols-2 grid-cols-1'>
        <motion.div
             initial={{x:-100,opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{duration:1.3, ease: 'linear'}} className='flex flex-col justify-center p-6 text-white gap-8 h-full border-r border-amber-600'>
            <h1 className='text-3xl font-bold font-paci text-amber-600'>Sharifi Constrction Company</h1>
            <p className='w-[90%] text-gray-400'>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
            <div className='flex flex-col gap-4 justify-start'>
             <a href="tel./+93795064649" >
              <div className='flex space-x-4 items-center'>
                <Phone size={18} className='text-amber-600'/>
                <span className='text-xl'>Phone_Number</span>
              </div>
              </a>
             <a href="tel./+93795064649" >
              <div className='flex space-x-4 items-center'>
                <Linkedin size={18} className='text-amber-600'/>
                <span className='text-xl'>LinkeDin</span>
              </div>
              </a>
             <a href="tel./+93795064649" >
              <div className='flex space-x-4 items-center'>
                <PhoneCallIcon size={18} className='text-amber-600'/>
                <span className='text-xl'>Whatsapp number</span>
              </div>
              </a>
             <a href="tel./+93795064649" >
              <div className='flex space-x-4 items-center'>
                <Github size={18} className='text-amber-600'/>
                <span className='text-xl'>GitHub</span>
              </div>
              </a>
            
            </div>
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
        <motion.div
             initial={{x:-100,opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{duration:1.3, ease: 'linear'}}  className='h-full w-full grid grid-cols-2 justify-center items-center p-12 text-gray-400 space-x-4'>
           <div className='flex flex-col gap-2 '>
            <h1 className='font-bold text-xl text-white'>Quick Links</h1>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Home</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >About Us</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Serveces</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Contact</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Blog</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Wether</a>
            </div>
           </div>
           <div className='flex flex-col gap-2 text-gray-400 '>
            <h1 className='font-bold text-xl text-white '>Popular Links</h1>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Home</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >About Us</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Serveces</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Contact</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Blog</a>
            </div>
            <div className='flex'>
              <ChevronRight/>
            <a href="" >Wether</a>
            </div>
           </div>
        </motion.div>
        </div>
         <ul className='w-full px-9 flex space-x-12 border-t py-2 justify-center border-amber-600 text-white text-xl'>
                <h1 className='text-xl'>  <span className='text-amber-600'>©</span> Your Site Name. All Rights Reserved.</h1>
            </ul>
            </div>
    </div>
  )
}

export default Footer