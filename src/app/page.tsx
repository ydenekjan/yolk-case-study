"use client";
import HeaderImage from "@/components/header/headerImage";
import PokemonContainer from "@/components/pokemon/container/pokemonContainer";
import SearchPokemon from "@/components/search/searchPokemon";

export default function Home() {
  return (
    <>
      <header
        className={"w-full h-1/2 fixed flex justify-center items-center -z-50"}
      >
        <HeaderImage />
      </header>
      <main
        className={
          "flex flex-col w-full h-screen gap-y-[10vh] p-12 items-center relative"
        }
      >
        <SearchPokemon />
        <PokemonContainer />
      </main>
    </>
  );
}
