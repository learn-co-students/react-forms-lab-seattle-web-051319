import React from "react";

// props:
//  maxChars: 140,
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      chars: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      chars: this.state.chars + 1,
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        value={this.state.message}
        onChange={this.handleChange}
        /> Remaining Characters: {this.props.maxChars - this.state.chars}
      </div>
    );
  }
}

export default TwitterMessage;
