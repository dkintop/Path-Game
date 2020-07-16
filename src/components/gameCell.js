import React, { Component } from "react";
import styles from "../css/gameCell.module.css";
import { connect } from "react-redux";
import { setStartPosition } from "../redux-actions/gameActions.js";
import { toggleGameMode } from "../redux-actions/gameActions";
export class GameCell extends Component {
  constructor(props) {
    super(props);
    this.coords = this.props.coords;
  }

  setStartPosition = () => {
    if (this.props.gameMode === "set start position") {
      this.props.setStartPosition(this.props.coords);
      this.props.toggleGameMode("record instructions");
    }
  };

  isStartPosition = () => {
    return this.coords === this.props.startPosition;
  };

  cellStyle() {
    if (this.isStartPosition()) {
      return styles.startPosition;
    } else {
      return styles.emptyCell;
    }
  }

  render() {
    return (
      <div className={this.cellStyle()} onClick={this.setStartPosition}></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startPosition: state.gameController.startPos,
    gameMode: state.gameController.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartPosition: (coords) => dispatch(setStartPosition(coords)),
    toggleGameMode: (mode) => dispatch(toggleGameMode(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCell);
