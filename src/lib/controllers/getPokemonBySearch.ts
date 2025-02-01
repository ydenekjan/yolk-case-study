import axios from "axios";
import { baseUrl } from "@/lib/controllers/getPokemonOverview";
import { PokemonDetail } from "@/lib/types/types";

export const fetchPokemonByNameOrId = async (
  searchTerm: string,
): Promise<PokemonDetail | null> => {
  try {
    const { data } = await axios.get<PokemonDetail>(`${baseUrl}/${searchTerm}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};
