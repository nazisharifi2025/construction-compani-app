    import { Cloud, CloudDrizzle, Rainbow, Snowflake, SunIcon } from "lucide-react";
    import { useEffect, useState } from "react";

    const API_Key = "7428939f153f70012602166492e9ae5d";

    function ApiWether() {
    const [cety,setCety] = useState("kabul");
    const [query,setQuery]= useState(cety);
    type wait ={  
        main: string,
        description: string,
        icon: string
    };
    const [wheather,setwhether] = useState<wait[]>([]);
        useEffect(()=>{
        async function FeatchData() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cety}&appid=${API_Key}&units=metric&lang=fa`
        const respons = await fetch(url);
        const data = await respons.json();
        setwhether(data.weather);
        console.log(data.weather);
        }
        FeatchData()
        },[cety]);
    return (
        <div className="h-screen w-full bg-cover flex flex-col justify-center items-center bg-no-repeat bg-center bg-[url(/images/w3.jpg)]">
            <div className="flex w-full justify-center items-center ">
            <input
  type="text"
  value={query}                // اینجا query باشد
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Enter a city name"
  className="p-4 border rounded-l-md outline-0 text-black"
/>

<button onClick={() => setCety(query)} className="px-5 py-4  bg-blue-300 rounded-r-md text-white">Search</button>
</div>
            {wheather.map((item,index)=>(
            <div key={index}  className="h-5/12 rounded-md  w-[50%] flex justify-center flex-col border-4 border-gray-400 bg-blue-100/30 items-center text-white">
                <h2>{cety}</h2>
            <h1 className=" font-black text-7xl">{item.main}</h1>
            <p className="text-xl font-bold">{item.description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt={item.description}
                className="mt-4 w-24 h-24"
                />
            </div>
        ))}
        </div>
    )
    }

    export default ApiWether