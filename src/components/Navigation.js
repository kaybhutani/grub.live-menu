import React from 'react'
import logo from '../assets/images/grub.live-logo.svg'

const Navigation = () => {
  
  return (
    <div>
      <nav>      
        <div className='nav-item'>
          <a href='https://grub.live'><img className='logo' src={logo} alt='Grub.live logo'  /></a>
        </div>
      
      </nav>
    </div>
  )
}

export default Navigation
