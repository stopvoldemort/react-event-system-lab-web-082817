// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';
class Keypad extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="password" onKeyUp={
        (ev) => {console.log('Entering password...')}
      } />
    )
  }
}

export default Keypad
