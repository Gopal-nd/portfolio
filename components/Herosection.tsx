import React from 'react'
import {HERO_CONTENT} from '../constants'
import Image from 'next/image'
import profilePic from '../assets/gopal.jpeg'
import {delay, motion} from 'framer-motion'

const container = (delay:string|any)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
}  )  

               
const Herosection = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className='flex flex-col items-center lg:items-center'>
                <motion.h1 
            variants={container(0)}
                initial='hidden'
                animate='visible'
             
                className='pb-16 mt-4 text-6xl font-light  tracking-tight lg:mt-16 lg:text-9xl'>
                    Gopal 
                </motion.h1>
                <motion.span
                   variants={container(0.5)}
                   initial='hidden'
                   animate='visible'
                className=' bg-gradient-to-r from-pink-100 via-pink-300 to bg-purple-500 bg-clip-text text-2xl tracking-tight text-transparent '>
                    Full Stack Developer
                </motion.span>
                <motion.p    variants={container(1)}
                initial='hidden'
                animate='visible' className='my-2 max-w-xl py-6 px-4 text-muted-foreground '>
                    {HERO_CONTENT}
                </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div   
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className="flex justify-center">
                <Image src={profilePic??''} alt='image' className='p-10 rounded-full ' />
                </motion.div>
                </div>
        </div>

    </div>
  )
}

export default Herosection