"use client";
import HeaderImage from "@/components/header/headerImage";
import PokemonContainer from "@/components/pokemon/container/pokemonContainer";

export default function Home() {
  return (
    <>
      <header className={"w-full h-1/3 absolute -z-50"}>
        <HeaderImage />
      </header>
      <main className={"flex w-full h-screen pt-[33vh] justify-center"}>
        <PokemonContainer />
      </main>
    </>
  );
}
