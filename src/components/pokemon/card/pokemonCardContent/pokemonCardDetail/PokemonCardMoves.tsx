"use client";

import { useSelectedPokemonContext } from "@/lib/context/selectedPokemonContextProvider";

const PokemonCardMoves = ({ name }: { name: string }) => {
  const { selectedPokemon, setSelectedPokemon } = useSelectedPokemonContext();

  const handleSelect = (e: React.BaseSyntheticEvent) => {
    const name = e.target.name;

    if (name !== selectedPokemon) setSelectedPokemon(name);
  };

  return (
    <button
      name={name}
      className={
        "w-full text-white spacing rounded-md bg-primary h-8 uppercase"
      }
      onClick={handleSelect}
    >
      View moves
    </button>
  );
};

export default PokemonCardMoves;
