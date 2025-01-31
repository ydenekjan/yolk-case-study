import PokemonCard from "@/components/pokemon/card/pokemonCard";
import { InfiniteData } from "react-query";
import { APIPokemonOverview } from "@/lib/types/apiTypes";
import PokemonListEmpty from "@/components/pokemon/container/pokemonListHandlers/pokemonListEmpty";
import PokemonListError from "@/components/pokemon/container/pokemonListHandlers/pokemonListError";
import PokemonListLoading from "@/components/pokemon/container/pokemonListHandlers/pokemonListLoading";
import { useEffect, useMemo, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import PokemonMovesModal from "@/components/pokemon/modal/pokemonMovesModal";
import { useSelectedPokemonContext } from "@/lib/context/selectedPokemonContextProvider";

const PokemonList = ({
  data,
  fetchData,
}: {
  data: InfiniteData<APIPokemonOverview>;
  fetchData: () => void;
}) => {
  const pokemonList = useMemo(() => {
    return data.pages.flatMap((page) => page.results);
  }, [data]);

  const { selectedPokemon } = useSelectedPokemonContext();

  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchData();
  }, [entry]);

  return (
    <section className="flex flex-wrap justify-center gap-6 md:gap-8 w-full h-fit transition-all">
      {pokemonList.map((pokemon, idx) => (
        <PokemonCard
          ref={idx === pokemonList.length - 1 ? ref : undefined}
          key={pokemon.url}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
      {selectedPokemon && <PokemonMovesModal />}
    </section>
  );
};

PokemonList.Error = PokemonListError;
PokemonList.Loading = PokemonListLoading;
PokemonList.Empty = PokemonListEmpty;

export default PokemonList;
