import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="container w-11/12 md:w-10/12 px-5 py-5 mx-auto mt-8">
      <Helmet>
        <title>Taskbook | About Us</title>
      </Helmet>
      <h2 className="text-xl text-center my-4 md:text-3xl font-bold mb-4">
        About Us
      </h2>
      <p className="mb-4">
        Welcome to Taskbook, where task management meets simplicity. Taskbook is
        designed to help you stay organized and focused on your goals. Our
        platform offers a range of features to enhance your productivity.
      </p>
      <h3 className="text-xl font-bold mb-2">Our Mission</h3>
      <p className="mb-4">
        At Taskbook, our mission is to empower individuals and teams to achieve
        their goals by providing a robust, user-friendly task management
        solution. We believe that effective organization is the key to success
        in both personal and professional endeavors.
      </p>
      <h3 className="text-xl font-bold mb-2">Why Choose Taskbook?</h3>
      <p className="mb-4">
        Taskbook stands out with its intuitive interface, customizable features,
        and seamless collaboration capabilities. We prioritize user experience,
        ensuring that managing your tasks is not only efficient but also a
        delightful experience.
      </p>
      <h3 className="text-xl font-bold mb-2">Our Team</h3>
      <p className="mb-4">
        Taskbook is the result of the collaborative efforts of a diverse and
        passionate team of developers, designers, and project managers. We are
        committed to continuously improving and expanding Taskbook to meet the
        evolving needs of our users.
      </p>
      <p className="mt-10">
        Thank you for choosing Taskbook. We are excited to be a part of your
        journey towards increased productivity and success.
      </p>
    </div>
  );
};

export default AboutUs;
