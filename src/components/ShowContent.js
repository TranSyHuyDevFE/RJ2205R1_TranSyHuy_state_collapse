import React, { Component } from "react";

export default class ShowContent extends Component {
  render() {
    let { isBtnClose } = this.props;
    return (
      <div>
        <button onClick={isBtnClose}>Đóng Thông Tin</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          beatae nostrum eius dignissimos saepe dolorum necessitatibus quia
          exercitationem, consequatur maxime labore laboriosam placeat ad minus
          doloribus eum eaque, earum alias.
        </p>
      </div>
    );
  }
}
