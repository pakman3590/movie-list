import React from 'react';
import searchMovies from '/client/src/lib/searchMovies.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }
  render() {
    return (
      <div id='searchBar'>
        <input id='search' type='text' placeholder='Search' onChange={this.handleChange}></input>
        <button className='subtmitButton' onClick={() => {
          this.props.handleClick(searchMovies(this.state.searchText, this.props.movies));
        }}>Search</button>
      </div>
    )
  }
}

export default Search