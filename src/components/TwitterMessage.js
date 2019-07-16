import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      max: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      max: this.state.max - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={event => this.handleChange(event)} />
        <span>
          {this.state.max}
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
