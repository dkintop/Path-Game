import React, { Component } from "react";
import styles from "../css/GameGrid.module.css";
import { connect } from "react-redux";
import { setStartPosition } from "../redux-actions/gameActions.js";
import GameCell from "../components/gameCell.js";
export class GameGrid extends Component {
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
