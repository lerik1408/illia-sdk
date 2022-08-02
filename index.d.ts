interface IFilteringPatterns {
  match: '=',
  negativeMatch: '!=',
  include: ',',
  notExists: '!',
  exists: '',
  less: '<',
  more: '>',
  equal: '=',
}

interface IFilteringAndSearchingKeys {
  book: string[],
  movie: string[],
  character: string[],
  quote: string[],
  chapter: string[],
}

interface IOption {
  pagination: string
  sorting: string
  filtering: string
}

interface ISdk {
  filteringPatterns: IFilteringPatterns,
  filteringAndSearchingKeys: IFilteringAndSearchingKeys,

  buildPagination(limit = 1000, page = 0): string

  buildSortingOption(key: string, orderBy: string): string

  buildFilteringOption(key: string, pattern: string, value: string): string

  listBooks(options?: IOption): Promise<any>
  retrieveBooks(id: string, options?: IOption): Promise<any>
  listBookChapters(id:string, options?: IOption): Promise<any>

  listMovies(options?: IOption): Promise<any>
  retrieveMovie(id: string, options?: IOption): Promise<any>
  listMovieQuotes(id: string, options?: IOption): Promise<any>

  listCharacters(options?: IOption): Promise<any>
  retrieveCharacter(id: string, options?: IOption): Promise<any>
  listCharacterQuotes(id: string, options?: IOption): Promise<any>

  listQuotes(options?: IOption): Promise<any>
  retrieveQuote(id: string, options?: IOption): Promise<any>

  listChapters(options?: IOption): Promise<any>
  retrieveChapter(id: string, options?: IOption): Promise<any>
}

declare const SDK: ISdk;

export default SDK;