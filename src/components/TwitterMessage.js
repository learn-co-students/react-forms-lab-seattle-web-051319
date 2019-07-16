import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: "",
    charsLeft: this.props.maxChars}
  }

  handleOnChange = (event) => {
    let newInput = event.target.value;
    this.setState({value: newInput})
    this.setState({charsLeft: this.state.charsLeft - 1}) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleOnChange} maxLength={this.props.maxChars} value={this.state.value}/>
        <p>{this.state.charsLeft} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
