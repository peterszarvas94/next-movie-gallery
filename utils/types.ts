export type AgeRating = 0 | 12 | 16 | 18;

export type Input = {
  title: string,
  description: string,
  ageRating: AgeRating,
}

export type Movie = Input & {
  _id: string;
}

export type Sample = {
  movies: Input[]
}
