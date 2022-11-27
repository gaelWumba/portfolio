import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import logo from '../../assets/logo2.png'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-5 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center font-sono font-medium'>
      
      <div>
        <Image
          src={logo}
          alt="Picture of the author"
          className='w-[60px] h-[60px] opacity-90 animate-pulse'
        />
      </div>
      <motion.ul
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

          <li> <Link href="/home">// home</Link> </li>
          <li> <Link href="/about">// about</Link> </li>
          <li> <Link href="/projects">// competences</Link> </li>
          <li> <Link href="/projects">// projects</Link> </li>
      </motion.ul>
    </header>
  )
}