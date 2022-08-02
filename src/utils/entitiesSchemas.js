export const bookSchema = {
  _id: 'string',
  name: 'string',
};

export const movieSchema = {
  _id: 'string',
  name: 'string',
  runtimeInMinutes: 0,
  budgetInMillions: 0,
  boxOfficeRevenueInMillions: 0,
  academyAwardNominations: 0,
  academyAwardWins: 0,
  rottenTomatoesScore: 0,
};

export const characterSchema = {
  _id: 'string',
  height: 'string',
  race: 'string',
  gender: 'string',
  birth: 'string',
  spouse: 'string',
  death: 'string',
  realm: 'string',
  hair: 'string',
  name: 'string',
  wikiUrl: 'string',
};

export const quoteSchema = {
  _id: 'string',
  dialog: 'string',
  movie: 'string',
  character: 'string',
  id: 'string',
};

export const chapterSchema = {
  _id: 'string',
  chapterName: 'string',
  book: 'string',
};
