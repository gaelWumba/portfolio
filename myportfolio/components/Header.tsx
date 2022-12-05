import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {

  return (

    <header className="sticky top-0 z-20 py-2">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">Gael WUMBA BUATU</div>
        <motion.div 
          initial = {{
                  x: -500,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  x: 1,
                  opacity: 1,
                  scale: 1,
                }}
                transition = {{
                  duration: 2,
                }}
          className="hidden md:flex space-x-12 items-center">
          <a href="#hero" className="text-selected-text">Home</a>
          <a href="#myProjects">Projets</a>
          <a href="#contact">
            <button className="px-6 py-2 bg-theme font-bold">Let's work</button>
          </a>
        </motion.div>
        <div className="md:hidden">
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
