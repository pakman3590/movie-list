import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Movies from '/client/src/data/Movies.js';

ReactDOM.render(<App movies={Movies}/>, document.getElementById('app'));