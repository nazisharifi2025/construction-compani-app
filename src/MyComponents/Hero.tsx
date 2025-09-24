import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
function Hero() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
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
  const Cards = [
    {
      name: "Ali Rezaiy",
      Job : "engenearing",
      des : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugiat ullam sed nam tenetur exercitationem enim.",
      imgUrl : "/images/hero3.jpg"
    },
    {
      name: "Danial Ebrahimi",
      Job : "engenearing",
      des : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugiat ullam sed nam tenetur exercitationem enim.",
      imgUrl : "/images/hero4.jpg"
    },
    {
      name: "Farhad Sadiqi",
      Job : "engenearing",
      des : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugiat ullam sed nam tenetur exercitationem enim.",
      imgUrl : "/images/hero-2.jpg"
    },
    {
      name: "Sabir Ahmadi",
      Job : "engenearing",
      des : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugiat ullam sed nam tenetur exercitationem enim.",
      imgUrl : "/images/hero5.jpg"
    },
    {
      name: "Shadmihr vafa",
      Job : "engenearing",
      des : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugiat ullam sed nam tenetur exercitationem enim.",
      imgUrl : "/images/hero6.jpg"
    },
  ]
  return (
    <div className="w-full lg:h-screen h-[110vh] bg-no-repeat bg-cover bg-center bg-[url('/images/bg-hero.jpg')]">
      <div className="flex lg:pt-24 py-24 w-full h-full bg-stone-100/85 lg:flex-row flex-col gap-0">
        {/* Left Side */}
        <div className="h-full flex-1 p-3 mt-18 justify-center lg:items-start items-center flex flex-col">
          <h1 className="lg:text-6xl moto md:text-5xl text-2xl md:text-left text-center  font-bold leading-tight">
            Build Your Dream <br /> House With Us
          </h1>
          <p className="text-gray-600 my-6 md:text-left text-center">
            We are committed to providing our clients with exceptional service
            while <br /> offering our employees the best training.
          </p>
          <div className="flex space-x-5">
          <button className="px-6 py-2.5 bg-amber-600 text-white w-fit font-serif hover:bg-amber-700 transition-all duration-300 ease-in-out">
            Services
          </button>
          <button className="px-6 py-2.5 bg-amber-600 text-white w-fit font-serif hover:bg-amber-700 transition-all duration-300 ease-in-out">
            Explore More
          </button>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 h-full flex flex-col mt-18 justify-center items-center">
          <h1 className="font-bold text-3xl mb-4">Our Expert Team</h1>
          <div className="lg:w-[600px] md:w-[600px] w-[90%]">
            <Slider {...settings}>
              {Cards.map((item , index)=>(
                   <div key={index} className="p-2 group relative lg:w-[300px] md:w-[300px] w-full h-[400px]">
                <img
                  src={item.imgUrl}
                  alt="hero3"
                  className="rounded-md shadow-md h-full w-full"
                />
                <div className="h-[385px] w-[285px] flex opacity-0 rounded-md bg-black/50 absolute  flex-col gap-3 text-white -bottom-[385px] group-hover:bottom-2 group-hover:opacity-100 transition-all duration-500 ease-initial right-2 justify-center items-center">
                <h1 className="text-2xl">{item.name}</h1>
                <h2 className="text-xl">{item.Job}</h2>
                <p className="w-[90%] mx-auto text-center">{item.des}</p>
                </div>
              </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
