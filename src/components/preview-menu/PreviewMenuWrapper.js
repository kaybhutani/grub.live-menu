// import all components here

import React from "react";
import MenuWrapper from "./MenuWrapper";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuSectionModal from "./MenuSectionModal/MenuSectionModal";
const PreviewMenuWrapper = (props) => {
  const restaurantDetails = props.restaurantDetails;
  const customizedMenu = props.customizedMenu;

  return (
    <div>
      <MenuHeader
        image={restaurantDetails.logo}
        name={restaurantDetails.restaurantName}
        // For testing
        socials={{
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
        }}
        filterQuery={(payload) => console.log(payload)}
      />
      <MenuSectionModal />
      <MenuWrapper
        restaurantDetails={restaurantDetails}
        customizedMenu={customizedMenu}
      />
    </div>
  );
};

export default PreviewMenuWrapper;
