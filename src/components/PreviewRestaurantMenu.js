import React, { useEffect, useState } from "react";
import themes from "../themes.json";
import MenuItem from "./MenuItem";

const PreviewRestaurantMenu = (props) => {
  const [restaurantDetails, setRestaruarntDetails] = useState(
    props.restaurantDetails
  );
  const [searchQuery, setSearchQuery] = useState("");
  const customizedMenu = props.customizedMenu;
  const [theme, setTheme] = useState(themes.Light);

  useEffect(() => {
    if (customizedMenu) {
      if (restaurantDetails.menu.theme) {
        if (themes[restaurantDetails.menu.theme.themeName])
          setTheme(themes[restaurantDetails.menu.theme.themeName]);
        else {
          console.log("No theme name found. Reading theme info");
          setTheme(restaurantDetails.menu.theme);
        }
      }
    }
  }, [customizedMenu, restaurantDetails]);

  useEffect(() => {
    if (searchQuery === "") setRestaruarntDetails(props.restaurantDetails);
    else {
      // changing state obj to json
      const tempRestaurantDetails = JSON.parse(
        JSON.stringify(props.restaurantDetails)
      );

      const categories = [];

      tempRestaurantDetails.menu.categories.forEach((category) => {
        if (
          category.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim())
        ) {
          categories.push(category);
        } else {
          const tempItems = [];
          for (let i = 0; i < category.items.length; i++) {
            if (
              category.items[i].itemName
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim())
            )
              tempItems.push(category.items[i]);
          }
          category.items = tempItems;
          if (tempItems.length > 0) {
            categories.push(category);
          }
        }
      });
      tempRestaurantDetails.menu.categories = categories;
      setRestaruarntDetails(tempRestaurantDetails);
    }
  }, [searchQuery, props.restaurantDetails]);

  // const searchDish = (e) => {

  // }

  return (
    <div
      className="shadow-box"
      style={
        customizedMenu
          ? {
              ...theme,

              // backgroundColor: theme.backgroundColor
            }
          : {}
      }
    >
      <div style={{ textAlign: "center" }}>
        {restaurantDetails.logo ? (
          <img
            src={restaurantDetails.logo}
            alt=""
            className="restaurant-logo"
          ></img>
        ) : (
          <i
            className="eos-icons"
            style={{ color: "red", fontSize: "1em", margin: "8px" }}
          >
            local_dining
          </i>
        )}
        <h1>{restaurantDetails.restaurantName}</h1>
        {customizedMenu ? <h4>{restaurantDetails.bio}</h4> : <></>}
      </div>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          name="search-restaurant"
          className="form-input"
          placeholder="Search Menu"
          onKeyUp={(e) => setSearchQuery(e.target.value)}
        ></input>
      </div>

      <br></br>
      <div>
        {restaurantDetails.menu.categories.map((element, key) => {
          return element.title !== "" ? (
            <div key={key}>
              <br></br>
              <h2>{element.title}</h2>
              <hr
                style={
                  customizedMenu
                    ? { borderColor: theme.color, opacity: "0.8" }
                    : {}
                }
              />
              <br></br>
              {element.items.length > 0 ? (
                <div>
                  {restaurantDetails.menu.categories[key].items.map(
                    (item, itemKey) => {
                      return <MenuItem {...item} theme={theme} key={itemKey} />;
                    }
                  )}
                </div>
              ) : null}
            </div>
          ) : (
            <div key={key}></div>
          );
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <p style={{ textAlign: "center", margin: "50px 0px 0px 0px" }}>
        Menu created with{" "}
        <a style={{ color: "inherit" }} href="www.grub.live">
          www.grub.live
        </a>
      </p>
    </div>
  );
};

export default PreviewRestaurantMenu;
