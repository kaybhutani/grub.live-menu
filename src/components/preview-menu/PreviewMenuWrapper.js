// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuSectionModal from "./MenuSectionModal/MenuSectionModal";
import currentSectionContext from "../../context/currentMenuSection";
import Offers from "./Offers/Offers";
const PreviewMenuWrapper = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState(
    props.restaurantDetails
  );
  const [currentSection, setCurrentSection] = useState(
    restaurantDetails.menu.categories[0].title
  );
  const updateCurrentSection = (title) => {
    console.log(currentSection);
    setCurrentSection(title);
  };

  const customizedMenu = props.customizedMenu;
  return (
    <currentSectionContext.Provider
      value={{ currentSection, updateCurrentSection }}
    >
      <MenuHeader restaurantDetails={restaurantDetails} />
      <div className="container">
        <MenuWrapper
          restaurantDetails={restaurantDetails}
          customizedMenu={customizedMenu}
        />

        <MenuSectionModal
          categories={restaurantDetails.menu.categories.map((item) => {
            return {
              category: item.title || " ",
              count: item.items.length,
            };
          })}
        />
      </div>
      <Offers offers={restaurantDetails.offers} />
    </currentSectionContext.Provider>
  );
};

export default PreviewMenuWrapper;
