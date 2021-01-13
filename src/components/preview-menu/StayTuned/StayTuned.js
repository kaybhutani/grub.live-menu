import React, { useState } from "react";
import styles from "./StayTuned.module.scss"
const StayTuned = ({restaurantDetails, showStayTuned, setShowStayTuned, menuId}) => {

  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('userPhoneNumber'))
  const [emailId, setEmailId] = useState(localStorage.getItem('userEmailId'))
  const submitHandler = () => {
    setShowStayTuned(false)
    localStorage.setItem('userPhoneNumber', phoneNumber)
    localStorage.setItem('userEmailId', emailId)
    localStorage.setItem(menuId, true)
  }

  return (
    <>
    {
      showStayTuned&&!localStorage.getItem(menuId)? 
      (
        <div className={styles.popupContainer}>
          <div className={styles.popupDiv}
            modal
          >
          <div className={styles.formDiv}>
            <h4>Stay tuned with offers, events and more from {restaurantDetails.name}. Enter your details below.</h4>
            <div className={styles.formGroup}>
              <p>Phone Number</p>
              <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className={styles.formIput} type="tel" pattern="[0-9]{10}" required name="phoneNumber" placeholder="Eg:   9999999999"></input>
            </div>
            <div className={styles.formGroup}>
              <p>Email ID</p>
              <input value={emailId} onChange={e => setEmailId(e.target.value)} className={styles.formIput} type="email" name="email" placeholder="Email ID, Eg: johndoe@gmail.com"></input>
            </div>
            
          </div>
          <button className={styles.saveButton} onClick={() => submitHandler()}> 
            Subscribe
          </button>
        </div>
      </div>)
    :
      (<></>)
    }
  </>
  )
}

export default StayTuned