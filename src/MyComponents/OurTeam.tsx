import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function OurTeam() {
    const CardS = [
        {
            img: "/images/team-1.jpg",
            name: "Adam Phillips",
            job: "CEO & Founder"
        },
        {
            img: "/images/team-2.jpg",
            name: "Dylan Adams",
            job: "Civil Engineer "
        },
        {
            img: "/images/team-3.jpg",
            name: "Jhon Doe",
            job: "Interior Designer"
        },
    ]
  return (
    <div className='h-screen w-[90%] mx-auto grid grid-cols-3 gap-4 justify-center items-center'>
        {CardS.map((card,index)=>(
        <div key={index} className='h-[70vh] w-[320px] relative group'>
                <div className='flex flex-col -left-[10px] opacity-0 group-hover:opacity-100 group-hover:left-3 transition-all duration-700 ease-linear text-white top-3 absolute gap-3'>
                <button className='rounded-full bg-amber-600 p-2'><Instagram/></button>
                <button className='rounded-full bg-amber-600 p-2'><Twitter/></button>
                <button className='rounded-full bg-amber-600 p-2'><Linkedin/></button>
                <button className='rounded-full bg-amber-600 p-2'><Facebook/></button>
            </div>
            <img src={card.img} className='h-full w-full' alt="" />
            <div className='h-34 w-full absolute bottom-0 right-0 flex flex-col gap-1 justify-center items-center bg-black/35 text-white'>
            <h1 className='text-3xl px-2 font-bold'>{card.name}</h1>
            <p className='text-xl px-2'>{card.job}</p>
            </div>
           
        </div>
        ))}
    </div>
  )
}

export default OurTeam