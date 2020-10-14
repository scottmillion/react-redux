// ===========================
// Import the React and ReactDOM libraries
// ===========================

// Note React and ReactDOM are variable names we've just chosen
import React from 'react';
import ReactDOM from 'react-dom';

// ===========================
// Create a react component
// ===========================

function getButtonText() {
  return 'Click on me now!';
}

// example of function based component
const App = () => {
  const buttonText = 'Click Me!';
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input type="text" id="name"/>
      {/* Typical HTML way to add inline styles. Won't work. Need JSX way */}
      {/* <button style="background-color: blue; color: white;">Submit</button> */}
      <button style= {{ backgroundColor: 'blue', color: 'white'}}>
        {getButtonText()}
      </button>
      <button>{buttonText}</button>
    </div>
  );  
};

// ===========================
// Take the react component and show it on the screen
// ===========================

ReactDOM.render(<App/>, document.querySelector('#root'));