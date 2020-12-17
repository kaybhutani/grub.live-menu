import React from "react";
import MenuItem from './MenuItem'
const MenuWrapper = (props) => {

  const restaurantDetails = props.restaurantDetails
  const customizedMenu = props.customizedMenu

  return (
    <div>
      {restaurantDetails.menu.categories.map((element, key) => {
        return element.title !== "" ? (
          <div key={key}>
            <h4>{element.title}</h4>
            
            {element.items.length > 0 ? (
              <div className='menu-items'>
                <table>
                <tr>
                  {restaurantDetails.menu.categories[key].items.map(
                    (item, itemKey) => {
                      return <MenuItem {...item} theme={restaurantDetails.menu.theme} key={itemKey} />;
                    }
                  )}
                </tr>
                </table>
                
              </div>
            ) : null}
          </div>
        ) : (
          <div key={key}></div>
        );
      })}
    </div>
  )
}

export default MenuWrapper;
