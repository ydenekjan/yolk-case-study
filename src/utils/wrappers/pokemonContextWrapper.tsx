"use client";

import { ReactNode } from "react";
import { SelectedPokemonContextProvider } from "@/lib/context/selectedPokemonContextProvider";

//custom query wrapper to keep main layout cleaner
const PokemonContextWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SelectedPokemonContextProvider>{children}</SelectedPokemonContextProvider>
  );
};

export default PokemonContextWrapper;
