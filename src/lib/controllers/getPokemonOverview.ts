import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import axios from "axios";
import { APIPokemonOverview } from "@/lib/types/apiTypes";

//fetches the data using either the default or the "next" property from the previous response
const fetchPokemon = async ({ pageParam }: QueryFunctionContext) => {
  const { data } = await axios.get<APIPokemonOverview>(
    pageParam ?? "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
  );
  return data;
};

//infinite query custom hook
export const usePokemonQuery = () =>
  useInfiniteQuery({
    queryKey: ["pokemonOverview"],
    queryFn: fetchPokemon,
    //defaults to undefined, hence not using any next page and defaulting to the one provided in the function
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
  });
