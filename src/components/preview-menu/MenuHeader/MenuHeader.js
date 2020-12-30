import React, { useState, useEffect } from "react";
import styles from "./MenuHeader.module.scss";
import SocialIcon from "./SocialIcons";
import SearchIcon from "../../../assets/images/searchIcon.svg";
const MenuHeader = (props) => {
  const restaurantDetails = props.restaurantDetails
  let [searchQuery, setSearchQuery] = useState("");

  const filterQuery = () => {
    console.log(`search called: ${searchQuery}`);
    if (searchQuery === "") {
      props.setRestaurantDetails(props.constRestaurantDetails);
    }
    else {
      // changing state obj to json
      const tempRestaurantDetails = props.constRestaurantDetails

      const categories = [];

      tempRestaurantDetails.menu.categories.forEach((category) => {
        if (
          category.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim())
        ) {
          categories.push(category);
        } else {
          const tempItems = [];
          for (let i = 0; i < category.items.length; i++) {
            if (
              category.items[i].itemName
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim())
            )
              tempItems.push(category.items[i]);
          }
          category.items = tempItems;
          if (tempItems.length > 0) {
            categories.push(category);
          }
        }
      });
      tempRestaurantDetails.menu.categories = categories;
      console.log(tempRestaurantDetails)
      props.setRestaurantDetails(tempRestaurantDetails);
    }
  };

  useEffect(() => {
    filterQuery(searchQuery);
  }, [searchQuery]);

  let socialIcons = [];
  if (restaurantDetails.social) {
    for (let social in restaurantDetails.social) {
      socialIcons.push(
        <SocialIcon
          key={social}
          platform={social}
          link={restaurantDetails.social[social]}
        />
      );
    }
  }
  return (
    <div className={styles.MenuHeader} style={
      restaurantDetails.menu.theme?{
        ...restaurantDetails.menu.theme
      }:{}
    }>
      <div style={{ padding: 8 }}>
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
    </div>
  );
};

export default MenuHeader;
