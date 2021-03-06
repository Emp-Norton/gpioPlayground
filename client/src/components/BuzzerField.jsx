import React from 'react';
import axios from 'axios';
import img from '../../dist/loudspeaker.png'
import $ from 'jquery'; // fix this to be the react way (update state)


export default class BuzzerField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      message: undefined
		}
	}

	buzz(message) {
    axios.get(`http://192.168.86.163:3000/buzzer/${message}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })

	}

	render() {
		return (
			<div>
				<img src={img} className="loudspeaker" onClick={ () => {
          this.buzz(this.state.message);
        }} />
				<input type="text" id="buzzerInput" placeholder="Buzzer words!" onChange={ () => {
          let message = $('#buzzerInput').val()
          this.setState({message: message})
        }} />
			</div>
		)
	}
}