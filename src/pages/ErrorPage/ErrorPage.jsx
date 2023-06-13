import {  Link, useRouteError } from "react-router-dom";
import errorImage from '../../../src/assets/error.png'
const ErrorPage = () => {
  const { error, status } =useRouteError();
  return (
    <section className="flex items-center bg-gray-200 h-screen p-16  text-gray-900">
      <div className="flex  items-center justify-center  mx-auto ">
       <img src={errorImage} alt="" className="object-cover mr-auto w-[60%] " />
        <div className="max-w-md text-center w-1/2 ">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
