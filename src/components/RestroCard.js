import { CDN_LINK } from "../utils/constants";
import React from "react";

export const RestroCard = ({ res }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = res;
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestroCard;
