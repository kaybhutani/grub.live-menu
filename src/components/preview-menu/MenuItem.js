import React from "react";
import propTypes from "prop-types";
const MenuItem = ({ itemName, itemDescription, itemPrice, customStyling , theme}) => {
  return (
      <>
        <tr style={{width: '100%'}}>
          <td>
            <p className="item-name" 
            style = {
              {
                WebkitTextStroke: `0.03em ${theme.color}`
              }
            }>{itemName}</p>
            {itemDescription ? (
              <i className="item-description">{itemDescription}</i>
            ) : null}
          </td>
          <td>
            <p className="item-price" 
              style = {
                {
                  WebkitTextStroke: `0.03em ${theme.color}`
                }
              }
            >{itemPrice}</p>
          </td>
      </tr> 
    </>
  );
};

MenuItem.propTypes = {
  itemName: propTypes.string.isRequired,
  itemDescription: propTypes.string.isRequired,
  itemPrice: propTypes.string.isRequired,
  customStyling: propTypes.string,
};

export default MenuItem;