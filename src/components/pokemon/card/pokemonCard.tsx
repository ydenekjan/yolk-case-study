import { Ref, useEffect, useState } from "react";
import axios from "axios";
import { APIPokemon } from "@/lib/types/apiTypes";
import { PokemonDetail } from "@/lib/types/types";
import PokemonCardHeader from "@/components/pokemon/card/pokemonCardHeader/pokemonCardHeader";
import PokemonCardContent from "@/components/pokemon/card/pokemonCardContent/pokemonCardContent";

interface PokemonCardProps extends APIPokemon {
  ref: Ref<HTMLDivElement> | undefined;
}

const PokemonCard = ({ url, name, ref }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return (
    <div
      ref={ref}
      className={
        "bg-secondary transition-all duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,_255,_255,_0.35)] w-52 rounded-md border border-accent dark:shadow-[0px_8px_24px_-4px_rgba(255,_255,_255,_0.1)] flex flex-col overflow-hidden z-50"
      }
    >
      <div
        className={
          "transition-all w-full h-fit md:gap-y-2 gap-y-4 flex flex-col py-4 cursor-default rounded-md"
        }
      >
        <PokemonCardHeader
          name={name}
          spriteUrl={pokemon?.sprites.front_default}
        />
        <PokemonCardContent name={name} stats={pokemon?.stats} />
      </div>
    </div>
  );
};

export default PokemonCard;
