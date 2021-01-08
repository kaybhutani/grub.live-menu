import React, { useEffect, useState } from "react";
import PreviewMenuWrapper from "./preview-menu/PreviewMenuWrapper";
import { apiBaseUrl } from "../config.json";

import { useParams } from "react-router-dom";
import loadingIcon from "../assets/images/three_dots_loading.svg";
import { Helmet } from "react-helmet";

const PreviewMenu = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  let { menuId } = useParams();

  useEffect(() => {
    fetch(`${apiBaseUrl}/view?q=${menuId}`)
      .then((response) => response.json())
      .then((data) => {
        setDataFetched(true);
        console.log(data);
        if (data.success) {
          if(data.data.disabled && data.data.disabled == true)
            console.log('Menu disabled')
          else 
            setRestaurantDetails(data.data);
        }
      });
  }, [menuId]);

  return (
    <div>
      {dataFetched ? (
        <div>
          {restaurantDetails != null ? (
            <>
              <Helmet>
                <title>{restaurantDetails.restaurantName} Menu</title>
                <meta
                  name="description"
                  content={`${restaurantDetails.restaurantName} Digital menu. ${restaurantDetails.bio}`}
                />
                <meta
                  name="keywords"
                  content={`food, restaurant, ${restaurantDetails.restaurantName}`}
                />
              </Helmet>
              <div className="preview-menu">
                <PreviewMenuWrapper
                  restaurantDetails={restaurantDetails}
                />
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", marginBottom: "40%" }}>
              <h1>Incorrect QR Code</h1>
              <p>
                Looks like that is not a valid QR code, try sanning again...
              </p>
              <button
                className="black-yellow"
                onClick={() => (window.location.href = "/")}
              >
                Scan QR Code
              </button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center", marginBottom: "40%" }}>
          <img alt="" className="loading-icon" src={loadingIcon} />
        </div>
      )}
    </div>
  );
};

export default PreviewMenu;
