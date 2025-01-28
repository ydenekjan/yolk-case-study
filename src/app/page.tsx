"use client";
import HeaderImage from "@/components/header/headerImage";
import "../config/axios.ts";

export default function Home() {
  return (
    <>
      <header className={"w-full h-1/3 relative"}>
        <HeaderImage />
      </header>
      <main></main>
    </>
  );
}
