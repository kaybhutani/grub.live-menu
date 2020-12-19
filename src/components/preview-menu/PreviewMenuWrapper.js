// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import BottomBarWrapper from './BottomBarWrapper/BottomBarWrapper'
const PreviewMenuWrapper = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState(
    props.restaurantDetails
  );
  const [currentSection, setCurrentSection] = useState(
    restaurantDetails.menu.categories[0].title
  );

  const customizedMenu = props.customizedMenu;
  return (
    <>
      <MenuHeader restaurantDetails={restaurantDetails} />
      <div className="container">
        <MenuWrapper
          setCurrentSection={setCurrentSection}
          restaurantDetails={restaurantDetails}
          customizedMenu={customizedMenu}
        />
      </div>
      <BottomBarWrapper currentSection={currentSection} restaurantDetails={restaurantDetails}/>
    </>
  );
};

export default PreviewMenuWrapper;
