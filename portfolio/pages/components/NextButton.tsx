import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Triangle } from 'react-loader-spinner'

import { SocialIcon } from 'react-social-icons'

import PortoflioBg from '../../assets/arrow1.png'


type Props = {}

export default function NextButton({}: Props) {
  return (
    <motion.div 
      transition={{duration: 5}} className='sticky bottom-10 flex justify-center items-center'>
        <div className='absolute bottom-0'>
          <Triangle
              height="60"
              width="60"
              color="#ffdb8a"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              visible={true}
            />
        </div>
        <Link href="#About">
          <Image src={PortoflioBg} alt="Picture of the author" width={25} className="animate-bounce "/>
        </Link>
    </motion.div>
    
  )
}