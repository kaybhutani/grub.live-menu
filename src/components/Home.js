import React, { useEffect } from 'react'
import Navigation from './Navigation'
const Home = () => {
  
  return (
    <>
    <Navigation />
    <div className='container' style={{textAlign: "center", minHeight: 600}}>
      <h2>Looks like you scanned a wrong QR, visit <a href='https://grub.live' target='_blank'>www.grub.live</a> to know more about us.</h2>
      
    </div>
    </>
  )
}

export default Home