import React from "react";
import MenuSectionModal from "../MenuSectionModal/MenuSectionModal";
import Offers from "../Offers/Offers";
import styles from './BottomBarWrapper.module.scss'

const BottomBarWrapper = ({currentSection, restaurantDetails}) => {

  return (
    <div className={styles.bottomBarWrapper}>
      <MenuSectionModal
        currentSection={currentSection}
        categories={restaurantDetails.menu.categories.map((item) => {
          return {
            category: item.title || " ",
            count: item.items.length,
            };
        })}
      />
      <Offers offers={restaurantDetails.offers} />
    </div>
    )
}

export default BottomBarWrapper
