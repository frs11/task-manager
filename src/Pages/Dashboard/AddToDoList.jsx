import { Helmet } from "react-helmet-async";

const AddToDoList = () => {
  return (
    <div>
      <Helmet>
        <title>Taskbook | Add a task</title>
      </Helmet>
      <h1>Add an entry</h1>
    </div>
  );
};

export default AddToDoList;
