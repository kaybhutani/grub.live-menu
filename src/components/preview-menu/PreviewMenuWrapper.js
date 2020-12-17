// import all components here

import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuSectionModal from "./MenuSectionModal/MenuSectionModal";
const PreviewMenuWrapper = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState(props.restaurantDetails)
  const customizedMenu = props.customizedMenu;

  return (
    <div className="container">
      <MenuHeader restaurantDetails={restaurantDetails}/>
      <MenuSectionModal />
      <MenuWrapper
        restaurantDetails={restaurantDetails}
        customizedMenu={customizedMenu}
      />
    </div>
  );
};

export default PreviewMenuWrapper;
