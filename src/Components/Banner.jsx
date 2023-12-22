import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 text-white dark:text-slate-300 bg-gradient-to-tr from-slate-900 to-slate-700">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] py-10 lg:w-[80%] text-center">
          <p className="text-2xl lg:text-4xl mb-3">
            Get things done, finally. Effortlessly using{" "}
            <span className="font-mono font-bold text-purple-300">
              Task
              <span className="text-purple-500">book</span>
            </span>
          </p>
          <p className="text-xs md:text-sm text-gray-200 dark:text-gray-300 px-5 lg:px-10">
            Feeling buried in deadlines? Unchain your potential with Taskbook.
            Organize your chaos, one task at a time, and watch your productivity
            soar. Free yourself from overwhelm, conquer your goals, and finally
            breathe easy. Start your Taskbook journey today.
          </p>
          <Link to="/dashboard">
            <button className="mt-4 px-4 py-2 rounded border-2 border-purple-400 hover:border-purple-600 hover:bg-purple-700  duration-150 ease-in-out font-semibold text-white">
              Lets Explore
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex justify-end">
        <img src="https://i.ibb.co/KWxgGyV/banner.png" alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
