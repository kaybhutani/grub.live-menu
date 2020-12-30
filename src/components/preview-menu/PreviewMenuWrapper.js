// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import BottomBarWrapper from "./BottomBarWrapper/BottomBarWrapper";
const PreviewMenuWrapper = (props) => {
  const constRestaurantDetails = JSON.parse(JSON.stringify(props.restaurantDetails))
  const [restaurantDetails, setRestaurantDetails] = useState(props.restaurantDetails)
  const getFirstCategory = () => {
    if(restaurantDetails.menu.categories[0]) return restaurantDetails.menu.categories[0].title
    else return ""
  }
  const [currentSection, setCurrentSection] = useState(
    getFirstCategory()
  );

  return (
    <>
      <MenuHeader 
        restaurantDetails={restaurantDetails}
        setRestaurantDetails={setRestaurantDetails}
        constRestaurantDetails={constRestaurantDetails}
      />
      <div style={{ minHeight: '400px' }}>
        <MenuWrapper
          setCurrentSection={setCurrentSection}
          restaurantDetails={restaurantDetails}
        />
      </div>
      <BottomBarWrapper
        currentSection={currentSection}
        restaurantDetails={restaurantDetails}
      />
    </>
  );
};

export default PreviewMenuWrapper;
