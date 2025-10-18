import { ChevronRight } from "lucide-react"

function Herocontuct() {
  return (
    <div className='h-[50vh] bg-cover bg-no-repeat bg-center bg-[url(/images/heroBlog.jpg)] bg-amber-600 w-full'>
        <div className="h-full w-full flex justify-end flex-col px-24 items-end py-12 text-white bg-linear-to-t from-amber-500/45 to-amber-700/30">
        <h1 className="text-4xl font-bold">contact page</h1>
        <button className="flex space-x-3 text-amber-600 py-3 px-7 bg-white">Home<ChevronRight/>Blog </button>
        </div>
    </div>
  )
}

export default contact