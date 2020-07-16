import React, { Component } from "react";
import styles from "../css/gameCell.module.css";
export class GameCell extends Component {
  constructor(props) {
    super(props);
    this.coords = this.props.coords;
  }

  setStartPosition = () => {
    console.log(this.coords);
  };

  render() {
    return (
      <div className={styles.cell} onClick={this.setStartPosition}>
        this
      </div>
    );
  }
}
