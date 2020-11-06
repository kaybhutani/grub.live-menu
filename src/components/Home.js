import React from 'react'
import QrReader from 'react-qr-scanner'

const Home = () => {
  const scanHandler = (data) => {
    
    if(data!=null && data.includes('glqr.me')) {
      window.location.href = data
    }
  }
  return (
    <div className='container' style={{textAlign: "center"}}>
      <h1>Scan QR Code</h1>
      <br></br>
      <QrReader
          style={{width: '80%', margin: 'auto'}}
          
          facingMode = 'front'
          onError = {(error) => console.log(error)}
          onScan = {(data) => scanHandler(data)}
          />
    </div>
  )
}

export default Home