import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cloudinaryLink from "../assets/cloudinaryLink";
import "../css/restoMenu.css"
import Shimmer from "./Shimmer";
// Import CSS file for styling

function RestoMenu() {
  const { id } = useParams();
  const [restInfo, setRestInfo] = useState(null); // Use `null` for initial state

  useEffect(() => {
    getRestorantInfo();
  }, []);

  async function getRestorantInfo() {
    const data = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.875754&lng=75.3393195&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    const restaurantInfo = json.data.cards.find(
      (card) => card.card.card.info && card.card.card.info.id === id
    );
    setRestInfo(restaurantInfo); // Set the restaurant info
  }

  // If `restInfo` is still null, show the loading state
  if (!restInfo || !restInfo.card || !restInfo.card.card || !restInfo.card.card.info) {
    return <Shimmer/>;
  }

  const { id: resid, name, city, cloudinaryImageId, locality, areaName, costForTwo, avgRating } = restInfo.card.card.info;

  return (
    <div className="restaurant-card">
      <img
        src={cloudinaryLink + cloudinaryImageId}
        alt={name}
        className="restaurant-img"
      />
      <div className="restaurant-info">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-locality">{locality}, {areaName}, {city}</p>
        <p className="restaurant-cost">Cost for Two: ₹{costForTwo / 100}</p>
        <p className="restaurant-rating">Average Rating: {avgRating} ⭐</p>
      </div>
    </div>
  );
}

export default RestoMenu;
