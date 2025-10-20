import { useEffect, useState } from "react";

const API_Key = "7428939f153f70012602166492e9ae5d";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=${API_Key}&units=metric&lang=fa`
function ApiWether() {
  type wait ={
    main: string,
    description: string
};
  const [wheather,setwhether] = useState<wait[]>([]);
    useEffect(()=>{
      async function FeatchData() {
      const respons = await fetch(url);
      const data = await respons.json();
      setwhether(data.weather);
      console.log(data.weather);
      }
      FeatchData()
    },[]);
  return (
    <div>
        <h1>Ehether </h1>
        {wheather.map((item,index)=>(
        <div key={index}  className="h-screen w-full flex justify-center items-center">
        <h1 className="text-black font-black text-7xl">{item.main}</h1>
        </div>
      ))}
    </div>
  )
}

export default ApiWether