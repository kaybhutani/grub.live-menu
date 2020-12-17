import React from "react";
import Popup from "reactjs-popup";
import styles from "./MenuSectionModal.module.scss";
export default () => (
  <Popup
    trigger={<button className={styles.button}>Browse Menu</button>}
    modal
    nested
  >
    {(close) => (
      <div className={styles.modal}>
        <div className={styles.body}>
          <div> Categories</div>
          <div> Categories</div>
        </div>
      </div>
    )}
  </Popup>
);
