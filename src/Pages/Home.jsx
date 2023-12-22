import { Helmet } from "react-helmet-async";
import Audiance from "../Components/Audiance";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Taskbook | Homepage</title>
      </Helmet>
      <Banner></Banner>
      <Audiance></Audiance>
    </div>
  );
};

export default Home;
