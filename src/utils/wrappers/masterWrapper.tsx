import { ReactNode } from "react";
import PokemonContextWrapper from "@/utils/wrappers/pokemonContextWrapper";
import QueryWrapper from "@/utils/wrappers/queryWrapper";
import SearchTermContextWrapper from "@/utils/wrappers/searchTermContext";

const MasterWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <PokemonContextWrapper>
      <QueryWrapper>
        <SearchTermContextWrapper>{children}</SearchTermContextWrapper>
      </QueryWrapper>
    </PokemonContextWrapper>
  );
};

export default MasterWrapper;
