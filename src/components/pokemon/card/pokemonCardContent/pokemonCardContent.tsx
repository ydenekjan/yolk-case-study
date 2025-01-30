import { PokemonMove, PokemonStat } from "@/lib/types/types";
import PokemonCardMoves from "@/components/pokemon/card/pokemonCardContent/pokemonCardDetail/pokemonCardMoves";
import PokemonCardStats from "@/components/pokemon/card/pokemonCardContent/pokemonCardDetail/pokemonCardStats";

export interface PokemonCardContentProps {
  moves: PokemonMove[] | undefined;
  stats: PokemonStat[] | undefined;
}

const PokemonCardContent = ({ moves, stats }: PokemonCardContentProps) => {
  return (
    <section className={"grid grid-cols-2 gap-x-4 overflow-hidden px-4"}>
      <h3 className={"uppercase text-center my-2"}>moves</h3>
      <h3 className={"uppercase text-center my-2"}>stats</h3>
      <PokemonCardMoves moves={moves} />
      <PokemonCardStats stats={stats} />
    </section>
  );
};

export default PokemonCardContent;
