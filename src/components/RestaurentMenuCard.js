import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import {useDispatch} from 'react-redux'
import { addItem } from "../utils/cartSlice";

const RestaurentMenuCard = () => {
  const { id } = useParams();
  const listOfProducts = useRestaurentMenu(id);
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem(id))
    console.log('from addToCart fn')
  }

  if (listOfProducts?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex p-4">
      <div className="border-solid border-2 mr-2 rounded-md p-2">
        <h3 className="font-bold">Brand: {listOfProducts?.brand}</h3>
        <img
          alt="product"
          src={listOfProducts?.images[0]}
          className="h-60 w-30 rounded-md "
        />
        <h4 className="font-bold">Model: {listOfProducts?.title}</h4>
      </div>
      <div className="bg-gray-200 rounded-md p-3 font-light">
        <ul>
          <li>Description: {listOfProducts?.description}</li>
          <li>Price: {listOfProducts?.price}$</li>
          <li>Rating: {listOfProducts?.rating}</li>
        </ul>
        <button className="bg-orange-400 p-2 mt-2 flex rounded-sm text-white" onClick={addToCart}>
          <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" className="h-5 w-5 mr-2"/>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default RestaurentMenuCard;
