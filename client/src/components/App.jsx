import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';
import { Movies, Watched} from '/client/src/data/Movies.js';
import AddMovie from './AddMovie.jsx';

// receives movies prop as array of movie objects

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currMovies: Movies,
      test: 1
    };

    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.updateWatchedMovies = this.updateWatchedMovies.bind(this);
    this.titleChecker = this.titleChecker.bind(this);
  }

  titleChecker(title, database) {
    for (let movie of database) {
      if (title === movie.title) {
        return true;
      }
    }
    return false;
  }


  handleNewMovie(movieTitle, database) {
    // movie checker function
    // make sure movie database doesn't already have movie title
    if (!titleChecker(movieTitle, database)) {
      // add new movie to movie database
      Movies.push({ title: movieTitle });
      // update current movie state
      this.setState({ currMovies: Movies })
    } else {
      // if movie exists, give alert
      alert('Movie already exists in database!')
    }
  }

  handleSearchSubmit(newMovies) {
    // if array is filled
    if (newMovies.length > 0) {
      // change movies state to new array
      this.setState({ currMovies: newMovies });
    } else {
      // else alert no movies found
      alert('No movies found!');
      this.setState({ currMovies: Movies })
    }
  }

  // watched movie updater
  updateWatchedMovies(title, watchedState) {
    // if watchedstate is true
      // check if
  }

  render() {
    return (
      <div>
        <AddMovie handleNewMovie={this.handleNewMovie} movies={Movies} />
        <Search handleSearchSubmit={this.handleSearchSubmit} movies={Movies}/>
        <List movies={this.state.currMovies} />
      </div>

    )
  }
};


export default App;