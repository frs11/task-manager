import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-row">
      <Helmet>
        <title>Taskbook | Dashboard</title>
      </Helmet>
      <Sidebar></Sidebar>
      <div className="flex-grow">
        {location.pathname == "/dashboard" ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-2xl md:text-4xl font-serif">
              Welcome to Dashboard
            </p>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
