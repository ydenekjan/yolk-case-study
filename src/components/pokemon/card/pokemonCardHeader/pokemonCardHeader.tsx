import Image from "next/image";
import unknownPokemon from "@public/unknown-pokemon.png";

interface PokemonCardHeaderProps {
  spriteUrl?: string | null;
  name: string;
}

const PokemonCardHeader = ({ spriteUrl, name }: PokemonCardHeaderProps) => {
  return (
    <>
      <h2 className={"text-xl text-center uppercase"}>{name}</h2>
      <div className={"w-full aspect-square relative"}>
        <Image
          className={`object-cover dark:drop-shadow-[3px_5px_20px_rgba(255,255,255,0.2)] drop-shadow-[3px_5px_20px_rgba(0,0,0,0.2)] ${!spriteUrl ? "animate-pulse" : null}`}
          fill
          src={spriteUrl || unknownPokemon}
          alt={`Picture of ${name}`}
        />
      </div>
    </>
  );
};

export default PokemonCardHeader;
