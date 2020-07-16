import React, { Component } from "react";
import { connect } from "react-redux";
export class ModeDisplay extends Component {
  render() {
    return <div>{this.props.gameMode}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    gameMode: state.gameController.mode,
  };
};
export default connect(mapStateToProps)(ModeDisplay);
