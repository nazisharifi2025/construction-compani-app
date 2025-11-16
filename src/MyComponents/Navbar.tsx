import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
    const [open,setOpen] = useState(false);
  return (
    <div className='w-full fixed bg-stone-100 md:px-8 px-1 z-50 py-4 flex  top-0 right-0 justify-between items-center'>
        <h1 className='text-2xl font-bold font-paci'>Sharifi Constrction Company</h1>
        <ul id='ull' className={`${open ? 'flex' : 'hidden'} lg:flex-row flex-col z-50 lg:flex lg:bg-transparent lg:h-fit lg:w-fit lg:relative absolute lg:top-0 md:top-18 top-15 bg-stone-100 rounded-2xl rounded-t-none lg:p-0 p-6 md:w-[70%] w-full lg:right-0 md:right-30  right-0 transition-all duration-700 lg:items-center items-start lg:gap-0 gap-5 space-x-8`}>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/">Home</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/About">About Us</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/Serveces">Serveces</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/Blog">Blog</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/Contuct">Contuct Us</a>
            <button className='px-6 py-2 rounded-md outline-1 hover:outline-0 hover:bg-gray-300/40 block md:block lg:hidden '><a href="/Wether">Wether</a></button>
        </ul>
        <div className='flex space-x-8'>
        <button className='px-6 py-2 rounded-md outline-1 hover:outline-0 hover:bg-gray-300/40 hidden md:block'><a href="/Wether">Wether</a></button>
        <button  className='lg:hidden block'>
             <Menu onClick={()=> setOpen(!open)} className={`${!open ? "block" : "hidden"}`} size={24} />
             <X onClick={()=> setOpen(!open)} className={`${open ? "block" : "hidden"}`} size={24}/>
        </button>
       </div>
    </div>
  )
}

export default Navbar