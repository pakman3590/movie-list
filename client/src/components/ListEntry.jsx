import React from 'react';
// generates list entry component

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  //receives movie prop as string title of movie
  render() {
    return (
      <li className='listEntry'>{this.props.movie}</li>
    )
  }
}




export default ListEntry