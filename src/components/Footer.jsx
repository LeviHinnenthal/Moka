import React from 'react'
import Logo from '../assets/Img/logo.png'
const Footer = () => {
  return (
    <div className='flex justify-between items-center w-full pt-14 md:pt-3 py-3 px-4 md:py-6 md:px-10 items-cente'>
    <img src={Logo} alt="" />
    <div className='text-white text-xs md:text-lg'>All rights reserved. Gymme 2021.</div>
    </div>
  )
}

export default Footer
