import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <ul className='flex gap-3 '>
        <li className=' '>
            <Link href='/'></Link>
        </li>
        <li className=' '>
            <Link href='/' ></Link>
        </li>
        <li className=' '>
            <Link href='/'></Link>
        </li>
        <li className=' '>
            <Link href='/'></Link>
        </li>
    </ul>
  )
}

export default NavBar