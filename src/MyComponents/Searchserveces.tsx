import React from 'react'

function Searchserveces() {
  return (
    <div className='h-[40vh] pt-14 flex flex-col gap-4 justify-center items-center w-full'>
        <h1 className='text-3xl text-amber-600'>Search Our Compani Serveces</h1>
        <input type="search" className='w-[60%] p-3 outline-0 rounded-full border border-gray-400' placeholder='Search Our Serveces' />
    </div>
  )
}

export default Searchserveces