import React from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const { filtered, setFiltered, searchText, setText, actualFilteredData } =
    useMenu();
  const  onlineStatus  = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Please connect to your internet</h1>;
  }
  
  return (

    <div className="body">
      
      <div className="filter">
        <div className="search">
          <input
            type="input"
            className="seaarch"
            value={searchText}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              const filterSearchText = actualFilteredData?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFiltered(filterSearchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const fillData = filtered.filter((res) => {
              return res?.info?.avgRating > 4.7;
            });
            setFiltered(fillData);
          }}
        >
          Top Rated Resurants
        </button>
      </div>
      <div className="restro-container">
        {!filtered ? (
          <Shimmer />
        ) : (
          <>
            {filtered?.map((res, index) => (
              // <Link to={"/restro/" + res?.info?.id} key={index}>
              <RestroCard key={index} res={res?.info} />
              // {/* </Link> */}
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
