// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import BottomBarWrapper from "./BottomBarWrapper/BottomBarWrapper";
const PreviewMenuWrapper = ({ restaurantDetails, customizedMenu }) => {
  const [currentSection, setCurrentSection] = useState(
    restaurantDetails.menu.categories[0].title
  );

  return (
    <>
      <MenuHeader restaurantDetails={restaurantDetails} />
      <div className="container" style={{ marginTop: 190 }}>
        <MenuWrapper
          setCurrentSection={setCurrentSection}
          restaurantDetails={restaurantDetails}
          customizedMenu={customizedMenu}
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
