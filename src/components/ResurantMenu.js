import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ResturantCategory from "./ResturantCategory";

function RestaurantMenu() {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [indexItem, setIndexItem] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9250&lng=77.5410&restaurantId=${id}`
    );
    const json = await data.json();
    setMenuData(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  if (menuData === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    menuData?.data?.cards[2]?.card?.card?.info;

  const showMenu =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div>
      <div className="text-center font-bold text-2xl pb-4">{name}</div>
      <p className="text-center font-semibold">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <div>
        {showMenu?.map((res, index) => (
          <ResturantCategory
            key={index}
            data={res?.card?.card}
            showAccording={indexItem === index ? true : false}
            setIndex={() => setIndexItem(indexItem === index ? null : index)}
            />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
