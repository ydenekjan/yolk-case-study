import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type Context = {
  selectedPokemon: string | null;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string | null>>;
};

const SelectedPokemonContext = createContext<Context | null>(null);

export const SelectedPokemonContextProvider = ({ children }: Props) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  return (
    <SelectedPokemonContext.Provider
      value={{ selectedPokemon, setSelectedPokemon }}
    >
      {children}
    </SelectedPokemonContext.Provider>
  );
};

export const useSelectedPokemonContext = () => {
  const context = useContext(SelectedPokemonContext);

  if (!context)
    throw new Error(
      "SelectedPokemonContext must be called from within the SelectedPokemonContextProvider",
    );

  return context;
};
