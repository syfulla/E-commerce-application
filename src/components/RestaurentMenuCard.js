import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenuCard = () => {
  const { id } = useParams();
  const listOfProducts = useRestaurentMenu(id);

  const addToCart = () => {
    console.log('from addToCart fn')
  }

  if (listOfProducts?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex p-4">
      <div className="bg-slate-300 mr-2 rounded-md p-2">
        <h3 className="font-bold">Brand: {listOfProducts?.brand}</h3>
        <img
          alt="product"
          src={listOfProducts?.images[0]}
          className="rounded-md w-30"
        />
        <h4 className="font-bold">Model: {listOfProducts?.title}</h4>
      </div>
      <div className="bg-gray-200 rounded-md p-3 font-light">
        <p>Description: {listOfProducts?.description}</p>
        <p>Price: {listOfProducts?.price}$</p>
        <p>Rating: {listOfProducts?.rating}</p>
        <button className="bg-orange-300 p-2 mt-2 flex rounded-sm text-white" onClick={addToCart}>
          <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" className="h-5 w-5 mr-2"/>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default RestaurentMenuCard;
