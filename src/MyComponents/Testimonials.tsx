import { Quote, Sliders, Star, StarHalf, StarIcon, Stars, StarsIcon } from 'lucide-react'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
function Testimonials() {
      const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1500,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
      };
    const Card = [
        {
        name: "Ali Rezaiy",
        Job : "Customer Name",
        des : "With over 15 years of experience in managing large construction projects, he ensures quality control, proper scheduling, and successful project delivery.",
        imgUrl : "/images/testimonial-1.jpg"
        },
        {
        name: "Narges Ahmadi",
        Job : "Customer Name",
        des : "A specialist in structural design and calculations, focusing on safety and international standards to guarantee the strength of all projects.",
        imgUrl : "/images/testimonial-2.jpg"
        },
        {
        name: "َAli Karimi",     
        Job : "Customer Name",
        des : "With a keen eye for design and functionality, he creates innovative architectural plans that blend aesthetics with practicality.",
        imgUrl : "/images/testimonial-3.jpg"
        },
        {
        name: "Sara Mohamadi",
        Job : "Customer Name",    
        des : "Responsible for overseeing daily operations on construction sites, ensuring safety protocols are followed and work is completed on schedule.",
        imgUrl : "/images/testimonial-4.jpg"
        },
    ]
  return (
    <div className='lg:h-[110vh] h-[70vh] w-full bg-no-repeat flex justify-center items-center bg-cover bg-center bg-[url(public/images/bg.avif)] '>
        <div className='h-full bg-black/70  w-full flex flex-col p-12 justify-center items-center gap-6'>
        <h1 className='text-5xl text-white'>Our Clients say</h1>
        <div className='flex w-full h-full justify-center p-6 items-center'>
        <Slider {...settings} className='w-full h-full p-5 mx-auto'>
        {Card.map((card , index) => (
<div key={index} className="grid grid-cols-2 w-[90%]   gap-6">
    <div className='h-60 mx-auto w-52 border-1 p-2 rounded-full rounded-b-none'>
  <img src={card.imgUrl} className='h-full w-full object-cover rounded-full rounded-b-none' />
  </div>
  <div className="flex flex-col gap-3 text-white mx-auto mt-3 relative">
    <Quote size={52} className="text-white p-3 bg-amber-600 mx-auto absolute top-0 left-[4%]" />
    <h3 className="text-center text-3xl text-amber-600 font-bold">{card.Job}</h3>
    <h1 className="text-center text-2xl">{card.name}</h1>
    <div className='flex space-x-2.5 mx-auto'>
        <Star size={20} className='text-amber-600 inline-block'/>
        <Star size={20} className='text-amber-600 inline-block'/>
        <Star size={20} className='text-amber-600 inline-block'/>
        <Star size={20} className='text-amber-600 inline-block'/>
        <Star size={20} className='text-amber-600 inline-block'/>
    </div>
    <p className=" text-center mx-auto text-gray-400 max-w-md">{card.des}</p>
  </div>
</div>

        ))}
        </Slider>
        </div>
        </div>
    </div>
  )
}

export default Testimonials