import { PokemonCardContentProps } from "@/components/pokemon/card/pokemonCardContent/pokemonCardContent";

const PokemonCardStats = ({
  stats,
}: {
  stats: PokemonCardContentProps["stats"];
}) => {
  return (
    <div className={"flex flex-col gap-1 overflow-y-scroll"}>
      {stats?.map((stat) => (
        <div key={stat.stat.name} className={"flex justify-between gap-x-4"}>
          <p>{stat.stat.name}</p>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonCardStats;
