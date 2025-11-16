import { Clock, CommandIcon, User } from "lucide-react";
import { useEffect, useState } from "react";

function Articals() {
const apiKey = "pub_f6d62b45913148c3bee350a618069981";
const Url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=pizza`;
type Articals = {
  id: string;
  image_url: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
};

const [news , setNews] = useState<Articals[]>([]);
    useEffect(()=>{
      async function fetchdata(){
       const respons =  await fetch(Url);
      const data = await respons.json();
       console.log(data.results); // برای بررسی
        setNews(data.results || []);
        };
        fetchdata()
        },[]);
  return (
    <div className="flex justify-center flex-wrap my-12 w-full h-fit flex-row items-center gap-7">
      {news.map((newNews , indexe)=>(
        <div className="h-fit w-full lg:w-[90%]  flex space-x-4 p-4 flex-col py-6 shadow-md shadow-gray-300 justify-center items-center" key={indexe}>
          <img src={newNews.image_url} className="h-[50%] w-full" alt="" />
          <div className="flex-col flex justify-start gap-7 ">
            <h1 className="text-2xl">{newNews.title}</h1>
            <p className="  ">{newNews.description}</p>
            {/* <a href={newNews.link} className="text-blue-400 underline">link:{newNews.link}</a> */}
            <div className="flex space-x-5 text-gray-400 ">
              <div className="flex space-x-1.5"><Clock/> July 2, 2018 </div>
              <div className="flex space-x-1.5"><User/>   Kamla</div>
              <div className="flex space-x-1.5"><CommandIcon/>   0 Comment</div>
            </div>
            <button className="text-white bg-amber-600 px-7 py-4 w-fit">READ MORE...</button>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default Articals