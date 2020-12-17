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
            <h3 id={element.title.replace(' ', '-')}>
              {element.title}
            </h3>
            <hr></hr>
            {element.items.length > 0 ? (
              <div className='menu-items'>
                <table className='category-table'>
                {/* <tr style={{textAlign: 'left'}}>
                  
                  Use this later to specify head and QTY type( half, full, 500ml etc)
                   <th></th>
                  <th></th> 
                 
                </tr> */}
                {restaurantDetails.menu.categories[key].items.map(
                  (item, itemKey) => {
                    return <MenuItem {...item} theme={restaurantDetails.menu.theme} key={itemKey} />;
                  }
                )}
  
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
