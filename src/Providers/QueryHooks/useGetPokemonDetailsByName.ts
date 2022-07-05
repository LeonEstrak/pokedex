import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_DETAILS_BY_NAME = gql`
  query GET_POKEMON_DETAILS_BY_NAME($name: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight
      pokemontypes: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

interface GetPokemonDetailsByNameResponseShape {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
    pokemontypes: {
      type: {
        name: string;
      };
    }[];
  }[];
}

export default function useGetPokemonDetailsByName(name: string) {
  return useQuery<GetPokemonDetailsByNameResponseShape>(
    GET_POKEMON_DETAILS_BY_NAME,
    {
      variables: {
        name: name,
      },
    }
  );
}
