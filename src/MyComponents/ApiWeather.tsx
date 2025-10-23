    import { useEffect, useState, useTransition } from "react";

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
    const [wheather,setwhether] = useState<wait[]>([]);
    const [main , setmain] = useState<teamp | null>(null);
    // const[dt , setDt] = useState("");
    const[sys , setsys] = useState<syst | null>(null);
        useEffect(()=>{
        async function FeatchData() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cety}&appid=${API_Key}&units=metric&lang=fa`;
            starttranstion(async() => {
        const respons = await fetch(url);
        const data = await respons.json();
        setwhether(data.weather);
        setmain(data.main);
        setsys(data.sys);
            }); 
        }
        FeatchData()
        },[cety]);
    return (
        <div className="h-screen w-full bg-cover flex flex-col justify-center gap-6 items-center bg-no-repeat bg-center bg-[url(/images/w3.jpg)]">
            <div className="flex w-full justify-center items-center ">
            <input
  type="text"
  value={query}                // اینجا query باشد
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Enter a city name"
  className="p-4 border text-white rounded-l-md outline-0 border-r-0"
/>

<button onClick={() => setCety(query)} className="px-5 py-[17px]  bg-blue-300 rounded-r-md text-white">Search</button>
</div>
    {Wait ? (
        <div className="text-white text-2xl"><img src="/images/Weather-icons/air.png" className="h-20 w-20" alt="" /></div>
    ) : <div className="w-full h-[50vh] flex justify-center items-center">{wheather.map((item,index)=>(
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
     <h2 className="text-4xl font-bold">{cety}</h2>
 <h1 className=" text-3xl">{item.main}</h1>
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
          {/* <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt={item.description}
                className="mt-4 w-24 h-24"
                /> */}
            </div> 
        ))}</div>} 
        </div> 
    )}

    export default ApiWether