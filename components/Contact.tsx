import React from 'react'
import {CONTACT} from '../constants'

const Contact = () => {
  return (
    <div className='border-t border-neutral-900 pb-4 '>
   
  <div className='text-center tracking-tight'>
   
    <p className='my-2 '>{CONTACT.phoneNo}</p>
    <a href='#' className='border-b '>{CONTACT.email}</a>
  </div>
  
  </div>
  )
}

export default Contact