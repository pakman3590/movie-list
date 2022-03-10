import React from 'react';
// generates list entry component

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }

    this.handleWatchButton = this.handleWatchButton.bind(this)
  }

  // watched button event handler
  handleWatchButton() {
    // toggle watched state
    this.setState({ watched: !this.state.watched })
    console.log('watch switched!')
  }

  //receives movie prop as string title of movie
  render() {
    return (
      <li className='listEntry'>{this.props.movie}
        <button className='watchedButton' onClick={() => this.handleWatchButton()}>Watched</button>
      </li>
    )
  }
}




export default ListEntry