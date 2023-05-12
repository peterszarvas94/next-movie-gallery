export type AgeRating = 0 | 12 | 16 | 18;

export type Movie = {
  _id: string;
  title: string;
  description: string;
  ageRating: AgeRating;
}

export type Database = {
  movies: Movie[]
}

export type Inputs = {
  title: string,
  description: string,
  ageRating: AgeRating,
}
