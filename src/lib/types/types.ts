export interface PokemonDetail {
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
    name: string;
    url: string;
  };
}
