import React from 'react'

function A() {
  return (
    <div className='w-full h-full -z-50 flex justify-center items-center'> 
       <motion.div
              className="relative w-80 h-80 [transform-style:preserve-3d]"
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              {/* Front */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-indigo-400 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateZ(140px)]">
                <img src="/images/house1.webp" className='h-[90%] w-[90%] '  alt="" />  
              </div>
      
              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-cyan-400 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateZ(-140px)_rotateY(180deg)]">
                <img src="/images/house.avif" className='h-[90%] w-[90%] '  alt="" />
              </div>
      
              {/* Right */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-green-500 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateX(140px)_rotateY(90deg)]">
                <img src="/images/bouldeng.avif" className='h-[90%] w-[90%] '  alt="" />
              </div>
      
              {/* Left */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-pink-500 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateX(-140px)_rotateY(-90deg)]">
                <img src="/images/boulding].webp" className='h-[90%] w-[90%] '  alt="" />
              </div>
      
              {/* Top */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-yellow-400 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateY(-140px)_rotateX(90deg)]">
                <img src="/images/p.avif" className='h-[90%] w-[90%] '  alt="" />
              </div>
      
              {/* Bottom */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-purple-500 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateY(140px)_rotateX(-90deg)]">
                <img src="/images/p1.avif" className='h-[90%] w-[90%] '  alt="" />
              </div>
            </motion.div>
     </div>
  )
}

export default A