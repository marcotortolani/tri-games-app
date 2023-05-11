import { Link } from "wouter";


export default function Home() {
   

  return (
    <main className="w-6/6">
      <h3 className=" mb-6 font-bold text-lg">
        Hace click en tu juego preferido
      </h3>
      <ul className=" w-4/4 flex flex-col sm:flex-row items-center justify-between">
        <li>
          <Link to="/memotest">
            <button
              type="button"
              className="inline-block border-none rounded-lg ml-2 mr-2 px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-amber-400 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-300 hover:text-amber-600"
            >
              MemoTest
            </button>
          </Link>
        </li>
        <li>
          <Link to="/wpm">
            <button
              type="button"
              className="inline-block border-none rounded-lg ml-2 mr-2 px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-emerald-400 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-300 hover:text-emerald-600"
            >
              WPM
            </button>
          </Link>
        </li>
        <li>
          <Link to="/pokemon">
            <button
              type="button"
              className="inline-block border-none rounded-lg ml-2 mr-2 px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-cyan-500 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-300 hover:text-cyan-700"
            >
              Pokemon
            </button>
          </Link>
        </li>
      </ul>
    </main>
  );
}
