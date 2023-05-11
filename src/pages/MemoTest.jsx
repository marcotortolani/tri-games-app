import { useState, useEffect } from "preact/hooks";


const cardBack =
  "https://icongr.am/clarity/lightning.svg?size=128&color=fbbe24";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/npm-original-wordmark.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

/*
const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(()=> Math.random() - 0.5);
*/
export default function MemoTest() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
  }, [guessed]);

  return (
    <main className=" w-5/6 sm:w-4/6 lg:w-3/6 mt-2 mb-2 h-6/12">
      <h1 className="mb-10 text-4xl text-amber-400 font-bold">Memo Test</h1>
      <ul className=" grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-6">
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              // tabIndex={0}
              // onKeyDown={ (e) => ["Enter", " "].includes(e.key) && selected.length < 2 && setSelected(selected => selected.concat(image))}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
              key={image}
              className="min-w-50 p-2 md:p-4 border-solid border-2 border-gray-500 rounded-xl hover:cursor-pointer"
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img alt="icon" src={url} />
              ) : (
                <img className=" min-w-40" alt="icon" src={cardBack} />
              )}
            </li>
          );
        })}
      </ul>

      {guessed.length === IMAGES.length ? (
        <div className=" z-10 flex justify-center items-center bg-slate-600 w- h-20 text-4xl font-extrabold text-yellow-500 rounded-full">
          <h2>GANASTE!!!</h2>
        </div>
      ) : null}
    </main>
  );
}
