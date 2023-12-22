import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Errorpage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import RestrictedRoutes from "./RestrictedRoutes";
import Home from "../Pages/Home";

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
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
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
    ],
  },
]);

export default customRoutes;
