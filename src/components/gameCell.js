import React, { Component } from "react";
import styles from "../css/gameCell.module.css";
import { connect } from "react-redux";
import { setStartPosition } from "../redux-actions/gameActions.js";
export class GameCell extends Component {
  constructor(props) {
    super(props);
    this.coords = this.props.coords;
  }

  setStartPosition = () => {
    if (this.props.gameMode === "set start position") {
      return this.props.setStartPosition(this.props.coords);
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
//this is where we are at. we need to: 1.change background color of selected cell in starting position 2. dispatch action to update redux store of our starting position. 3. toggle a mode that will allow the user to set the start position, aka make a function that only works when i.e this.props.mode === "set start position"
const mapStateToProps = (state) => {
  return {
    startPosition: state.gameController.startPos,
    gameMode: state.gameController.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartPosition: (coords) => dispatch(setStartPosition(coords)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCell);
