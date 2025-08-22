import React, { Component } from "react";
import notfound from "./404_not_found.png";

export class ImgNotFound extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={notfound} alt={notfound}></img>
      </div>
    );
  }
}

export default ImgNotFound;
