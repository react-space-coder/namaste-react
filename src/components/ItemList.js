import React from "react";
import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function ItemList({ data }) {
  const dispatch = useDispatch();
  const handleItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data?.map((res) => {
        return (
          <div
            className="m-2 p-2  border-b-2 border-gray-200 text-left"
            key={res.card.info.id}
          >
            <div className="flex justify-between">
              <div>
                <div className="py-2">
                  <span>{res.card.info.name}</span>
                  <span> - ₹ {res.card.info.price / 100}</span>
                </div>

                <p className="text-xs">{res.card.info.description}</p>
              </div>
              <div>
                <img src={CDN_LINK + res.card.info.imageId} className="w-80" />
                <button
                  className="shadow-lg text-right bg-black text-white text-xs rounded-lg p-1 absolute"
                  onClick={() => handleItem(res)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
