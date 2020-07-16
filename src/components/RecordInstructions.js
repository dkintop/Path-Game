import React, { Component } from "react";
import { connect } from "react-redux";
import { saveInstructions } from "../redux-actions/gameActions";
export class RecordInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: [],
    };
  }

  mapKeyCodeToString(keyCode) {
    switch (keyCode) {
      case 38:
        return "up";
      case 39:
        return "right";
      case 40:
        return "down";
      case 37:
        return "left";
      default:
        return "not allowed";
    }
  }

  handleRecordInstruction = (e) => {
    e.preventDefault();
    const direction = this.mapKeyCodeToString(e.keyCode);
    if (direction != "not allowed") {
      this.state.instructions.push(direction);
      this.props.saveInstructions(this.state.instructions);
    }
  };

  render() {
    return (
      <div
        onKeyDown={this.handleRecordInstruction}
        style={{ backgroundColor: "grey" }}
        tabIndex="0"
      >
        <p>Click here and press arrow keys to record your instructions!</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveInstructions: (instructions) =>
      dispatch(saveInstructions(instructions)),
  };
};

//create recordInstruction event handler to handle keyPress events that pushes the key value into an array
//display instructions to user
export default connect(null, mapDispatchToProps)(RecordInstructions);
