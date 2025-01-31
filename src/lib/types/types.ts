export interface PokemonDetail {
  name: string;
  moves: PokemonMove[];
  stats: PokemonStat[];
  sprites: {
    [key: string]: string | null;
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: keyof typeof StatsEnum;
    url: string;
  };
}

export enum StatsEnum {
  hp = "hp",
  attack = "atk",
  defense = "def",
  "special-attack" = "sp. atk",
  "special-defense" = "sp. def",
  speed = "spd",
}
