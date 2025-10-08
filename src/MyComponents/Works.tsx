import React from 'react'

function Works() {
  return (
    <div className='h-[90vh] w-full flex justify-between items-center'>
        <div className='h-full flex flex-col w-1/2 justify-center items-center gap-2'>
            <h1 className='text-5xl font-bold'>Ready to work together?</h1>
            <p className='text-xl text-center'>You’re looking for a reliable construction partner or you’re looking to take the next step in your career, we want to hear from you!</p>
            <button className='rounded-full bg-amber-600 py-3 px-6 text-white font-bold'>Build a Project</button>
        </div>
        <div className='h-full  '>
        <img src="public/images/building-2.png" className='h-full w-full' alt="" />
        </div>
    </div>
  )
}

export default Works