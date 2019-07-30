import React, { Component } from "react";

class TwitterMessage extends Component {
	constructor(props) {
		super();
		this.state = {
			message: "",
			remainChar: props.maxChars
		};
	}
	
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
			remainChar: this.props.maxChars - event.target.value.length
		});
	}
	
	render() {
		return (
			<div>
				<strong>Your message:</strong>
				<input type="text"
							 name="message"
							 id="message"
							 value={this.state.message}
							 placeholder="(Compose message)"
							 onChange={(event) => this.handleChange(event)}/>
				<span> (Remaining characters: {this.state.remainChar})</span>
			</div>
		);
	}
}

export default TwitterMessage;