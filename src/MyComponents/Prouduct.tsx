import React, { useState } from 'react'
import {motion, transform} from "framer-motion";
import { House, Repeat } from 'lucide-react';
function Prouduct() {
    const text =[
        {
            h1 : "Do you have eco-friendly House ?",
            p : "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer."
        },
        {
            h1 : "For House purchases, do you have financing options ?",
            p : "Dolor sit amet consectetur adipiscing. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.Volutpat diam ut venenatis tellus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet."
        },
        {
            h1 : "Is it possible to follow the delivery of my House ?",
            p : "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer."
        },
        {
            h1 : "Do you offer Make your House consultations?",
            p : "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer."
        },
    ]
    const [isOpin , setIsOpin] = useState<number | null>(null);
    const toggelbtn = (index:number)=>{
        setIsOpin(isOpin === index ? null : index);
    }
  return (
    <div className='w-full h-fit flex lg:flex-row flex-col text-black justify-between  p-12'>
         <motion.div
         animate={{opacity:0 ,y: -100}}
         whileInView={{opacity:100 , y:0}}
         transition={{duration:1.3 , ease:'easeInOut'}}
         className='lg:w-[40%] w-full  my-12 h-fit  flex gap-5 flex-col  overflow-hidden rounded-2xl'>
                     <motion.div 
            animate={{opacity:0 }}
            initial={{opacity:100}}
            transition={{repeat:Infinity, duration:1.4 , ease:'linear'}}
             className='text-amber-600 opacity-60  text-4xl'
            >
            <House size={40}/>
            </motion.div>
            <h1 className='text-5xl text-amber-600'>FAQ</h1>
            <h3 className='text-2xl'>We are going to answer your Questions About Our Company in here.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, voluptates autem. Natus, rem magni repellat assumenda soluta eaque magnam culpa maxime consequatur cum, unde mollitia animi rerum possimus vel labore.</p>
        </motion.div>
          <motion.div
         animate={{opacity:0 ,y: 100}}
         whileInView={{opacity:100 , y:0}}
         transition={{duration:1.3 , ease:'linear'}}    
        className='lg:w-[60%] w-full lg:p-10 md:px-10 p-1 h-full flex flex-col gap-5 justify-center items-start'>
           {/* <h3 className='text-amber-600'>PRODUCT RELATED QUERIES</h3>
           <h1 className='text-6xl'>Products & Service</h1> */}
           {text.map((item,index)=>(
           <div key={index} className='w-full p-2 flex flex-col gap-4 border-b justify-center border-gray-600 pb-5'>
            <div onClick={()=> toggelbtn(index)} className='flex justify-between items-center w-full'>
            <h1 className='text-xl cursor-pointer font-light hover:text-amber-600'>{item.h1}</h1>
            <i className='fas fa-arrow-down cursor-pointer'></i>
            </div>
            {isOpin === index && (
            <p className=' text-gray-500 w-[90%] '>{item.p}</p>
            )}
           </div>
           ))}
        </motion.div>
       
    </div>
  )
}

export default Prouduct