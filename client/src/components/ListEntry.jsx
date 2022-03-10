import React from 'react';
// generates list entry component

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }
  }

  //receives movie prop as string title of movie
  render() {
    return (
      <li className='listEntry'>{this.props.movie}
        <button className='watchedButton'>Watched</button>
      </li>
    )
  }
}




export default ListEntry