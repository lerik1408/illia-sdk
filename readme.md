# About SDK

This SDK has all methods which have an API. But it is not the mirror.

# How to use
Install lib.

```bash
npm i lord-of-the-ring-sdk
```

use
```js
import SDK from 'lord-of-the-ring-sdk'

const sdk = new SDK('token');

async function main() {
  console.log(await sdk.listBooks());
  console.log(await sdk.retrieveBooks());
  console.log(await sdk.listBookChapters());

  console.log(await sdk.listMovies());
  console.log(await sdk.retrieveMovie());
  console.log(await sdk.listMovieQuotes());

  console.log(await sdk.listCharacters());
  console.log(await sdk.retrieveCharacter());
  console.log(await sdk.listCharacterQuotes());

  console.log(await sdk.listQuotes());
  console.log(await sdk.retrieveQuote());

  console.log(await sdk.listChapters());
  console.log(await sdk.retrieveChapter());
}

main();
```
When you want to use pagination, sorting, and filtering, you can use ***buildPagination*** ***buildSortingOption***  ***buildFilteringOption*** methods and provide the results in methods by first and second arguments.
Also you can use ***filteringAndSearchingKeys***, ***filteringPatterns*** methods for correct building requests. 


For example
```js
  const result = await sdk.listBooks({
    pagination: sdk.buildPagination(2, 1),
    sorting: sdk.buildSortingOption(
      sdk.filteringAndSearchingKeys.book[1],
      'asc',
    ),
    filtering: sdk.buildFilteringOption(
      sdk.filteringAndSearchingKeys.book[1],
      sdk.filteringPatterns.match,
      'The Two Towers',
    ),
  });

  console.log(result);
```