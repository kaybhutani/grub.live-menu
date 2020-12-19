import React from "react";
import styles from "./Offers.module.scss";

const Offers = ({offers}) => {
  return (
    <>
    {
      offers && offers.length >0?
      (
      <div className={styles.offersWrapper}>
        <div className={styles.offersMarque}>
          <marquee>
            <span className={`eos-icons ${styles.starIcon}`}> star </span>
            {offers.map((element, key) => {
              return (
                <i>{element} <span className={`eos-icons ${styles.starIcon}`}> star </span></i>
              )
            })
            }
          </marquee>
        </div>
        <div className={styles.seeAllBtn}>
          See all <i className='eos-icons'>arrow_drop_up</i>
        </div>
      </div>
      ):
      <></>
    }
   </> 
  )
}


export default Offers
