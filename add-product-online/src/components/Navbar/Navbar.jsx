import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/os.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" />
      <img src={navprofileIcon} alt="" />
    </div>
  )
}

export default Navbar
