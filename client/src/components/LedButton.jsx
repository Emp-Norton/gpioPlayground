import React from 'react';
import axios from 'axios';





export default class LedButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: this.props.imgUrl,
			color: this.props.color,
			toggle: "off"
		}
	}

	toggle() {
		let self = this;
		let toggleIntent = this.state.toggle === "off" ? "on" : "off";
		axios.get(`http://192.168.86.163:3000/light/${this.state.color}/${toggleIntent}`)
			.then(function(response) {
				console.log(response);
				if (response == "done") {
					self.setState({toggle: toggleIntent})
				} else {
					console.log('something went wrong');
				}
			})
			.catch(function(error){
				console.log(error)
			})
	}
	render() {
		return (
			<div className="ledButton" onClick={ () => {
				this.toggle();
			}}>
				<p>{this.props.color.toUpperCase()} LED</p>
				<img className="ledImg" src={this.props.imgUrl} />
				<hr />
				<p> {this.state.toggle} </p>
			</div>
		)
	}
}