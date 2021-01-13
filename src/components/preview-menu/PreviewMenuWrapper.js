// import all components here

import React, { useEffect, useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import BottomBarWrapper from "./BottomBarWrapper/BottomBarWrapper";
import StayTuned from "./StayTuned/StayTuned";
const PreviewMenuWrapper = (props) => {
  const constRestaurantDetails = JSON.parse(
    JSON.stringify(props.restaurantDetails)
  );
  const [restaurantDetails, setRestaurantDetails] = useState(
    props.restaurantDetails
  );
  const [showStayTuned, setShowStayTuned] = useState(false);
  const getFirstCategory = () => {
    if (restaurantDetails.menu.categories[0])
      return restaurantDetails.menu.categories[0].title;
    else return "";
  };
  const [currentSection, setCurrentSection] = useState(getFirstCategory());

  useEffect(() => {
    setTimeout(() => setShowStayTuned(true), 8000);
  }, []);
  return (
    <>
      <MenuHeader
        restaurantDetails={restaurantDetails}
        setRestaurantDetails={setRestaurantDetails}
        constRestaurantDetails={constRestaurantDetails}
      />
      <div style={{ minHeight: "400px" }}>
        <MenuWrapper
          setCurrentSection={setCurrentSection}
          restaurantDetails={restaurantDetails}
        />
      </div>
      <BottomBarWrapper
        currentSection={currentSection}
        restaurantDetails={restaurantDetails}
      />
      <StayTuned
        restaurantDetails={restaurantDetails}
        showStayTuned={showStayTuned}
        setShowStayTuned={setShowStayTuned}
        menuId={props.menuId}
      />
    </>
  );
};

export default PreviewMenuWrapper;
