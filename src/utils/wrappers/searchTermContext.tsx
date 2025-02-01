"use client";

import { ReactNode } from "react";
import { SearchTermContextProvider } from "@/lib/context/searchTermContext";

const SearchTermContextWrapper = ({ children }: { children: ReactNode }) => {
  return <SearchTermContextProvider>{children}</SearchTermContextProvider>;
};

export default SearchTermContextWrapper;
