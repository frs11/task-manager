import { Helmet } from "react-helmet-async";

const Features = () => {
  return (
    <div className="container w-11/12 md:w-10/12 mx-auto mt-8 py-4 px-4">
      <Helmet>
        <title>Taskbook | Features</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl text-center font-semibold mb-4 md:mb-12">
        Key Features
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <strong>To-do:</strong> Create and manage your to-do list to keep
          track of tasks that need your attention.
        </li>
        <li className="mb-2">
          <strong>Ongoing:</strong> Monitor tasks that are currently in progress
          to stay on top of your active projects.
        </li>
        <li className="mb-2">
          <strong>Completed:</strong> Celebrate your achievements by marking
          tasks as completed and reflecting on your progress.
        </li>
      </ul>
      <p className="mb-4">
        Taskbook allows you to easily update and delete tasks at any time.
        Whether you need to make changes to a to-do item or mark a task as
        completed, our intuitive interface makes task management a breeze.
      </p>
      <p className="mb-4">
        We understand that flexibility is key, so Taskbook adapts to your unique
        workflow. Customize your task categories, add due dates, and make the
        most of your time with Taskbook.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Features;
