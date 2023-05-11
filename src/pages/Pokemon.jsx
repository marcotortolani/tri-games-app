import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran-f",
  "nidorina",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

export default function Pokemon() {
  const navigate = useNavigate();
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const pokemon = e.target.children[0].value;

    if (pokemon.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
    } else {
      console.log("respuesta equivocada");
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }

  return (
    <main className=" w-12/12 flex flex-col items-center">
      <h1>Pokemon</h1>

      <img
        className=" w-full"
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(0)",
        }}
        src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${
          MATCH + 1
        }.png?raw=true`}
        alt="Pokemon"
      />
      <h3>{POKEMONS[MATCH]}</h3>

      {hasWon ? (
        <button onClick={() => navigate(0)}>Play again</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="pokemon" autoFocus />
          <button type="submit">Submit</button>
        </form>
      )}
    </main>
  );
}
