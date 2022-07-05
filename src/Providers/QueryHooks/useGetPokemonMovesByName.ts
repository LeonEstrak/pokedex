import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_MOVES_BY_NAME = gql`
  query GET_POKEMON_MOVES_BY_NAME($name: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      pokemontypes: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      pokemonmoves: pokemon_v2_pokemonmoves(
        order_by: { level: asc }
        where: { pokemon_v2_movelearnmethod: { name: { _eq: "level-up" } } }
      ) {
        level
        move: pokemon_v2_move {
          name
          power
          pp
        }
        movelearnmethod: pokemon_v2_movelearnmethod {
          name
        }
      }
    }
  }
`;

interface GetPokemonMovesByNameResponseShape {
  pokemon: {
    id: number;
    name: string;
    pokemontypes: {
      pokemon_v2_type: {
        name: string;
      }[];
    }
      pokemonmoves: {
        level: number;
        move: {
          name: string;
          power: number|null;
          pp: number;
        };
        movelearnmethod: {
          name: string;
        };
      }[];
    };
  }[];

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
