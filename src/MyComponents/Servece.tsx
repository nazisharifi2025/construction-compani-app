import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

function Servece() {
    const serveces = [
        {
            imgUrl : "/images/service-1.jpg",
            icon : "fa fa-3x fa-building",
            title: "Building Construction",
            des :"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo"
        },
        {
            imgUrl : "/images/service-2.jpg",
            icon : "fa fa-3x fa-home",
            title: "House Renovation",
            des :"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo"
        },
        {
            imgUrl : "/images/service-3.jpg",
            icon : "fa fa-3x fa-drafting-compass",
            title: "Architecture Design",
            des :"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo"
        },
        {
            imgUrl : "/images/service-4.jpg",
            icon : "fa fa-3x fa-palette",
            title: "Interior Design",
            des :"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo"
        },
        {
            imgUrl : "/images/service-5.jpg",
            icon : "fa fa-3x fa-tools",
            title: "Fixing & Support",
            des :"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo"
        },
        {
            imgUrl : "/images/service-6.jpg",
            icon : "fa fa-3x fa-paint-brush",
            title: "Painting",
            des :"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo"
        },
    ]
    const [search,setSearch] = useState("");
    const filtred = serveces.filter(service=> service.title.includes(search));
  return (
    <div className='h-fit w-full flex flex-col items-center'>
         <div className='h-[40vh] pt-14 flex flex-col gap-4 justify-center items-center w-full'>
        <h1 className='text-3xl text-amber-600'>Search Our Compani Serveces</h1>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" className='w-[60%] p-3 outline-0 rounded-full border border-gray-400' placeholder='Search Our Serveces' />
    </div>
    <div className='h-fit p-12 w-full flex justify-center items-center flex-wrap gap-7'>
        {filtred.map((serveces,index)=>(
        <motion.div
        initial={{opacity:0, y:-80}}
        whileInView={{opacity:1 , y: 0}}
        transition={{duration:2 , ease: 'linear'}}
        key={index} className='h-[460px] bg-white w-92 flex-flex-col justify-center items-center '>
            <img src={serveces.imgUrl} className='w-full h-56' alt="" />
            <div className='flex flex-col justify-center items-center gap-5 py-12 relative'>
             <i className={`${serveces.icon} text-amber-600 p-6 bg-white rounded-full absolute -top-12`}></i>
            <h1 className='text-3xl font-bold '>{serveces.title}</h1>
            <p className='text-gray-500 text-center'>{serveces.des}</p>
            <button className='flex items-center space-x-2 text-amber-600 text-xl hover:border-b-2 border-amber-600 hover:w-fit px-3'>Read More <ChevronRight/></button>
            </div>
        </motion.div>
        ))}
    </div>
    </div>
  )
}

export default Servece