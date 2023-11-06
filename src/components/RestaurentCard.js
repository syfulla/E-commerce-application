import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurentCard = (props) => {
  const {loggedInUser} = useContext(userContext);
  const { data } = props;
  const { title, category, images, rating, price, brand } = data;
  return (
    <div className="h-50 w-56 m-2 bg-slate-100 hover:bg-slate-200 rounded-md p-2">
      <p className="capitalize font-bold truncate">Category: {category}</p>
      <img className="h-40 w-40 rounded-md" alt="biriyani" src={images[0]} />
      <div className="w-36 p-2 truncate">
        <h6 className="truncate">{title}</h6>
        <h6>{brand}</h6>
        <h6>Price: {price}$</h6>
        <h6>Rating: {rating}</h6>
        <h6>User: {loggedInUser}</h6>
      </div>
    </div>
  );
};


export default RestaurentCard;
