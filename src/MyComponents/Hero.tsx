import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  return (
    <div className="w-full lg:h-screen h-[110vh] bg-no-repeat bg-cover bg-center bg-[url('/images/bg-hero.jpg')]">
      <div className="flex lg:pt-24 py-24 w-full h-full bg-stone-100/85 lg:flex-row flex-col gap-0">
        {/* Left Side */}
        <div className="h-full flex-1 p-3 justify-center lg:items-start items-center flex flex-col">
          <h1 className="lg:text-6xl md:text-5xl text-2xl md:text-left text-center  font-bold leading-tight">
            Build Your Dream <br /> House With Us
          </h1>
          <p className="text-gray-600 my-6 md:text-left text-center">
            We are committed to providing our clients with exceptional service
            while <br /> offering our employees the best training.
          </p>
          <button className="px-6 py-3 bg-amber-600 text-white w-fit rounded-md hover:bg-amber-700 transition-all duration-300 ease-in-out">
            Get A Quote
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 h-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mb-4">Our Engineers</h1>
          <div className="lg:w-[600px] md:w-[600px] w-[90%]">
            <Slider {...settings}>
              <div className="p-2 lg:w-[300px] md:w-[300px] w-full h-[370px]">
                <img
                  src="/images/hero3.jpg"
                  alt="hero3"
                  className="rounded-md shadow-md h-full w-full"
                />
              </div>
              <div className="p-2 lg:w-[300px] md:w-[300px] w-full h-[370px]">
                <img
                  src="/images/hero4.jpg"
                  alt="hero4"
                  className="rounded-md shadow-md h-full w-full"
                />
              </div>
              <div className="p-2 lg:w-[300px] md:w-[300px] w-full h-[370px]">
                <img
                  src="/images/hero-2.jpg"
                  alt="hero2"
                  className="rounded-md shadow-md h-full w-full"
                />
              </div>
              <div className="p-2 lg:w-[300px] md:w-[300px] w-full h-[370px]">
                <img
                  src="/images/hero5.jpg"
                  alt="hero5"
                  className="rounded-md shadow-md h-full w-full"
                />
              </div>
              <div className="p-2 lg:w-[300px] md:w-[300px] w-full h-[370px]">
                <img
                  src="/images/hero6.jpg"
                  alt="hero6"
                  className="rounded-md shadow-md h-full w-full"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
