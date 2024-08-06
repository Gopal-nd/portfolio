import React from 'react'
import {PROJECTS} from '../constants'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
    <motion.h1 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:0.5}}
    className='my-20  text-center text-4xl'>
    Projects
  </motion.h1>

      <div className='flex flex-col justify-center items-center gap-4'>
    
        {PROJECTS.map((proj,ind)=>(
            <div key={ind} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:-100}}
                 transition={{duration:1}}
                className="w-full  lg:w-1/4">
                  <Link href={proj.Live}>
                <Image src={proj.image} alt={proj.title}  className='mb-6 p-4 w-[150] h-[150] lg:w-[200] lg:h-[200] rounded-xl' />
                  </Link>
                </motion.div>
                <motion.div 
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:100}}
                 transition={{duration:1}}
                className="w-full flex justify-center p-4 flex-col items-start max-w-xl lg:w-3/4">
                <p className="mb-2 font-semibold">
                    {proj.title}
                </p>
                <p className='mb-4 text-neutral-500'>{proj.description}</p>
                <div className='flex gap-2'>

                {
                    proj.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                    ))
                }
                </div>
                <div className='p-2 flex gap-4'>

                <Link href={proj.Live}><button className='px-2 py-2 rounded-lg bg-black border-1 border-white text-white font-medium '>Live Link</button></Link>
                <Link href={proj.Git}><button className='px-2 py-2 rounded-lg  border-1 border-white bg-black text-white font-medium '>Git Repo</button></Link>
                </div>
                </motion.div>
            </div>
        ))}
      </div>
    
</div>
  )
}

export default Projects