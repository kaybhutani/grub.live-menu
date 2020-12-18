import React, { useEffect } from "react";
import MenuCategory from "./MenuCategory/MenuCategory";
import MenuItem from "./MenuItem";
const MenuWrapper = (props) => {
  const restaurantDetails = props.restaurantDetails;
  const customizedMenu = props.customizedMenu;

  return (
    <div>
      {restaurantDetails.menu.categories.map((element, key) => {
        return element.title !== "" ? (
          <MenuCategory
            key={key}
            title={element.title}
            items={element.items}
            theme={restaurantDetails.menu.theme}
          />
        ) : (
          <div key={key}></div>
        );
      })}
    </div>
  );
};

export default MenuWrapper;
