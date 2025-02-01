"use client";

import { ReactNode } from "react";
import { SelectedPokemonContextProvider } from "@/lib/context/selectedPokemonContextProvider";

const PokemonContextWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SelectedPokemonContextProvider>{children}</SelectedPokemonContextProvider>
  );
};

export default PokemonContextWrapper;
