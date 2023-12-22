import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      id="error-page"
      className="flex h-screen w-11/12 mx-auto items-center justify-center"
    >
      <HelmetProvider>
        <Helmet>
          <title>Error | {error.error.message || error.statusText} </title>
        </Helmet>
      </HelmetProvider>
      <div>
        <img
          src="https://i.ibb.co/XJgG3sD/teary-eyes-emoji-removebg-preview.png"
          alt=""
          className="w-10/12 md:w-1/2 mx-auto"
        />
        <div className="text-center">
          <h1 className="text-6xl text-red-600">Oops!</h1>
          <p className="text-4xl my-5">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-red-400 text-lg">
            <i>
              {error.status} {error.statusText || error.message}
            </i>
          </p>
          <button onClick={handleGoBack} className="btn btn-outline mt-5">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
