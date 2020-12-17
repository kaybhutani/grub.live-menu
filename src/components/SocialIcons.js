import React from "react";
import Instagram from "../assets/images/instagramLogo.svg";
import Facebook from "../assets/images/facebook.svg";
const SocialIcons = ({ platform, link }) => {
  if (!platform) {
    throw new Error("Platform is required!");
  }

  switch (platform) {
    case "facebook":
      return (
        <a href={link}>
          <img src={Facebook} alt="" />
        </a>
      );

    case "instagram":
      return (
        <a href={link}>
          <img src={Instagram} alt="" />
        </a>
      );

    default:
      return (
        <a href={link}>
          <img alt="Web" />
        </a>
      );
  }
};
export default SocialIcons;
