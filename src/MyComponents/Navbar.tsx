import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
    const [open,setOpen] = useState(false);
  return (
    <div className='w-full fixed bg-stone-100 px-8 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold font-paci'>Sharifi Constrction Company</h1>
        <ul id='ull' className={`${open ? 'flex' : 'hidden'} lg:flex-row flex-col lg:flex lg:bg-transparent lg:h-fit lg:w-fit lg:relative absolute lg:top-0 top-23 bg-stone-100 rounded-2xl rounded-t-none lg:p-0 p-6 w-[70%] lg:right-0 md:right-30 right-19 lg:items-center items-start lg:gap-0 gap-5 space-x-8`}>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/">Home</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/About">About Us</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/Serveces">Serveces</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/Blog">Blog</a>
            <a className='hover:border-b font-bold border-gray-700 transition-all duration-1000 ease-in-out' href="/Contuct">Contuct Us</a>
        </ul>
        <div className='flex space-x-8'>
        <button className='px-6 py-2 rounded-md outline-1 hover:outline-0 hover:bg-gray-300/40'>Wether</button>
        <button  >
             <Menu onClick={()=> setOpen(!open)} className={`${!open ? "block" : "hidden"}`} size={24} />
             <X onClick={()=> setOpen(!open)} className={`${open ? "block" : "hidden"}`} size={24}/>
        </button>
       </div>
    </div>
  )
}

export default Navbar