export type AgeRating = 0 | 12 | 16 | 18;

export type Movie = {
  id: number;
  title: string;
  description: string;
  ageRating: AgeRating;
}

export type Database = {
  movies: Movie[]
}

