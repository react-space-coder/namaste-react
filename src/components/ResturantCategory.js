import React, { useState } from "react";
import ItemList from "./ItemList";

export default function ResturantCategory({data,showAccording,setIndex}) {
  const handleArrowClick = () => {
    setIndex()
  };
  return (
    <div>
      <div className="w-[70%] bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between">
          <span className="font-bold">
            {data?.title}({data?.itemCards?.length})
          </span>
          <span onClick={handleArrowClick}>⬇️</span>
        </div>
        {showAccording &&<ItemList data={data?.itemCards} />}
      </div>
    </div>
  );
}
