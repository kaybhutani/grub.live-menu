import React from "react";
import styles from "./StayTuned.module.scss"
const StayTuned = ({restaurantDetails, showStayTuned}) => {

  return (
    <>
    {
      showStayTuned? 
      (
        <div className={styles.popupContainer}>
          <div className={styles.popupDiv}
            modal
          >
          <div className={styles.formDiv}>
            <h4>Stay tuned with offers, events and more from {restaurantDetails.name}. Enter your details below.</h4>
            <div className={styles.formGroup}>
              <p>Phone Number</p>
              <input className={styles.formIput} type="tel" pattern="[0-9]{10}" required name="phoneNumber" placeholder="Eg:   9999999999"></input>
            </div>
            <div className={styles.formGroup}>
              <p>Email ID</p>
              <input className={styles.formIput} type="email" name="email" placeholder="Email ID, Eg: johndoe@gmail.com"></input>
            </div>
            
          </div>
          <button className={styles.saveButton}> 
            Sign me up!
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