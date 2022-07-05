import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [pokemonName, setPokemonName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex px-4 items-center justify-center">
      <div className="relative mr-3">
        <div className="absolute left-6 bottom-2.5 items-center pointer-events-none">
          <svg
            className="w-5 h-5 absolute text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2
                8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <input
        type="text"
        className="bg-gray-700 border-gray-600 text-lg rounded-lg placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
        placeholder="Search"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        required
      ></input>
      <button
        onClick={(e) => {
          if (pokemonName.trim()) {
            navigate("/pokemon/" + pokemonName.trim().toLowerCase());
          } else {
            navigate("/" + pokemonName.trim().toLowerCase());
          }
        }}
        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;
