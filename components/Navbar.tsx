import { GithubIcon,  LinkedinIcon, TwitterIcon } from 'lucide-react'
import {FaLinkedin,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
  <nav className='flex py-6  justify-between px-6 border-b-2 items-center'>
    <div className="flex flex-shrink-0 item-center">
      <h1 className='text-white font-semibold text-3xl'>Gopal</h1>
    </div>
    <div className=" flex items-center justify-center gap-4">
      <Link href={'https://www.linkedin.com/in/gopal-n-d-65934b216/'} target='_blank'>
    <FaLinkedin size={30}/>
      </Link>
      <Link href={'https://github.com/Gopal-nd'} target='_blank'>
    <FaGithub size={30}/>
      </Link>
      <Link href={'https://x.com/GOPALND282895'} target='_blank'>
    <FaTwitter size={30}/>
      </Link>
      <Link href={'https://www.instagram.com/gopal-nd1/'} target='_blank'>
    <FaInstagram size={30}/>
      </Link>
    </div>
  </nav>
  )
}

export default Navbar