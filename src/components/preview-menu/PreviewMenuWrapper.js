// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuSectionModal from "./MenuSectionModal/MenuSectionModal";
import Offers from './Offers/Offers';
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
     <Offers offers={['offer1']}/>
    </div>
  );
};

export default PreviewMenuWrapper;
