import { Link } from "react-router-dom";
import cloudinaryLink from "../assets/cloudinaryLink";
import Shimmer from "./Shimmer";


function Restaurants({ restaurants }) {

  const RestaurantCard = ({ id, cloudinaryImageId, name, avgRating, cuisines, locality, sla }) => (
    <>
  <Link to={`/restaurant/${id}`}>
      <div className="card">
        <img className="restImg" src={cloudinaryLink + cloudinaryImageId} alt="restau" />
        <div className="restInfo">
          <div className="title">{name}</div>
          <div className="rating">{avgRating} stars {sla.slaString}</div>
          <div className="cuisines">
            {cuisines.slice(0, 3).join(' , ')}
            {cuisines.length > 3 && ", ..."}
          </div>

          <div className="locality">{locality}</div>

        </div>
      </div>
      </Link>


    </>
  )
   if (!restaurants || restaurants.length === 0) {
    return <><Shimmer/></>; // Show a loading message or spinner
  }
  return (<>
    <div className="restaurants">
      {
        restaurants.map((restaurant) => <RestaurantCard {...restaurant.info} key={restaurant.info.id} />)
      }

    </div>
  </>)
}
export default Restaurants;