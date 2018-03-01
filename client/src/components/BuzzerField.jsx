import React from 'react';

export default class BuzzerField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<input type="text" id="buzzerInput" placeholder="Buzzer words!" />
			</div>
		)
	}
}