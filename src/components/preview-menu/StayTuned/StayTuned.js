import React from "react";
import styles from "./StayTuned.module.scss"
const StayTuned = ({restaurantDetails, showStayTuned}) => {

  return (
    <>
    {
      showStayTuned? 
      (<div className={styles.popupDiv}
        modal
      >
        Stay tuned with offers, events and more from {restaurantDetails.name}. Enter your details below.

        <input className="form-input" type="tel" pattern="[0-9]{10}" required name="phoneNumber" placeholder="Phone Number, Eg:   9999999999"></input>
        <input className="form-input" type="email" name="email" placeholder="Email ID, Eg: johndoe@gmail.com"></input>
      </div>)
    :
      (<></>)
    }
  </>
  )
}

export default StayTuned