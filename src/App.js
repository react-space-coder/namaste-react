import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/ResurantMenu";
import Shimmer from "./components/Shimmer";
import UserDetails from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Anusha Deshpande",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <Provider store={appStore}>
      <UserDetails.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserDetails.Provider>
      </Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restro/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
