import React, { useEffect } from "react";
import MenuItem from "../MenuItem";
import currentSectionContext from "../../../context/currentMenuSection";
const MenuCategory = ({ title, items, theme }) => {
  let categoryRef = React.createRef();

  let content = items.map((item, itemKey) => {
    return <MenuItem {...item} theme={theme} key={itemKey} />;
  });
  let context = React.useContext(currentSectionContext);

  useEffect(() => {
    const checker = async (e) => {
      let bounding = categoryRef.current.getBoundingClientRect();
      if (bounding.y > 0 && bounding.y <= window.innerHeight) {
        console.log(`${title}  is in viewport!`);
        /**
         * ! updating currentSection throws error of currentRef.current being null, maybe cause of lifecycle, will look over it.
         * @lakshya
         * ? please look into it!
         */
        // context.updateCurrentSection(title);
      }
    };
    window.addEventListener("scroll", checker);
    return () => {
      window.removeEventListener("scroll", checker);
    };
  }, []);

  return (
    <div ref={categoryRef}>
      <h3 id={title.trim().toLowerCase().split(" ").join("-")}>{title}</h3>
      <hr></hr>
      {items.length > 0 ? (
        <div className="menu-items">
          <table className="category-table">
            <tbody>{content}</tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default MenuCategory;
