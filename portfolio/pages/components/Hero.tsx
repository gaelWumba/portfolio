import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

import NextButton from './NextButton';

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'


import webDev from '../../assets/webDev.gif'
import devApp from '../../assets/webMobile.gif'
import wall from '../../assets/wallp.png'
import logo from '../../assets/arrow1.png'
import Circle from './Circle';


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            '< Developpeur front end />',
            '< Developpeur mobile />',
        ],
        loop: true,
        delaySpeed: 3000,
    });
    return (
        <div className='relative bg-logo h-screen flex flex-col items-center justify-center'>
            {/* <div className='inner-cursor'/>
            <div className='outer-cursor'/> */}
            <Circle />
            <h2 className='absolute top-72 text-8xl font-alice '>WUMBA BUATU GAËL</h2>
            <h3 className='absolute top-96 text-2xl lg:text-2xl font-sono'>
                <span className='text-[#f76236]'>{text}</span>
                <Cursor cursorColor='#ffdb8a'/>
            </h3>
            <div className="relative top-8 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center h-32 w-full">
                <div className='flex items-center justify-center'>
                    <button className='bg-[#f76236] w-[60px] h-[60px] rounded-full'></button>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className='absolute w-[30px] h-[30px] opacity-80 animate-pulse cursor-pointer'
                    /> 
                </div>                  
                <motion.div
                    initial= {{
                    x: -810,
                    opacity: 0,
                    scale: 1,
                    }}
                    animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    }}
                    transition={{duration: 2}}
                    className='flex space-x-6 text-lg focus-within:shadow-lg'
                    >

                    <SocialIcon 
                        className='cursor-pointer SearchIcon'
                        network='linkedin'
                        fgColor='white'
                        bgColor='#f76236'
                    />
                    <SocialIcon 
                        className='cursor-pointer'
                        network='github'
                        fgColor='white'
                        bgColor='#f76236'
                    />
                    <SocialIcon 
                        className='cursor-pointer'
                        network='twitter'
                        fgColor='white'
                        bgColor='#f76236'
                    />
                </motion.div>
            </div>
        </div>
    )
}