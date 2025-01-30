import { usePokemonQuery } from "@/lib/controllers/getPokemonOverview";
import PokemonList from "@/components/pokemon/container/pokemonList";
import LoadingDots from "@/components/pokemon/loading/loadingDots";

const PokemonContainer = () => {
  const {
    data,
    fetchNextPage,
    isError,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemonQuery();

  return (
    <section
      className={
        "flex w-screen px-12 pb-12 h-fit flex-col items-center justify-center gap-y-4 max-w-[1440px]"
      }
    >
      {isError ? (
        <PokemonList.Error />
      ) : isLoading ? (
        <PokemonList.Loading />
      ) : !data ? (
        <PokemonList.Empty />
      ) : (
        <PokemonList data={data} fetchData={fetchNextPage} />
      )}

      {isFetchingNextPage && <LoadingDots />}

      {!hasNextPage && <div>You&#39;ve reached the end</div>}
    </section>
  );
};

export default PokemonContainer;
