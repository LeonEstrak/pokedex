import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGetPokemonDetailsByName from "../Providers/QueryHooks/useGetPokemonDetailsByName";
export default function PokemonDetailsPage() {
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();

  const { loading, error, data } = useGetPokemonDetailsByName(String(name));
  console.log(data?.pokemon_v2_pokemon.length);
  if (loading) console.log(loading);
  if (error) console.error(error.message);

  if (data?.pokemon_v2_pokemon.length === 0) {
    return (
      <div
        className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-slate-800
  "
      >
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-700 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The Pokemon you’re looking for doesn’t exist.
            </p>

            <a
              href="/"
              className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
              onClick={(e) => {
                navigate("/");
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    const imageURL = "https://img.pokemondb.net/artwork/large/".concat(
      name?.toLowerCase() + ".jpg"
    );
    return (
      <div className="h-screen bg-stone-800 flex items-center justify-center">
        <div className="w-4/5 h-4/5 bg-white rounded-2xl flex items-center justify-center m-2">
          <img
            className="scale-50 max-w-3/4 max-h-3/4"
            alt="pokemon"
            src={imageURL}
          />
        </div>
      </div>
    );
  }
}
