import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  let [listOfProducts, setListOfProducts] = useState([]);
  const [userInput, setUserInput] = useState("");

  let [listOfProductsDummy, setListOfProductsDummy] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    console.log("fron fetchingData fn");
    const data = await fetch("https://dummyjson.com/products");
    const res = await data.json();
    setListOfProductsDummy(res.products);
    setListOfProducts(res.products);
    console.log("res=>", res.products);
  };

  if (listOfProducts?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="p-3">
      <div className="flex justify-center">
        <div >
          <input
          className="rounded-md border-solid border-2 border-indigo-300"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              if (e.target.value === "") {
                console.log("value gets empty", listOfProductsDummy);
                return setListOfProducts(listOfProductsDummy);
              }
            }}
          />
          <button
            className="px-10 bg-slate-400 rounded-sm m-4"
            onClick={() => {
              if (userInput === "") {
                return setListOfProducts(listOfProductsDummy);
              }
              const searchedList = listOfProducts.filter((each) =>
                each.title.toLowerCase().includes(userInput.toLowerCase())
              );
              setListOfProducts(searchedList);
            }}
          >
            Search
          </button>
        </div>
        
        <button
          className="px-10 bg-lime-200 rounded-sm m-4"
          onClick={() => {
            filteredList = listOfProducts.filter((each) => each.rating > 4.4);
            setListOfProducts(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>

      <div className="flex flex-wrap w-50 p-4 justify-center">
        {listOfProducts?.map((each) => (
          <Link to={"product/" + each.id} key={each.id}>
            <RestaurentCard key={each.id} data={each} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
