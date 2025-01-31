import { ReactNode } from "react";
import PokemonContextWrapper from "@/utils/wrappers/pokemonContextWrapper";
import QueryWrapper from "@/utils/wrappers/queryWrapper";

const MasterWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <PokemonContextWrapper>
      <QueryWrapper>{children}</QueryWrapper>
    </PokemonContextWrapper>
  );
};

export default MasterWrapper;
