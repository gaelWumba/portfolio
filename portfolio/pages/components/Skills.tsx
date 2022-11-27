import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="flex flex-col mt-15 space-y-10 px-0 md:px-10">
        <motion.div className="bg-[#f76236] w-[600px] h-[700px] rounded-3xl"></motion.div>
      </div>
      <div className="mt-15 space-y-10 px-0 md:px-10">
        <motion.div className="bg-[#f76236] w-[600px] h-[700px] rounded-3xl"></motion.div>
      </div>
    </div>
  );
}
