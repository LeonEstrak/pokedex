import { useParams } from "react-router-dom";
import useGetPokemonDetailsByName from "../Providers/QueryHooks/useGetPokemonDetailsByName";
import ErrorPage from "./ErrorPage";
export default function PokemonDetailsPage() {
  const { name } = useParams();

  const { data } = useGetPokemonDetailsByName(String(name));

  if (data?.pokemon_v2_pokemon.length === 0) {
    return <ErrorPage />;
  } else {
    const imageURL = "https://img.pokemondb.net/artwork/vector/large/".concat(
      name?.toLowerCase() + ".png"
    );
    return (
      <div className="h-screen bg-slate-800 flex ">
        <div className=" flex-1 bg-white rounded-2xl flex items-center justify-center m-10">
          <img
            className="scale-50 max-w-3/4 max-h-3/4"
            alt="pokemon"
            src={imageURL}
          />
        </div>
        <div className="flex-1 flex flex-col ">
          <div className="h-1/3 bg-slate-200 rounded-2xl flex items-center justify-center m-10"></div>
          <div className="h-2/3 bg-slate-200 rounded-2xl flex items-center justify-center m-10"></div>
        </div>
      </div>
    );
  }
}
