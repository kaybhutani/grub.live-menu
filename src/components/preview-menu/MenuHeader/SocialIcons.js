import React from "react";
import Instagram from "../../../assets/images/instagramLogo.svg";
import Facebook from "../../../assets/images/facebook.svg";
// import WebIcon from "../../../assets/images/globe.svg";
const SocialIcons = ({ platform, link }) => {
  if (!platform) {
    throw new Error("Platform is required!");
  }

  switch (platform) {
    case "facebook":
      return (
        <a target='_blank' rel="noopener noreferrer" href={link}>
          <img src={Facebook} alt="Facebook" />
        </a>
      );

    case "instagram":
      return (
        <a target='_blank' rel="noopener noreferrer" href={link}>
          <img src={Instagram} alt="Instagram" />
        </a>
      );

    default:
      return (
        <a target='_blank' rel="noopener noreferrer" href={link}>
          {/* <img href={WebIcon} alt="web" /> */}
          <i
            className="eos-icons"
            style={{
              verticalAlign: "middle",
              padding: "0px 0px 2px 4px",
              fontSize: 26,
            }}
          >
            public
          </i>
        </a>
      );
  }
};
export default SocialIcons;
