import React, { useState, useEffect } from "react";
import styles from "./MenuHeader.module.scss";
import SocialIcon from "../../SocialIcons";
import SearchIcon from "../../../assets/images/searchIcon.svg";
const MenuHeader = ({ image, name, socials, filterQuery }) => {
  let [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    filterQuery(searchQuery);
  }, [searchQuery, filterQuery]);
  let socialIcons = [];
  for (let social in socials) {
    socialIcons.push(
      <SocialIcon key={social} platform={social} link={socials[social]} />
    );
  }
  return (
    <div className={styles.MenuHeader}>
      <div className={styles.imgWrapper}>
        <img src={image} alt="Logo" />
      </div>

      <div className={styles.firstRow}>
        <span>{name}</span>
        <div className={styles.socialIcons}>{socialIcons}</div>
      </div>
      <div className={styles.secondRow}>
        <input
          type="text"
          placeholder="Search Dishes eg. Chilly chicken"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button>
          <img src={SearchIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MenuHeader;
