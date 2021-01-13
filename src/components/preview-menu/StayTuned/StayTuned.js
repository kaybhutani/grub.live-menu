import React, { useState } from "react";
import styles from "./StayTuned.module.scss"
import {apiBaseUrl} from "../../../config.json"

const StayTuned = ({restaurantDetails, showStayTuned, setShowStayTuned, menuId}) => {

  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('userPhoneNumber'))
  const [emailId, setEmailId] = useState(localStorage.getItem('userEmailId'))
  
  const submitHandler = () => {
    setShowStayTuned(false)
    localStorage.setItem('userPhoneNumber', phoneNumber)
    localStorage.setItem('userEmailId', emailId)
    localStorage.setItem(menuId, true)
    fetch(`${apiBaseUrl}/users/add/${menuId}`, {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"number": phoneNumber, "email": emailId})
    })
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
            {/* <h2>Offers and more...</h2> */}
          <div className={styles.formDiv}>
            <p className={styles.head}>Enter your details to stay tuned with <b>Exciting Offers, Events</b>
              and more from <i><b>{restaurantDetails.restaurantName}</b></i> or 
              <a onClick={e => {e.preventDefault(); setShowStayTuned(false)}}> <u>skip</u></a> for now.</p>
            <div className={styles.formGroup}>
              <p>Phone Number <span style={{color: "red"}}>*</span></p>
              <select className={styles.formSelect} disabled={true}>
                <option selected={true}>+91</option>
              </select>
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