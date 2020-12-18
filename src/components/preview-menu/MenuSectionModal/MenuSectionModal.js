import React from "react";
import Popup from "reactjs-popup";
import styles from "./MenuSectionModal.module.scss";
export default (props) => {

  const scrollHandler = (category) => {
    let el = document.getElementById(category.trim().toLowerCase().split(" ").join("-"))  
    if(el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
  })
  }

  let content = props.categories.map(({ category, count }, index) => (
    <a onClick = {() => scrollHandler(category)}>
      <div key={index}>
        <span>{category}</span>
        <span>{count}</span>
      </div>
    </a>
  ));
  return (
    <Popup
      trigger={<button className={styles.button}>BROWSE MENU</button>}
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
