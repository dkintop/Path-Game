import React, { Component } from "react";
import styles from "../css/GameGrid.module.css";
export default class GameGrid extends Component {
  generateCells() {
    let cells = [];
    let coords = { x: 1, y: 5 };

    function assignCoords() {
      let x = coords.x;
      let y = coords.y;
      //handle updating coords to properly assign next id
      if (x < 10) {
        coords.x += 1;
      } else {
        coords.y -= 1;
        coords.x = 1;
      }

      return `x-${x}y-${y}`;
    }

    for (let i = 0; i < 50; i++) {
      cells.push(<div className={styles.cell} id={assignCoords()}></div>);
    }
    return cells;
  }

  render() {
    return <div className={styles.gridContainer}>{this.generateCells()}</div>;
  }
}
