import React from "react";
import styles from "./Offers.module.scss";

const Offers = ({offers}) => {
  return (
    <>
    {
      offers && offers.length >0?
      (
      <div className={styles.offersWrapper}>
        {/* {offers.map((element, key) => {
            return (
              <div key={key}>
              <p>{element}</p>
              <br></br>
              </ div>
            )
        })
        } */}
        <p>Offer 1 blah blah blah blahblah blahblah blah</p>
      
      </div>
      ):
      <></>
    }
   </> 
  )
}


export default Offers
