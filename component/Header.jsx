import React from 'react'
import NavBar from './NavBar'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='flex justify-between '>
        <Logo />
        <NavBar />
    </div>
  )
}

export default Header