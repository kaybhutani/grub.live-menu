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
          <div className='footer-item hyperlink-invert'>Contact Us</div>
          <div className='footer-item hyperlink-invert'>How it works</div>
          <div className='footer-item hyperlink-invert'>Feedback</div>
          <div className='footer-item hyperlink-invert'>About Us</div>
        </div>
        <br></br>
        <br></br>
      <span>Made with ❤ in India</span><br></br>
      <span>© 2020 Grub.live</span>
    </footer>
  )
}

export default Footer