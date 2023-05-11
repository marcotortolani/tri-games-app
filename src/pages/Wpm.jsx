import { useState, useEffect } from "preact/hooks";

const WORDS = [
  "amable",
  "humano",
  "quemar",
  "cerdo",
  "canela",
  "pulgar",
  "anchoa",
  "bruja",
  "ciudad",
  "dulce",
  "pulgas",
  "desear",
  "guitar",
  "ojeras",
  "quitar",
  "volver",
  "amplio",
  "cactus",
  "escrib",
  "manzan",
  "golpea",
  "diente",
  "camino",
  "blanco",
  "cambiar",
  "condor",
  "desayu",
  "fideos",
  "horror",
  "isleta",
  "jering",
  "luneta",
  "maximo",
  "nomada",
  "oxido",
  "puerta",
  "quedar",
  "rosado",
  "sender",
  "vibora",
];

export default function Wpm() {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (buffer === word) {
      setWord(() => WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
      setBuffer("");
    }

    setBuffer("");
  }

  useEffect(() => {
    if (time > 0) {
      const timeout = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [time]);

  return (
    <main className="flex flex-col items-center gap-6">
      <h1>Words Per Minute</h1>

      {Boolean(time) && <h2>{word}</h2>}
      <h3>Caracteres tipeados: {characterCount}</h3>
      {Boolean(time) && <h4>Tiempo restante: {time}</h4>}

      {time ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={buffer}
            autoFocus
            onChange={(e) => setBuffer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button
          onClick={() => {
            setTime(60);
            setCharacterCount(0);
          }}
        >
          Play
        </button>
      )}
    </main>
  );
}
