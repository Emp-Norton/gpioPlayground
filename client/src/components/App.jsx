import React from 'react';
import ReactDOM from 'react-dom';
import LedButton from './LedButton.jsx';


export default class App extends React.Component {
	constructor(props) {
		super(props);
    this.state = {

    }
	}


  render() {
    return (
      <div> 
        <p> Hello! </p>
        <LedButton imgUrl='./green.png' color="green" />
      </div>
      )
  }

}