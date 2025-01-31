import { PokemonStat } from "@/lib/types/types";
import PokemonCardStats from "@/components/pokemon/card/pokemonCardContent/pokemonCardDetail/pokemonCardStats";
import PokemonCardMoves from "@/components/pokemon/card/pokemonCardContent/pokemonCardDetail/PokemonCardMoves";

export interface PokemonCardContentProps {
  name: string;
  stats: PokemonStat[] | undefined;
}

const PokemonCardContent = ({ name, stats }: PokemonCardContentProps) => {
  return (
    <section className={"flex flex-col px-4 gap-y-6 md:gap-y-4"}>
      <PokemonCardStats stats={stats} />
      <PokemonCardMoves name={name} />
    </section>
  );
};

export default PokemonCardContent;
