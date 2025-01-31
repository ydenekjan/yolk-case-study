import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonDetail } from "@/lib/types/types";
import { RxCross2 } from "react-icons/rx";
import { useSelectedPokemonContext } from "@/lib/context/selectedPokemonContextProvider";
import LoadingDots from "@/components/pokemon/loading/loadingDots";

const PokemonMovesModal = () => {
  const { selectedPokemon, setSelectedPokemon } = useSelectedPokemonContext();

  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    axios
      .get<PokemonDetail>(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`,
      )
      .then((res) => {
        setPokemon(res.data);
        setSelectedPokemon(res.data.name);
      });
  }, []);

  return (
    <div
      className={`inset-0 w-screen h-screen bg-gray-300/10 backdrop-blur-sm fixed z-50 flex justify-center items-center`}
    >
      <section
        className={`w-[1440px] h-[720px] p-12 pb-4 mx-6 md:mx-12 lg:mx-24 gap-y-12 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] bg-secondary rounded-lg border-accent relative overflow-hidden flex flex-col ${!pokemon ? "justify-center" : null}`}
      >
        {!!pokemon ? (
          <>
            <header
              className={"w-full flex justify-between items-start gap-x-8"}
            >
              <h3 className={"uppercase text-2xl"}>
                {pokemon?.name}&#39;s Moves
              </h3>
              <button
                className={"mt-1"}
                onClick={() => {
                  setPokemon(null);
                  setSelectedPokemon(null);
                }}
              >
                <RxCross2 size={24} />
              </button>
            </header>

            <div
              className={
                "pb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 overflow-y-scroll scrollbar-hide leading-loose"
              }
            >
              {pokemon?.moves.map(({ move }) => (
                <p key={move.name}>{move.name.split("-").join(" ")}</p>
              ))}
            </div>
          </>
        ) : (
          <LoadingDots />
        )}
        <div
          className={
            "absolute bottom-4 left-0 right-0 h-20 bg-gradient-to-t from-secondary to-transparent"
          }
        ></div>
      </section>
    </div>
  );
};

export default PokemonMovesModal;
