import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_BY_NAME = gql`
  query GET_POKEMON_BY_NAME($name: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight
      base_experience
      pokemon_species_id
    }
  }
`;

interface GetPokemonByNameResponseShape {
  pokemon_v2_pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    pokemon_species_id: number;
  }[];
}

export default function useGetPokemonByName(name: string) {
  return useQuery<GetPokemonByNameResponseShape>(GET_POKEMON_BY_NAME, {
    variables: {
      name: name,
    },
  });
}
