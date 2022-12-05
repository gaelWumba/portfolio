import React from "react";
import { motion } from 'framer-motion'


type Props = {};

function Hero({}: Props) {
  return (

    <section className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-screen">
      <div className="flex flex-wrap md:flex-nowrap">
        <nav className="lg:mr-24 lg:w-4 fixed left-percentage hidden md:block xl:block">
          <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
            <a href="#home" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
            </a>
            <a href="#work" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
            </a>
          </div>
        </nav>
        <motion.div 
            initial = {{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              x: 1,
              opacity: 1,
              scale: 1,
            }}
            transition = {{
              duration: 2,
            }}
          className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36 ">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left z-10">What is now proved<br /> was once only imagined.</h1>
            <div className="w-full flex justify-center md:justify-start z-10">
              <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                <div>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                    <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                  </svg>								
                </div>
                  <a href="#myProjects"><span>Meet my imagination.</span></a>
              </button>
              </div>
          </motion.div>
      </div>
      
      <div className="flex flex-col justify-center items-center text-white -mt-6 md:mt-0 ">
        <h2 className="text-2xl font-poppins font-bold">Mes outils d'imagination</h2>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="flex flex-col justify-center items-center">
            <img src="reactNative.png" width={100} alt="" />
            <span>React.js</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="reactNative.png" width={100} alt="" />
            <span>React native</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="javascript.png" width={100} alt="" />
            <span>Javacript</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="symfony.png" width={100} alt="" />
            <span>Symfony</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="mongodb.png" width={100} alt="" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="mysql.png" width={100} alt="" />
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
