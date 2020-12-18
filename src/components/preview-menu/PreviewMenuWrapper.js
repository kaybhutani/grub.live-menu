// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuSectionModal from "./MenuSectionModal/MenuSectionModal";
const PreviewMenuWrapper = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState(
    props.restaurantDetails
  );
  const customizedMenu = props.customizedMenu;
  return (
    <div>
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
    </div>
  );
};

export default PreviewMenuWrapper;
