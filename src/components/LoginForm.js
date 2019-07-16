import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "",
  password: ""};
  }

  handleUsername = (event) => {
    let newInput = event.target.value;
    this.setState({username: newInput})
  }

  handlePassword = (event) => {
    let newInput = event.target.value;
    this.setState({password: newInput})
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username !== "" || this.state.password !== "")
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword}/>
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
