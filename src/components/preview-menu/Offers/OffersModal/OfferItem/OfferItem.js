import React from "react";
import styles from "./OfferItem.module.scss";
const OfferItem = ({ offAmount, content }) => {
  return (
    <div className={styles.OfferItem}>
      {
        offAmount?
          <h5>{offAmount}% OFF </h5>
        :
          <></>
      }
      <p>{content}</p>
      <hr />
    </div>
  );
};

export default OfferItem;
