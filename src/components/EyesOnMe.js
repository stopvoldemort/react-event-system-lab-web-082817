// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';
class EyesOnMe extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button
        onFocus={(ev) => {console.log("Good!")}}
        onBlur={(ev) => {console.log("Hey! Eyes on me!")}}
      />
    )
  }
}

export default EyesOnMe
