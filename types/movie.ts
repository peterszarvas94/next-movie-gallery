export type Movie = {
  id: number;
  title: string;
  description: string;
  ageRating: number;
}

export type Database = {
  movies: Movie[]
}
