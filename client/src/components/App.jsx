import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';


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
    console.log(`newMovies:`)
    console.log(newMovies)
    if (newMovies.length > 0) {
      // change movies state to new array
      this.setState({ currMovies: newMovies });
      console.log('movies refreshed')
      console.log(this.state.currMovies)
    } else {
      // else alert no movies found
      alert('No movies found!');
    }
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} movies={this.state.currMovies}/>
        <List movies={this.props.movies} />
      </div>

    )
  }
};


export default App;