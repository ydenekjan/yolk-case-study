import StatCircle from "@/components/pokemon/card/pokemonCardContent/pokemonCardDetail/stats/statCircle";
import { PokemonCardContentProps } from "@/components/pokemon/card/pokemonCardContent/pokemonCardContent";

const PokemonCardStats = ({
  stats,
}: {
  stats: PokemonCardContentProps["stats"];
}) => {
  return (
    <div className={"grid grid-cols-2 md:grid-cols-3 gap-4 w-full"}>
      {stats?.map((stat) => (
        <StatCircle
          key={stat.stat.name}
          name={stat.stat.name}
          base_stat={stat?.base_stat}
        />
      ))}
    </div>
  );
};

export default PokemonCardStats;
