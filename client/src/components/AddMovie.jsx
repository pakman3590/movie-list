import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ titleText: event.target.value })
  }

  render() {
    return (
      <div id='addMovie'>
        <input id='newMovieInput' type='text' onChange={this.handleChange} placeholder='Add Movie Title Here'></input>
        <button id='newMovieSubmit' onClick={() => this.props.handleNewMovie(this.state.titleText, this.props.movies)}>Add</button>
      </div>
    )
  }
}



export default AddMovie