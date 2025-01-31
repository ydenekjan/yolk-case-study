import Image from "next/image";
import unknownPokemon from "@public/unknown-pokemon.png";

interface PokemonCardHeaderProps {
  spriteUrl?: string | null;
  name: string;
}

const PokemonCardHeader = ({ spriteUrl, name }: PokemonCardHeaderProps) => {
  return (
    <>
      <div className={"w-full aspect-square relative"}>
        <Image
          className={`transition-all ${!spriteUrl ? "animate-pulse" : null}`}
          fill
          src={spriteUrl || unknownPokemon}
          alt={`Picture of ${name}`}
        />
      </div>
      <h2 className={"text-xl text-center uppercase"}>{name}</h2>
    </>
  );
};

export default PokemonCardHeader;
