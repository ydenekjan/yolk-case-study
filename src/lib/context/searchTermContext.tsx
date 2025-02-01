import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type Context = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchTermContext = createContext<Context | null>(null);

export const SearchTermContextProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export const useSearchTermContext = () => {
  const context = useContext(SearchTermContext);

  if (!context)
    throw new Error(
      "SearchTermContext must be called from within the SearchTermContextProvider",
    );

  return context;
};
