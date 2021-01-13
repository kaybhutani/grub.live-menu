import React from "react";
import Popup from "reactjs-popup";

const StayTuned = (restaurantDetails) => {
  return (
    <div>
      Stay tuned with offers, events and more from {restaurantDetails.name}. Enter your details below.

      <input className="form-input" type="text" name="phoneNumber" placeholder="Phone Number, Eg: +91 9999999999"></input>
      <input className="form-input" type="email" name="email" placeholder="Email ID, Eg: johndoe@gmail.com"></input>
    </div>
  )
}

export default StayTuned