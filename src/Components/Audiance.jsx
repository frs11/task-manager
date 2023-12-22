import Marquee from "react-fast-marquee";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Audiance = () => {
  return (
    <div className="my-5 md:my-10">
      <h2 className="text-transparent text-center mt-26 mb-8 text-black dark:text-white text-2xl md:text-3xl font-bold">
        Our Audiances
      </h2>
      <Marquee>
        <div className="mr-20">
          <img
            className="w-[200px]  rounded shadow"
            src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/shutterstock_1958383675-crop.jpg"
            alt=""
          />
          <h2 className="text-center font-bold mt-2 dark:text-purple-300 text-purple-600">
            Student
          </h2>
        </div>
        <div className="mr-20">
          <img
            className="w-[200px] h-[132px] rounded shadow"
            src="https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/good-software-developer-1128x635.jpg"
            alt=""
          />
          <h2 className="text-center font-bold mt-2 dark:text-purple-300 text-purple-600">
            Developer
          </h2>
        </div>
        <div className="mr-20">
          <img
            className="w-[200px]  rounded shadow"
            src="https://www.velents.com/wp-content/uploads/2023/07/633f2bab667efaf325d2a66a_Banker-job-description.jpeg"
            alt=""
          />
          <h2 className="text-center font-bold mt-2 dark:text-purple-300 text-purple-600">
            Banker
          </h2>
        </div>
        <div>
          <img
            className="w-[200px]  rounded shadow"
            src="https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1559540019.jpg"
            alt=""
          />
          <h2 className="text-center font-bold mt-2 dark:text-purple-300 text-purple-600">
            Sports Man
          </h2>
        </div>
        <div className="flex justify-center items-center w-[200px] h-[200px]">
          <p>Many more...</p>
          <FaRegArrowAltCircleRight className="w-8 h-8" />
        </div>
      </Marquee>
    </div>
  );
};

export default Audiance;
