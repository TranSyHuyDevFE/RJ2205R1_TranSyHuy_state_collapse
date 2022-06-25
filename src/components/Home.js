import React, { Component } from "react";
import ShowContent from "./ShowContent";

export default class Home extends Component {
  state = {
    isBtnState: false,
  };
  handleClickShow = () => {
    this.setState({
      isBtnState: true,
    });
  };
  handleClickClose = () => {
    this.setState({
      isBtnState: false,
    });
  };
  render() {
    let { isBtnState } = this.state;
    return (
      <div>
        {isBtnState === true ? (
          <ShowContent isBtnClose={this.handleClickClose} />
        ) : (
          <div className="rendering-content">
            <button onClick={() => this.handleClickShow()}>
              Xem thông tin
            </button>
          </div>
        )}
      </div>
    );
  }
}
