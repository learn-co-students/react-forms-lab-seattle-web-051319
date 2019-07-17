import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = event => {
    let input = event.target.value;
    this.setState({
      [event.target.name]: input,
      charsLeft: 140 - input.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.message} />
        <span>{this.state.charsLeft} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;
