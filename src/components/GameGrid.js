import React, { Component } from "react";
import styles from "../css/GameGrid.module.css";
export default class GameGrid extends Component {
  generateCells() {
    let cells = [];
    for (let i = 0; i < 50; i++) {
      cells.push(<div className={styles.cell}></div>);
    }
    return cells;
  }

  render() {
    return <div className={styles.gridContainer}>{this.generateCells()}</div>;
  }
}
