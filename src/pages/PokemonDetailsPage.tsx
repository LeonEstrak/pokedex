import { useParams } from "react-router-dom";

export default function PokemonDetailsPage() {
  const { name } = useParams();
  console.log(name);

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
