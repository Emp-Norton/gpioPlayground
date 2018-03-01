import React from 'react';
import axios from 'axios';
import img from '../../dist/loudspeaker.png'


export default class BuzzerField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	buzz() {

	}

	render() {
		return (
			<div>
				<img src={img} className="loudspeaker" />
				<input type="text" id="buzzerInput" placeholder="Buzzer words!" />
			</div>
		)
	}
}