import React from "react";
import { motion } from "framer-motion";
import topography from "../../assets/topography.png";
import wac from "../../assets/wac.png";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-100 font-alice text-2xl">
        There goes nothing
      </h3>

      <div className="-mb-20 md:mb-0 flex-shrink-0 object-cover md-rounded-lg md-w-64 md-h-95">
        <div className="group [perspective:1000px]">

        <div className='absolute inset-1 border-[5px] border-[#f76236] h-50 blur-lg animate-pulse'/>
        <div className='absolute inset-1 border-[5px] border-[#f76236] h-50 blur-lg animate-pulse'/>
        <div className='absolute inset-o border-[5px] border-[#f76236] h-50 blur-md animate-pulse'/>
        <div className='absolute inset-o border-[5px] border-[#f76236] h-50 blur-md animate-pulse'/>

          <div className="transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <motion.img
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="object-inset-0"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fminimalist-golden-topographic-map-background_23-2148593363.jpg&f=1&nofb=1&ipt=d056e07359dc0b8492e8a7b9f233d56b24affe3c7ee32a5ce282759650d7df5d&ipo=images"
            />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black h-ful [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <motion.div
                className="absolute top-2 left-80 w-10 h-10 bg-[#f76236] rounded-full opacity-60 animate-pulse blur-sm"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute top-2 left-32 w-10 h-10 bg-[#CF112D] rounded-full opacity-90 animate-spin blur-lg"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute right-28 bottom-16 w-5 h-5 bg-[#f76236] rounded-full  opacity-70 animate-ping blur-sm"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute left-16 w-10 h-10 bg-[#f76236] rounded-full  opacity-50 animate-bounce blur-md"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute w-10 h-10 bg-[#f76236] rounded-full  opacity-50 animate-pulse blur-sm"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute right-10 w-14 h-14 bg-[#0167B2] rounded-full opacity-70 animate-pulse blur-sm"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute left-10 w-4 h-4 bg-[#CF112D] rounded-ful opacity-30 animate-bounce blur-sm "
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute bottom-5 left-24 w-8 h-8 bg-[#f76236] rounded-full opacity-80 animate-spin blur-md"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute bottom-14 left-56 w-12 h-12 bg-[#CF112D] rounded-full opacity-20 animate-ping blur-sm"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />

              <motion.div
                className="absolute flex items-center justify-center top-10 left-80 w-32 h-32 bg-[#0167B2] rounded-full "
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h2 className="absolute top-10 uppercase text-slate-100 font-alice ">Web@cademie</h2>
                <p className="absolute bottom-10 uppercase  text-slate-100 font-alice ">by EPITECH</p>
              </motion.div>

              <motion.div
                className="absolute flex items-center justify-center right-28 bottom-16 w-32 h-32 bg-[#CF112D] rounded-full"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h2 className="absolute top-10 uppercase text-slate-100 font-alice ">Lycée</h2>
                <p className="absolute bottom-10 uppercase  text-slate-100 font-alice ">Saint-Gabriel</p>
              </motion.div>

              <motion.div
                className="absolute flex items-center justify-center left-24 w-32 h-32 bg-[#014878] rounded-full"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h2 className="absolute top-10 uppercase text-slate-100 font-alice ">S.D.V</h2>
                <p className="absolute bottom-10 uppercase  text-slate-100 font-alice ">Sup de Vinci</p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">There goes nothing...</h4>
        <p className="text-base">
          Lorem <span className="text-[#f76236]">ipsum</span> dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
