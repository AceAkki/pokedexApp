import type {
  CompletePokemonData,
  PokemonSpecies,
  Pokemon,
  PokemonAbility,
  AbilitiesData,
} from "@/types/pokemonType";
import { useEffect, useState } from "react";

interface hookType {
  name?: string;
  id?: string;
  limit?: number;
  offset?: number;
}
const useFetchData = (options: hookType) => {
  let { name, id, limit = 6, offset = 0 } = options;
  let [pokemons, setPokemons] = useState<CompletePokemonData[]>([]);
  let [pokemon, setPokemon] = useState<CompletePokemonData | null>(null);

  useEffect(() => {
    fetchPokemons({ name: name, id: id, limit: limit, offset: offset });
  }, [limit, offset]);

  async function fetchPokemons({ name, id, limit, offset }: hookType) {
    const hasParam = name || id;
    const url = name
      ? `https://pokeapi.co/api/v2/pokemon/${name}`
      : id
        ? `https://pokeapi.co/api/v2/pokemon/${id}`
        : `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        const detailedData: PokemonSpecies = await fetchPokemonDetails({
          name: name,
          id: id,
        });

        const abilitiesData: AbilitiesData[] | null = hasParam
          ? await Promise.all(
              data.abilities.map(async (obj: PokemonAbility) => {
                const data: AbilitiesData = await fetchData(obj.ability.url);
                return { ...data };
              }),
            )
          : null;

        const finalData = !hasParam
          ? await Promise.all(
              data.results.map(async (pokemon: any) => {
                const res = await fetch(pokemon.url);
                const dets = await res.json();
                return {
                  ...dets,
                };
              }),
            )
          : {
              ...data,
              description: detailedData.flavor_text_entries,
              names: detailedData.names,
              abilitiesEffects: hasParam
                ? abilitiesData?.map((dt) => dt.effect_entries)
                : null,
              abilitiesText: hasParam
                ? abilitiesData?.map((dt) => dt.flavor_text_entries)
                : null,
            };
        console.log(finalData);
        !hasParam ? setPokemons(finalData) : setPokemon(finalData);
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function fetchPokemonDetails({ name, id }: hookType) {
    const url = name
      ? `https://pokeapi.co/api/v2/pokemon-species/${name}`
      : `https://pokeapi.co/api/v2/pokemon-species/${id}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function fetchData(fetchURL: string) {
    try {
      const response = await fetch(fetchURL);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  return {
    pokemons,
    pokemon,
  };
};
export default useFetchData;
