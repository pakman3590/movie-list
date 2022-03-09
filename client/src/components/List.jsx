import React from 'react';
// renders list entries


import ListEntry from './ListEntry.jsx';

// receives movies prop as array of movie objects
const List = (props) => {
  return (
    <ul>
      {props.movies.map( movie =>
        <ListEntry movie={movie.title} />
      )}
    </ul>
  )
}

export default List

