import React from "react";
import propTypes from "prop-types";
const MenuItem = ({ itemName, itemDescription, itemPrice, customStyling }) => {
  return (
    <div className="menu-item">
      <p className="item-name">{itemName}</p>
      <p className="item-price">{itemPrice}</p>
      {itemDescription ? (
        <i className="item-description">{itemDescription}</i>
      ) : null}
    </div>
  );
};

MenuItem.propTypes = {
  itemName: propTypes.string.isRequired,
  itemDescription: propTypes.string.isRequired,
  itemPrice: propTypes.string.isRequired,
  customStyling: propTypes.string,
};

export default MenuItem;
