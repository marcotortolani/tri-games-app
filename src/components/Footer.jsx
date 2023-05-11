import { useState, useEffect } from "preact/hooks";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  let location = useLocation();
  const [homeButton, setHomeButton] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setHomeButton(true);
    } else {
      setHomeButton(false);
    }
  }, [location]);

  return (
    <footer className=" w-12/12 sm:w-12/12 flex flex-row justify-around items-center  mt-4 sm:mb-4">
      {homeButton ? (
        <Link to="/">
          <button
            type="button"
            className="mr-5 min-w-20 border-solid border-white border-2 sm:border-none rounded-lg px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-cyan-500 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-cyan-700"
          >
            <span className="mr-2">&#128072;</span>
            <span className="hidden sm:inline">Volver</span>
          </button>
        </Link>
      ) : (
        <div
          // type="button"
          className="mr-5 min-w-20 border-solid border-white border-2 sm:border-none rounded-lg px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-cyan-500 leading-normal  transition duration-150 ease-in-out cursor-default"
        >
          <span className="mr-2">🏠</span>
          <span className="hidden sm:inline">Home</span>
        </div>
      )}

      <a
        href="https://mtorto.com/"
        target="blank"
        className="ml-5 flex items-center justify-center border-solid border-white border-2 sm:border-none rounded-lg px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-cyan-500 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-cyan-700"
      >
        <span className=" mr-2 hidden sm:inline">Click aquí, visitá mi</span>
        <span>&#128188;</span>
      </a>
    </footer>
  );
}
