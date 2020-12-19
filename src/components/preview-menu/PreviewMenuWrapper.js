// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuSectionModal from "./MenuSectionModal/MenuSectionModal";
import Offers from "./Offers/Offers";
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
      <div className="container" style={{ marginTop: 190 }}>
        <MenuWrapper
          setCurrentSection={setCurrentSection}
          restaurantDetails={restaurantDetails}
          customizedMenu={customizedMenu}
        />

        <MenuSectionModal
          currentSection={currentSection}
          categories={restaurantDetails.menu.categories.map((item) => {
            return {
              category: item.title || " ",
              count: item.items.length,
            };
          })}
        />
      </div>
      <Offers offers={["offer1"]} />
    </>
  );
};

export default PreviewMenuWrapper;
