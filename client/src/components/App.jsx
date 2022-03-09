import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';
import Movies from '/client/src/data/Movies.js';

// receives movies prop as array of movie objects

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currMovies: this.props.movies,
      test: 1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newMovies) {
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

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} movies={Movies}/>
        <List movies={this.state.currMovies} />
      </div>

    )
  }
};


export default App;