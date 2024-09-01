import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navbar() {
  // nav is starting off false
  const [nav, setNav] = useState(false)
  // when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav)

  return (
    <nav className='flex justify-between p-5 items-center border-b bg-[#e7e7e7d1] nav'>
      <h1 className='text-4xl logo'>ABC Bank</h1>
      <ul className='hidden  md:flex gap-6'>
        <DesktopNav/>
      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <MobileNav/>
      </ul>
    </nav>
  )
}

export default Navbar