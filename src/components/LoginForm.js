import React, { Component } from "react";

class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const userName = this.state.username;
		const userPassword = this.state.password;
		
		if (userName.length !== 0 && userPassword.length !== 0) {
			const userData = {username: userName, password: userPassword};
			this.props.handleLogin(userData);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>
						Username
						<input id="username"
									 name="username"
									 type="text"
									 value={this.state.username}
									 onChange={this.handleChange}/>
					</label>
				</div>
				<div>
					<label>
						Password
						<input id="password"
									 name="password"
									 type="password"
									 value={this.state.password}
									 onChange={this.handleChange}/>
					</label>
				</div>
				<div>
					<button type="submit">Log in</button>
				</div>
			</form>
		);
	}
}

export default LoginForm;