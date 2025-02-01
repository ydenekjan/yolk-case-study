import { IoSearchOutline } from "react-icons/io5";
import { useSearchTermContext } from "@/lib/context/searchTermContext";
import { BaseSyntheticEvent, useState } from "react";

const SearchPokemon = () => {
  const { setSearchTerm } = useSearchTermContext();
  const [search, setSearch] = useState("");

  return (
    <div
      className={
        "flex max-w-[720px] w-full h-fit bg-background relative items-center rounded-full shadow-[(255,255,255,0.3)]"
      }
    >
      <input
        placeholder={"Pokémon number or name"}
        className={
          "w-full border border-accent placeholder:italic dark:text-white text-lg outline-0 h-10 rounded-full bg-background pl-4 px-12"
        }
        value={search}
        onChange={(e: BaseSyntheticEvent) => {
          setSearch(e.target.value);
        }}
      />

      <button
        className={
          "absolute shadow shadow-primary right-0 h-full aspect-square rounded-full bg-primary flex items-center justify-center"
        }
        onClick={() => setSearchTerm(search)}
      >
        <IoSearchOutline size={24} color={"white"} />
      </button>
    </div>
  );
};

export default SearchPokemon;
