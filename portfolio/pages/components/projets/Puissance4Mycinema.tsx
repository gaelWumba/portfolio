import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import puissance4 from "../../../assets/projets/puissance4.png";
import myCinema from "../../../assets/projets/mycinema.png";

type Props = {};

export default function Puissance4Mycinema({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="-mb-20 md:mb-0 flex-shrink-0 object-cover md-rounded-lg md-w-64 md-h-95">
        <div className="group [perspective:1000px] ">
          <div className="transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-[520px] h-[600px] rounded-3xl border-[1px] border-[#FFD933]">
            <div className="flex space-y-10 px-0 md:px-0">
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" rounded-3xl drop-shadow-lg "
              >
                <Image
                  src={puissance4}
                  alt="Picture of the author"
                  className="rounded-3xl w-[520px] h-[600px]"
                  // blurDataURL="data:..."
                  // placeholder="blur" // Optional blur-up while loading
                />
              </motion.div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-[#FFD933] [transform:rotateY(180deg)] [backface-visibility:hidden] w-[520px] h-[600px] rounded-3xl border-[1px] border-[#FFD933]">

            </div>
          </div>
        </div>
      </div>

      <div className="-mb-20 md:mb-0 flex-shrink-0 object-cover md-rounded-lg md-w-64 md-h-95">
        <div className="group [perspective:1000px] ">
          <div className="transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-[520px] h-[600px] rounded-3xl border-[1px] border-[#CB44AD]">
            <div className="flex space-y-10 px-0 md:px-0">
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" rounded-3xl drop-shadow-lg "
              >
                <Image
                  src={myCinema}
                  alt="Picture of the author"
                  className="rounded-3xl w-[520px] h-[600px]"
                  // blurDataURL="data:..."
                  // placeholder="blur" // Optional blur-up while loading
                />
              </motion.div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#CB44AD] [transform:rotateY(180deg)] [backface-visibility:hidden] w-[520px] h-[600px] rounded-3xl border-[1px] border-[#CB44AD]">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
