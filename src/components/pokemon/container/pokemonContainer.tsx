import { usePokemonQuery } from "@/lib/controllers/getPokemonOverview";
import PokemonList from "@/components/pokemon/container/pokemonList";

const PokemonContainer = () => {
  const { data, fetchNextPage, isError, isLoading } = usePokemonQuery();

  return (
    <section
      className={
        "flex w-full h-fit flex-col items-center justify-center bg-white gap-y-4 max-w-7xl"
      }
    >
      {isError ? (
        <PokemonList.Error />
      ) : isLoading ? (
        <PokemonList.Loading />
      ) : !data ? (
        <PokemonList.Empty />
      ) : (
        <PokemonList data={data} />
      )}

      <button
        className={
          "rounded-md bg-foreground border text-background uppercase px-4 py-1.5 text-lg"
        }
        type={"button"}
        onClick={() => fetchNextPage()}
      >
        fetch
      </button>
    </section>
  );
};

export default PokemonContainer;
