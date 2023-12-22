import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Errorpage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import RestrictedRoutes from "./RestrictedRoutes";
import Home from "../Pages/Home";
import Profile from "../Pages/Dashboard/Profile";
import AboutUs from "../Pages/AboutUs";
import Features from "../Pages/Features";

// const url = "https://restaurant-manager-server.vercel.app";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/login",
        element: (
          <RestrictedRoutes>
            <Login></Login>
          </RestrictedRoutes>
        ),
      },
      {
        path: "/registration",
        element: (
          <RestrictedRoutes>
            <Registration></Registration>
          </RestrictedRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
        children: [
          // {
          //   path: "/dashboard",
          //   element: <Profile></Profile>,
          // },
          {
            path: "profile",
            element: <Profile></Profile>,
          },
        ],
      },
    ],
  },
]);

export default customRoutes;
