import React, { useState, useEffect } from "react";
import styles from "./MenuHeader.module.scss";
import SocialIcon from "./SocialIcons";
import SearchIcon from "../../../assets/images/searchIcon.svg";
const MenuHeader = (props) => {
  const restaurantDetails = props.restaurantDetails
  let [searchQuery, setSearchQuery] = useState("");
  const filterQuery = () => {
    console.log('search called')
  }
  useEffect(() => {
    filterQuery(searchQuery);
  }, [searchQuery, filterQuery]);
  
  let socialIcons = []
  if(restaurantDetails.social) {
    for (let social in restaurantDetails.social) {
      socialIcons.push(
        <SocialIcon key={social} platform={social} link={restaurantDetails.social[social]} />
      );
    }
  }
  return (
    <div className={styles.MenuHeader}>
      <div className={styles.imgWrapper}>
        <img src={restaurantDetails.logo} alt="Logo" />
      </div>

      <div className={styles.firstRow}>
        <span>{restaurantDetails.restaurantName}</span>
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
