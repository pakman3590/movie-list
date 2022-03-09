const searchMovies = (searchTerm, database) => {
  // results array
  let results = [];
  // loop through database
  for (let movie of database) {
    if (movie.title.includes(searchTerm)) {
      results.push(movie);
    }
  }

  return results;
}

export default searchMovies