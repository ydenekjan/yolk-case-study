import { memo, useEffect, useState } from "react";
import axios from "axios";
import { APIPokemon } from "@/lib/types/apiTypes";
import { PokemonDetail } from "@/lib/types/types";
import PokemonCardHeader from "@/components/pokemon/card/pokemonCardHeader/pokemonCardHeader";
import PokemonCardContent from "@/components/pokemon/card/pokemonCardContent/pokemonCardContent";

const PokemonCard = memo(({ url, name }: APIPokemon) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return (
    <div
      className={
        "bg-background rounded-md outline-gray-400 outline dark:text-gray-300 dark:shadow-foreground flex flex-col w-64 overflow-hidden"
      }
    >
      <div
        className={
          "hover:-translate-y-24 transition-all w-full h-80 cursor-default rounded-md"
        }
      >
        <PokemonCardHeader
          name={name}
          spriteUrl={pokemon?.sprites.front_default}
        />
        <PokemonCardContent moves={pokemon?.moves} stats={pokemon?.stats} />
      </div>
    </div>
  );
});

PokemonCard.displayName = "PokemonCard";

export default PokemonCard;
