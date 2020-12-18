import React from "react";
import Popup from "reactjs-popup";
import styles from "./MenuSectionModal.module.scss";
export default (props) => {
  let content = props.categories.map(({ category, count }, index) => (
    <a href={`#${category.trim().toLowerCase().split(" ").join("-")}`}>
      <div key={index}>
        <span>{category}</span>
        <span>{count}</span>
      </div>
    </a>
  ));
  return (
    <Popup
      trigger={<button className={styles.button}>Browse Menu</button>}
      modal
      nested
    >
      {(close) => (
        <div className={styles.modal}>
          <div className={styles.body}>{content}</div>
        </div>
      )}
    </Popup>
  );
};
