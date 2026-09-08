import { useEffect, useState } from "react";

const useFetchData = ({ name, id }) => {
  let [pokemons, setPokemons] = useState<Pokemon[]>([]);
  let [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetchPokemons({ name, id });
    // console.log(pokemon);
  }, []);

  async function fetchPokemons({ name, id }) {
    const hasParam = name || id;
    const url = name
      ? `https://pokeapi.co/api/v2/pokemon/${name}`
      : id
        ? `https://pokeapi.co/api/v2/pokemon/${id}`
        : "https://pokeapi.co/api/v2/pokemon/?limit=20";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        const finalData = !hasParam
          ? await Promise.all(
              data.results.map(async (pokemon: any) => {
                const res = await fetch(pokemon.url);
                const dets = await res.json();
                return {
                  name: pokemon.name,
                  image: dets.sprites.front_default,
                  imageBack: dets.sprites.back_default,
                  types: dets.types,
                };
              }),
            )
          : data;

        !hasParam ? setPokemons(finalData) : setPokemon(finalData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    pokemons,
    pokemon,
  };
};
export default useFetchData;
