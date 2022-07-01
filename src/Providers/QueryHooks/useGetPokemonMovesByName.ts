import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_MOVES_BY_NAME = gql`
  query GET_POKEMON_MOVES_BY_NAME($name: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonmoves(
        order_by: { level: asc }
        where: { pokemon_v2_movelearnmethod: { name: { _eq: "level-up" } } }
      ) {
        level
        pokemon_v2_move {
          name
          power
          pp
        }
        pokemon_v2_movelearnmethod {
          name
        }
      }
    }
  }
`;

interface GetPokemonMovesByNameResponseShape {
  pokemon_v2_pokemon: {
    id: number;
    name: string;
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        name: string;
      }[];
      pokemon_v2_pokemonmoves: {
        level: number;
        pokemon_v2_move: {
          name: string;
          power: number;
          pp: number;
        };
        pokemon_v2_movelearnmethod: {
          name: string;
        };
      }[];
    };
  }[];
}

export default function useGetPokemonMovesByName(name: string) {
  return useQuery<GetPokemonMovesByNameResponseShape>(
    GET_POKEMON_MOVES_BY_NAME,
    {
      variables: {
        name: name,
      },
    }
  );
}
