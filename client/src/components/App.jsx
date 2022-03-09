import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';

// receives movies prop as array of movie objects

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(callback) {
    // if callback returns filled array
    if (callback.length > 0) {
      // change movies state to new array
      this.setState({movies: callback});
    } else {
      // else alert no movies found
      alert('No movies found!');
    }
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} movies={this.props.movies}/>
        <List movies={this.props.movies} />
      </div>

    )
  }
};


export default App;