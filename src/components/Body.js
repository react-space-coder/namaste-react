import React, { useContext } from "react";
import RestroCard, { withOpenClose } from "./RestroCard";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserDetails from "../utils/UserContext";

const Body = () => {
  const { filtered, setFiltered, searchText, setText, actualFilteredData } =
    useMenu();
  const onlineStatus = useOnlineStatus();
  const RestroWithOpen = withOpenClose(RestroCard);
  if (!onlineStatus) {
    return <h1>Please connect to your internet</h1>;
  }
  const { loggedInuser, setUserName } = useContext(UserDetails);
  return (
    <div>
      <div className="mb-7 ml-4">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1"
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
            className="bg-lime-100 ml-4 p-2 rounded-lg"
          >
            Search
          </button>
          <button
            className="bg-gray-100 ml-4 p-2 rounded-lg"
            onClick={() => {
              const fillData = filtered.filter((res) => {
                return res?.info?.avgRating > 4.4;
              });
              setFiltered(fillData);
            }}
          >
            Top Rated Resurants
          </button>
          <input
            type="text"
            value={loggedInuser}
            onChange={(e) => setUserName(e.target.value)}
            className="border border-blue-300 ml-4"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {!filtered ? (
          <Shimmer />
        ) : (
          filtered.map((res, index) => {
            return res?.info?.isOpen ? (
              <Link to={"/restro/" + res?.info?.id} key={index}>
                <RestroWithOpen key={index} res={res.info} />
              </Link>
            ) : (
              <RestroCard key={index} res={res.info} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
