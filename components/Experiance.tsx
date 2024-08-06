import React from 'react'
import {EXPERIENCES} from '../constants'
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 px-4 pb-4 '>
    <motion.h1
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className='my-20  text-center text-4xl'>
    Experience
    </motion.h1>
    <div className=''>
       {
        EXPERIENCES.map((exp,index)=>{
            return (
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full p-4 lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400 '>{exp.year}</p>
                    </div>
                    <motion.div
                      whileInView={{opacity:1,x:0}}
                      initial={{opacity:0,x:100}}
                      transition={{duration:1}}
                    className='w-full lg:w-3/4'>
                    <p className='mb-2 font-semibold'>{exp.role} - <span className='text-sm text-purple-100'>{exp.company}</span></p>
                    <p className='mb-4 text-neutral-400'>
                        {exp.description}
                    </p>
                    {exp.technologies.map((tech,ind)=>(
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800' key={ind}>{tech}</span>
                    ))}
                    </motion.div>
                    
                </motion.div>
            )
        })
       }
        
    </div>
</div>
  )
}

export default Experience