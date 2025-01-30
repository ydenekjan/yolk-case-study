import PokemonCard from "@/components/pokemon/card/pokemonCard";
import { InfiniteData } from "react-query";
import { APIPokemonOverview } from "@/lib/types/apiTypes";
import PokemonListEmpty from "@/components/pokemon/container/pokemonListHandlers/pokemonListEmpty";
import PokemonListError from "@/components/pokemon/container/pokemonListHandlers/pokemonListError";
import PokemonListLoading from "@/components/pokemon/container/pokemonListHandlers/pokemonListLoading";
import { useMemo } from "react";

const PokemonList = ({ data }: { data: InfiniteData<APIPokemonOverview> }) => {
  const pokemonList = useMemo(() => {
    return data.pages.flatMap((page) => page.results);
  }, [data]);

  return (
    <section className="min-w-fit w-fit h-fit grid justify-items-center gap-x-8 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
      ))}
    </section>
  );
};

PokemonList.Error = PokemonListError;
PokemonList.Loading = PokemonListLoading;
PokemonList.Empty = PokemonListEmpty;

export default PokemonList;
