import { link } from 'fs';
import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai';

const NavBar = () => {
    
        const links = [
            {label: 'Dashboard', href: '/'},
            {label: 'Issues', href: '/issues'}
        ]
    

  return (
    <nav className='flex space-x-6 border-b-2 mb-5 px-5 h-14 items-center'>
        <Link href="/"  ><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
            key={link.href} 
            className='text-zinc-400 hover:text-zinc-100 transition-colors' 
            href= {link.href}>{link.label}</Link> )}
            
        </ul>
    </nav>
  )
}

export default NavBar