import React from "react";
import MenuCategory from "./MenuCategory/MenuCategory";
const MenuWrapper = (props) => {
  const restaurantDetails = props.restaurantDetails;

  return (
    <div className="menu-wrapper" style = {
      restaurantDetails.menu.theme? {
        ...restaurantDetails.menu.theme
      }: {}
    }>
      {restaurantDetails.menu.categories.map((element, key) => {
        return element.title !== "" ? (
          <MenuCategory
            key={key}
            setCurrentSection={props.setCurrentSection}
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

export default React.memo(MenuWrapper);
