import React from 'react'
import   aboutImg from '../assets/about.jpg'
import Image from 'next/image'
import {ABOUT_TEXT} from '../constants'
import {motion} from 'framer-motion'
const Aboutme = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h1 className='my-20  text-center text-4xl'>
            About
        <span className='text-neutral-500 '> Me</span>
        </h1>
        <div className='flex flex-wrap'>
            <motion.div 
            
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-110}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
            <div className="flex items-center justify-center">

            <Image src={aboutImg} alt="about" className='p-10  rounded-full'/>
            </div>
            </motion.div>
            <motion.div 
             
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:110}}
             transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
            <div className="flex items-center justify-center">
            <p className='my-2 max-w-xl py-6 px-4'>{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Aboutme