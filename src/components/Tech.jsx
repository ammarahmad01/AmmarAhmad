import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMobile } from "../hooks/useMobile";

const Tech = () => {
  const isMobile = useMobile(768);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28 flex justify-center items-center' key={technology.name}>
          {isMobile ? (
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className='w-20 h-20 rounded-full bg-tertiary border border-[#915EFF]/20 shadow-card flex justify-center items-center relative group backdrop-blur-md cursor-pointer'
              whileHover={{ scale: 1.1, borderColor: "#915eff" }}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 object-contain z-10 transition-transform duration-300 group-hover:rotate-6'
              />
            </motion.div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

