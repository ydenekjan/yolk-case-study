import PokemonCard from "@/components/pokemon/card/pokemonCard";
import { InfiniteData } from "react-query";
import { APIPokemonOverview } from "@/lib/types/apiTypes";
import PokemonListEmpty from "@/components/pokemon/container/pokemonListHandlers/pokemonListEmpty";
import PokemonListError from "@/components/pokemon/container/pokemonListHandlers/pokemonListError";
import PokemonListLoading from "@/components/pokemon/container/pokemonListHandlers/pokemonListLoading";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";
import PokemonMovesModal from "@/components/pokemon/modal/pokemonMovesModal";
import { useSelectedPokemonContext } from "@/lib/context/selectedPokemonContextProvider";
import { useSearchTermContext } from "@/lib/context/searchTermContext";
import { fetchPokemonByNameOrId } from "@/lib/controllers/getPokemonBySearch";
import { PokemonDetail } from "@/lib/types/types";
import { baseUrl } from "@/lib/controllers/getPokemonOverview";

const PokemonList = ({
  data,
  fetchData,
  refetch,
}: {
  data: InfiniteData<APIPokemonOverview>;
  fetchData: () => void;
  refetch: () => void;
}) => {
  const { searchTerm } = useSearchTermContext();
  const { selectedPokemon } = useSelectedPokemonContext();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  //memo of pokemon list if user didnt search anything
  const pokemonList = useMemo(() => {
    if (!searchTerm) {
      return data.pages.flatMap((page) => page.results);
    }
  }, [data, searchTerm]);

  //if user did search set the pokemon as data
  useEffect(() => {
    if (searchTerm) {
      fetchPokemonByNameOrId(searchTerm).then((data) => {
        setPokemon(data);
      });
    } else {
      refetch();
      setPokemon(null);
    }
  }, [searchTerm]);

  //ref for infinite scrolling
  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  //fetch data each time users scrolls to the end
  useEffect(() => {
    if (entry?.isIntersecting) fetchData();
  }, [entry]);

  return (
    <section className="flex flex-wrap justify-center gap-6 md:gap-8 w-full h-fit transition-all">
      {!pokemon &&
        !searchTerm &&
        pokemonList?.map((pokemon, idx) => (
          <PokemonCard
            ref={idx === pokemonList.length - 1 ? ref : undefined}
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      {pokemon && (
        <PokemonCard
          ref={ref}
          key={pokemon.name}
          name={pokemon.name}
          url={`${baseUrl}/${pokemon.name}`}
        />
      )}
      {!pokemon && <PokemonListEmpty />}

      {selectedPokemon && <PokemonMovesModal />}
    </section>
  );
};

PokemonList.Error = PokemonListError;
PokemonList.Loading = PokemonListLoading;
PokemonList.Empty = PokemonListEmpty;

export default PokemonList;
