// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9250&lng=77.5410&restaurantId=${id}`
    );
    const json = await data.json();
    setMenuData(json);
    console.log(json,'json')
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>

        <li>{menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.title}</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
