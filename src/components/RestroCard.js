import { CDN_LINK } from "../utils/constants";
import React from "react";

export const RestroCard = ({ res }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = res;
  return (
    <div className="p-4 border w-60 rounded shadow-md ml-4 bg-gray-200 hover:bg-gray-300">
      <img
        className="h-40 w-full object-cover mb-2"
        alt="res-logo"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h4 className="font-bold text-lg">{name}</h4>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export const withOpenClose = (RestroCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute text-white bg-black rounded-b-lg">{"Opened"}</label>
        <RestroCard {...props}/>
      </>
    );
  };
};

export default RestroCard;
