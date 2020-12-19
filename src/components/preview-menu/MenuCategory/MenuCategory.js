import React, { useEffect } from "react";
import MenuItem from "../MenuItem";
const MenuCategory = ({ title, items, theme, setCurrentSection }) => {
  let categoryRef = React.createRef();

  let content = items.map((item, itemKey) => {
    return <MenuItem {...item} theme={theme} key={itemKey} />;
  });

  useEffect(() => {
    const checker = (e) => {
      let bounding = categoryRef.current.getBoundingClientRect();
      if (bounding.y > 0 && bounding.y <= window.innerHeight/2) {
        console.log(`${title}  is in viewport!`);

        setCurrentSection(title);
      }
    };
    window.addEventListener("scroll", checker);
    return () => {
      window.removeEventListener("scroll", checker);
    };
  }, [categoryRef, setCurrentSection, title]);

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

export default React.memo(MenuCategory);
