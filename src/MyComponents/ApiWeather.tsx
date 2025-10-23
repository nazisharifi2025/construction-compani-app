    import { useEffect, useState, useTransition } from "react";
import { ClipLoader, PuffLoader } from "react-spinners";
import WeatherRainSpinner from "../Articals/Spinner";

    const API_Key = "7428939f153f70012602166492e9ae5d";

    function ApiWether() {
    const [cety,setCety] = useState("kabul");
    const [query,setQuery]= useState(cety);
    type wait ={  
        main: string,
        description: string,
        icon: string
    };
    interface teamp{
        temp: number,
        temp_min: number,
        temp_max: number,
    }
    interface syst{
        sunrise: number,
        sunset: number,
    }
    const [Wait , starttranstion] =useTransition();
    // برای اتظار دیتا
    const [wheather,setwhether] = useState<wait[]>([]);
    const [main , setmain] = useState<teamp | null>(null);
    // const[dt , setDt] = useState("");
    const[sys , setsys] = useState<syst | null>(null);
        useEffect(()=>{
        async function FeatchData() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Ghazni&appid=${API_Key}&units=metric&lang=fa`;
           
            starttranstion(async() => {
        const respons = await fetch(url);
        const data = await respons.json();
        setwhether(data.weather);
        setmain(data.main);
        setsys(data.sys);
            }); 
        }
        FeatchData()
        },[]);
        // دیتا اولی
        const [wheatherKabul,setwhetherKabul] = useState<wait[]>([]);
    const [mainKabul , setmainKabul] = useState<teamp | null>(null);
    // const[dt , setDt] = useState("");
    const[sysKabul , setsysKabul] = useState<syst | null>(null);
        useEffect(()=>{
        async function FeatchDataKabul() {
            const urlKabul = `https://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=${API_Key}&units=metric&lang=fa`;
            starttranstion(async() => {
        const respons = await fetch(urlKabul);
        const data = await respons.json();
        setwhetherKabul(data.weather);
        setmainKabul(data.main);
        setsysKabul(data.sys);
            }); 
        }
        FeatchDataKabul();
        },[cety]);
        // دیتا دومی
              const [wheatherHerat,setwhetherHerat] = useState<wait[]>([]);
    const [mainHerat , setmainHerat] = useState<teamp | null>(null);
    // const[dt , setDt] = useState("");
    const[sysHerat , setsysHerat] = useState<syst | null>(null);
        useEffect(()=>{
        async function FeatchDataHerat() {
            const urlHerat = `https://api.openweathermap.org/data/2.5/weather?q=Herat&appid=${API_Key}&units=metric&lang=fa`;
            starttranstion(async() => {
        const respons = await fetch(urlHerat);
        const data = await respons.json();
        setwhetherHerat(data.weather);
        setmainHerat(data.main);
        setsysHerat(data.sys);
            }); 
        }
        FeatchDataHerat();
        },[cety]);
        // دیتا سومی
                  const [wheatherBamyan,setwhetherBamyan] = useState<wait[]>([]);
    const [mainBamyan , setmainBamyan] = useState<teamp | null>(null);
    // const[dt , setDt] = useState("");
    const[sysBamyan, setsysBamyan] = useState<syst | null>(null);
        useEffect(()=>{
        async function FeatchDataBamyan() {
            const urlBamyan = `https://api.openweathermap.org/data/2.5/weather?q=Bamyan&appid=${API_Key}&units=metric&lang=fa`;
            starttranstion(async() => {
        const respons = await fetch(urlBamyan);
        const data = await respons.json();
        setwhetherBamyan(data.weather);
        setmainBamyan(data.main);
        setsysBamyan(data.sys);
            }); 
        }
        FeatchDataBamyan();
        },[cety]);
        // دیتا چهارمی
                          const [wheatherLondon,setwhetherLondon] = useState<wait[]>([]);
    const [mainLondon , setmainLondun] = useState<teamp | null>(null);
    // const[dt , setDt] = useState("");
    const[sysLondon, setsysLondon] = useState<syst | null>(null);
        useEffect(()=>{
        async function FeatchDataLondon() {
            const urlLondon = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_Key}&units=metric&lang=fa`;
            starttranstion(async() => {
        const respons = await fetch(urlLondon);
        const data = await respons.json();
        setwhetherLondon(data.weather);
        setmainLondun(data.main);
        setsysLondon(data.sys);
            }); 
        }
        FeatchDataLondon();
        },[cety]);
        //  
        //     const urlHerat = `https://api.openweathermap.org/data/2.5/weather?q=Herat&appid=${API_Key}&units=metric&lang=fa`;
        //     const urlLondon = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_Key}&units=metric&lang=fa`;
    return (
        <div className="h-screen py-12 w-full bg-cover flex flex-col justify-center gap-6 items-center bg-no-repeat bg-center bg-[url(/images/w3.jpg)]">

    { Wait ? (
        <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-blue-400 to-blue-700">
       <ClipLoader color="#36D7B7" size={50} />
    </div>
    ) : <div className="w-full h-[50vh] flex justify-center flex-col gap-6 items-center">
      
        <div className="flex justify-between items-center px-6 w-full">
        {/* دومین کارد */}
           {wheatherHerat.map((item,index)=>(
    <div key={index}  className="h-fit py-6 rounded-md  w-[32%] flex justify-between p-3 border-4 border-gray-400 bg-blue-100/30 items-center text-white">        
    <img src={
    item.main.toLowerCase() === "clouds"
      ? "/images/Weather-icons/cloudy.png"
      : item.main.toLowerCase() === "sun"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "rain"
      ? "/images/Weather-icons/rainy-day_4724094.png"
      : item.main.toLowerCase() === "snow"
      ? "/images/Weather-icons/snow.png"
      : item.main.toLowerCase() === "clear"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "drizzle"
      ? "/images/Weather-icons/rain_6959879.png"
      : item.main.toLowerCase() === "thunderstorm"
      ? "/images/Weather-icons/thunderstorm.png"
      : item.main.toLowerCase() === "mist"
      ? "/images/Weather-icons/lightning-bolt.png"
      : ""
  }
  className="h-30 w-30"
/>
<div className="flex flex-col justify-center items-start gap-5 relative">
    <h1 className="text-4xl font-black font-serif absolute -left-30 -bottom-4">{mainKabul?.temp}°</h1>
    <div className="">
     <h2 className="text-4xl font-bold">Herat</h2>
 <h1 className=" text-3xl">{item.description}</h1>
 </div>
               <div className="flex justify-between items-center space-x-4 w-full ">
                <span className="flex flex-col"><span className="font-bold">SUNRISE:</span>{new Date(sysHerat?.sunrise*1000).toLocaleTimeString()}AM</span>
                <span className="flex flex-col"><span className="font-bold">SUNSET:</span>{new Date(sysHerat?.sunset*1000).toLocaleTimeString()}PM</span>
               </div>
               </div>
            </div> 
        ))}
        {/* اولین کارد */}
          {wheatherKabul.map((item,index)=>(
    <div key={index}  className="h-fit py-6 rounded-md  w-[32%] flex justify-between p-3 border-4 border-gray-400 bg-blue-100/30 items-center text-white">        
    <img src={
    item.main.toLowerCase() === "clouds"
      ? "/images/Weather-icons/cloudy.png"
      : item.main.toLowerCase() === "sun"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "rain"
      ? "/images/Weather-icons/rainy-day_4724094.png"
      : item.main.toLowerCase() === "snow"
      ? "/images/Weather-icons/snow.png"
      : item.main.toLowerCase() === "clear"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "drizzle"
      ? "/images/Weather-icons/rain_6959879.png"
      : item.main.toLowerCase() === "thunderstorm"
      ? "/images/Weather-icons/thunderstorm.png"
      : item.main.toLowerCase() === "mist"
      ? "/images/Weather-icons/lightning-bolt.png"
      : ""
  }
  className="h-30 w-30"
/>
<div className="flex flex-col justify-center items-start gap-5 relative">
    <h1 className="text-4xl font-black font-serif absolute -left-30 -bottom-4">{mainKabul?.temp}°</h1>
    <div className="">
     <h2 className="text-4xl font-bold">Kabul</h2>
 <h1 className=" text-3xl">{item.description}</h1>
 </div>
               <div className="flex justify-between items-center gap-4 w-full ">
                <span className="flex flex-col"><span className="font-bold">SUNRISE:</span>{new Date(sysKabul?.sunrise*1000).toLocaleTimeString()}AM</span>
                <span className="flex flex-col"><span className="font-bold">SUNSET:</span>{new Date(sysKabul?.sunset*1000).toLocaleTimeString()}PM</span>
               </div>
               </div>
            </div> 
        ))}
        {/* کارد چهارمی */}
            {wheatherBamyan.map((item,index)=>(
    <div key={index}  className="h-fit py-6 rounded-md  w-[32%] flex justify-between p-3 border-4 border-gray-400 bg-blue-100/30 items-center text-white">        
    <img src={
    item.main.toLowerCase() === "clouds"
      ? "/images/Weather-icons/cloudy.png"
      : item.main.toLowerCase() === "sun"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "rain"
      ? "/images/Weather-icons/rainy-day_4724094.png"
      : item.main.toLowerCase() === "snow"
      ? "/images/Weather-icons/snow.png"
      : item.main.toLowerCase() === "clear"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "drizzle"
      ? "/images/Weather-icons/rain_6959879.png"
      : item.main.toLowerCase() === "thunderstorm"
      ? "/images/Weather-icons/thunderstorm.png"
      : item.main.toLowerCase() === "mist"
      ? "/images/Weather-icons/lightning-bolt.png"
      : ""
  }
  className="h-30 w-30"
/>
<div className="flex flex-col justify-center items-start gap-5 relative">
    <h1 className="text-4xl font-black font-serif absolute -left-28 -bottom-4">{mainBamyan?.temp}°</h1>
    <div className="">
     <h2 className="text-4xl font-bold">Bamyan</h2>
 <h1 className=" text-3xl">{item.description}</h1>
 </div>
               <div className="flex justify-between gap-4 items-center w-full ">
                <span className="flex flex-col"><span className="font-bold">SUNRISE:</span>{new Date(sysBamyan?.sunrise*1000).toLocaleTimeString()}AM</span>
                <span className="flex flex-col"><span className="font-bold">SUNSET:</span>{new Date(sysBamyan?.sunset*1000).toLocaleTimeString()}PM</span>
               </div>
               </div>
            </div> 
        ))}
        </div>
         {wheather.map((item,index)=>(
    <div key={index}  className="h-9/12 rounded-md  w-[40%] flex justify-between p-6 border-4 border-gray-400 bg-blue-100/30 items-center text-white">        
    <img src={
    item.main.toLowerCase() === "clouds"
      ? "/images/Weather-icons/cloudy.png"
      : item.main.toLowerCase() === "sun"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "rain"
      ? "/images/Weather-icons/rainy-day_4724094.png"
      : item.main.toLowerCase() === "snow"
      ? "/images/Weather-icons/snow.png"
      : item.main.toLowerCase() === "clear"
      ? "/images/Weather-icons/sun_2720081.png"
      : item.main.toLowerCase() === "drizzle"
      ? "/images/Weather-icons/rain_6959879.png"
      : item.main.toLowerCase() === "thunderstorm"
      ? "/images/Weather-icons/thunderstorm.png"
      : item.main.toLowerCase() === "mist"
      ? "/images/Weather-icons/lightning-bolt.png"
      : ""
  }
  className="h-40 w-40"
/>
<div className="flex flex-col justify-center items-start gap-5 relative">
    <h1 className="text-4xl font-black font-serif absolute -left-32 bottom-0">{main?.temp}°</h1>
    <div className="">
     <h2 className="text-4xl font-bold">Ghazni</h2>
 <h1 className=" text-3xl">{item.description}</h1>
 </div>
               <div className=" flex justify-between w-full gap-12  items-center">
                <span> <span className="font-bold">Min:</span>{main?.temp_min}°C</span>
                <span> <span className="font-bold">Max:</span>{main?.temp_max}°C</span>
               </div>
               <div className="flex justify-between items-center w-full ">
                <span className="flex flex-col"><span className="font-bold">SUNRISE:</span>{new Date(sys?.sunrise*1000).toLocaleTimeString()}AM</span>
                <span className="flex flex-col"><span className="font-bold">SUNSET:</span>{new Date(sys?.sunset*1000).toLocaleTimeString()}PM</span>
               </div>
               </div>
         </div> 
        ))}  

        {/* دیف بسته شدن awit */}
        </div>}
          {/* آخرین دیف */}
        </div>
            // دیتا اولی
  
    )}

    export default ApiWether