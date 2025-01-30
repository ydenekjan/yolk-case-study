export interface APIPokemonOverview {
  count: number;
  next: string;
  previous: string;
  results: APIPokemon[];
}

export interface APIPokemon {
  name: string;
  url: string;
}
