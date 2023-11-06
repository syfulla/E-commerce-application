import { useState, useEffect } from "react";
import { CARD_URL } from "./constants";

const useRestaurentMenu = (id) => {
  const [listOfProducts, setListOfProducts] = useState([]);
  
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const url = CARD_URL + id;
    const data = await fetch(url);
    const res = await data.json();
    // setListOfProductsDummy(res.products);
    setListOfProducts(res);
    console.log("res from menu card=>", res);
  };

  return listOfProducts;
};

export default useRestaurentMenu;
