import React, { Component } from "react";
import styles from "../css/GameGrid.module.css";
import { connect } from "react-redux";
import { setStartPosition } from "../redux-actions/gameActions.js";
import { GameCell } from "../components/gameCell.js";
export class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startPosition: null,
    };
  }

  //this is where we are at. we need to: 1.change background color of selected cell 2. dispatch action to update redux store of our starting position. consider moving outside of this component.

  generateCells() {
    let cells = [];
    let coords = { x: 0, y: 5 };

    function assignCoords() {
      let x = coords.x;
      let y = coords.y;

      if (x < 9) {
        coords.x += 1;
      } else {
        coords.y -= 1;
        coords.x = 0;
      }

      return { x: x, y: y };
    }

    for (let i = 0; i < 50; i++) {
      cells.push(<GameCell coords={assignCoords()} />);
    }
    return cells;
  }

  render() {
    return <div className={styles.gridContainer}>{this.generateCells()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    startPosition: state.gameController.startPos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartPosition: (coords) => dispatch(setStartPosition()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);
