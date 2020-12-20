import React from "react";
import propTypes from "prop-types";
const MenuItem = ({
  itemName = "",
  itemDescription = "",
  itemPrice = "",
  theme,
}) => {
  return (
    <>
      <tr className="menu-item">
        <td>
          <p
            className="item-name"
            style={{
              WebkitTextStroke: `0.02em ${theme.color}`,
            }}
          >
            {itemName}
          </p>
          {itemDescription ? (
            <i className="item-description">{itemDescription}</i>
          ) : null}
        </td>
        <td>
          <p
            className="item-price"
            style={{
              WebkitTextStroke: `0.02em ${theme.color}`,
            }}
          >
            {itemPrice}
          </p>
        </td>
      </tr>
    </>
  );
};

MenuItem.propTypes = {
  itemName: propTypes.string,
  itemDescription: propTypes.string,
  itemPrice: propTypes.string,
  theme: propTypes.object,
};

export default MenuItem;
