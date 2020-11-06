import React from 'react'
import QrReader from 'react-qr-scanner'

const Home = () => {
  const scanHandler = (data) => {
    
    if(data!=null) {
      if(data.includes('glqr.me'))
        window.location.href = data
      else
        alert(`That doesn't look a QR code we generated!`)
    }
  }
  return (
    <div className='container' style={{textAlign: "center"}}>
      {/* <h1>Scan QR Code</h1> */}
      <br></br>
      <QrReader
          style={{width: '80%', margin: 'auto'}}
          
          facingMode = 'rear'
          onError = {(error) => console.log(error)}
          onScan = {(data) => scanHandler(data)}
          />
    </div>
  )
}

export default Home