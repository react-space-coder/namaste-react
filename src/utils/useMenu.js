import { useState,useEffect } from "react";

const useMenu = () => {
  const [filtered, setFiltered] = useState();
  const [searchText, setText] = useState("");
  const [actualFilteredData, setActualFilterData] = useState([]);

  const handleFetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946"
    );
    const json = await data?.json();
    setFiltered(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setActualFilterData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    handleFetchData();
  }, []);

  return {
    filtered,
    setFiltered,
    searchText,
    setText,
    actualFilteredData,
    setActualFilterData,
  };
};

export default useMenu;
