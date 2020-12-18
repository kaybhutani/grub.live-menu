import React from "react";
import styles from "./Offers.module.scss";

const Offers = ({offers}) => {

  return (
    <>
    {
      offers && offers.length >0?
      (<div className={styles.offersWrapper}>
        <p>Offer 1</p>
      </div>):
      <></>
    }
   </> 
  )
}


export default Offers
