import React from 'react'
import yellowLogo from '../assets/images/grub.live-logo-yellow.svg'
const Footer = () => {


  return (
    <footer>
        <div>
          <img src={yellowLogo} alt='Grub.live logo' className='logo'></img>
          <div>Rejuvenating the dining experience.</div>
        </div>
        <div className='footer-links'>
          <a href='https://grub.live/#/contact' className='hyperlink-invert'>Contact Us</a>
          <a href='https://grub.live/#/how-it-works ' className='hyperlink-invert'>How it works</a>
          <a href='https://grub.live/#/about' className='hyperlink-invert'>About Us</a>
        </div>
        <br></br>
        <br></br>
      <span>Made with ❤ in India</span><br></br>
      <span>© 2020 Grub.live</span>
    </footer>
  )
}

export default Footer