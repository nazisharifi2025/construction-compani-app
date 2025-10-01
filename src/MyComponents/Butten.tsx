import React from "react";
import { motion } from "framer-motion";

function Butten() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#242424] text-white perspective-[1000px]">
      <motion.div
        className="relative w-48 h-48 [transform-style:preserve-3d]"
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-indigo-400 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateZ(96px)]">
          Front
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-cyan-400 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateZ(-96px)_rotateY(180deg)]">
          Back
        </div>

        {/* Right */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-green-500 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateX(96px)_rotateY(90deg)]">
          Right
        </div>

        {/* Left */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-pink-500 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateX(-96px)_rotateY(-90deg)]">
          Left
        </div>

        {/* Top */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-yellow-400 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateY(-96px)_rotateX(90deg)]">
          Top
        </div>

        {/* Bottom */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg font-bold text-lg border-2 border-purple-500 bg-gradient-to-br from-[#2a2a2a] to-[#383838] [transform:translateY(96px)_rotateX(-90deg)]">
          Bottom
        </div>
      </motion.div>
    </div>
  );
}

export default Butten;
