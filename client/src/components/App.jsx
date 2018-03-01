import React from 'react';
import ReactDOM from 'react-dom';
import LedButton from './LedButton.jsx';
import BuzzerField from './BuzzerField.jsx';


export default class App extends React.Component {
	constructor(props) {
		super(props);
    this.state = {

    }
	}


  render() {
    return (
      <div> 
        <h1> Welcome to the GPIO Playground! </h1>
        <div id="ledButtonContainer">
          <LedButton imgUrl='./red.png' color="red" id="ledLeft" />
          <LedButton imgUrl='./green.png' color="green" />
          <LedButton imgUrl='./blue.png' color="blue" id="ledRight" />
        </div>
        <BuzzerField />
      </div>
      )
  }
}