// ===========================
// Import the React and ReactDOM libraries
// ===========================

// Note React and ReactDOM are variable names we've just chosen
import React from 'react';
import ReactDOM from 'react-dom';

// ===========================
// Create a react component
// ===========================

// example of function based component
const App = () => {
  return <div>Hi There!</div>
};

// ===========================
// Take the react component and show it on the screen
// ===========================

ReactDOM.render(<App/>, document.querySelector('#root'));