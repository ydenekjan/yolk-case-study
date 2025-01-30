import { PokemonCardContentProps } from "@/components/pokemon/card/pokemonCardContent/pokemonCardContent";

const PokemonCardMoves = ({
  moves,
}: {
  moves: PokemonCardContentProps["moves"];
}) => {
  return (
    <div className={"overflow-y-scroll flex flex-col gap-1"}>
      {moves?.map(({ move }) => (
        <p key={move.name}>{move.name.split("-").join(" ")}</p>
      ))}
    </div>
  );
};

export default PokemonCardMoves;
