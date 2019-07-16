import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      input: ''
    };
  }

  handleFormSubmit = e => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  handleInputChange = event => {
    const target = event.target.name
    const value = event.target.value
    console.log(target)
    console.log(value)
    this.setState({
      [target]: value
    })
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
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
