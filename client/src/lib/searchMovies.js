const searchMovies = (searchTerm, database) => {
  // results array
  let results = [];
  // loop through database
  for (let movie of database) {
    console.log(movie)
    if (movie.title.includes(searchTerm)) {
      results.push(movie);
      console.log('pushed!')
    }
  }
  console.log(results)
  return results;
}

export default searchMovies