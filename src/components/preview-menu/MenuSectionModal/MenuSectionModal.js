import React from "react";
import Popup from "reactjs-popup";
import styles from "./MenuSectionModal.module.scss";
export default (props) => {
  const scrollHandler = (category) => {
    let el = document.getElementById(
      category.trim().toLowerCase().split(" ").join("-")
    );
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  let content = props.categories.map(({ category, count }, index) => {
    let isActive =
      props.currentSection.trim().toLowerCase().split(" ").join("-") ===
      category.trim().toLowerCase().split(" ").join("-");
    return (
      <a onClick={() => scrollHandler(category)} key={index}>
        <div style={isActive ? { fontWeight: "bold", color: "#000000" } : {}}>
          {isActive ? <div className={styles.dot}></div> : <div />}
          <span>{category}</span>
          <span style={{ textAlign: "right" }}>{count}</span>
        </div>
      </a>
    );
  });
  return (
    <Popup
      trigger={<button className={styles.button}>BROWSE MENU</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className={styles.body}>{content}</div>
        </div>
      )}
    </Popup>
  );
};
