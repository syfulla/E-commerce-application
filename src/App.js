import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurentMenuCard from "./components/RestaurentMenuCard";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from './utils/appStore'
/**
 * Header
 *  -logo
 *  -Nav Items
 * Body
 *  -search
 *  -Restaurent Container
 *      -Restaurent Card
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 *
 */


const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: "syfulla" }}>
        <div>
          <HeaderComponent />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <RestaurentMenuCard />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
