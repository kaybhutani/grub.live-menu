import React, { useEffect } from 'react'

const Home = () => {
  useEffect(()=> {
    setTimeout(() => window.location = 'https://grub.live', 2000)
  })
  return (
    <div className='container' style={{textAlign: "center"}}>
      <h2>Looks like you scanned a wrong QR, redirecting you to <a href='www.grub.live'>www.grub.live</a></h2>
      
    </div>
  )
}

export default Home