import React, { Component } from "react";
import NewsIntem from "./NewsIntem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>Please Visit Our Top News Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsIntem
              title="First Title"
              description="This is the first headline news"
            />
          </div>
          <div className="col-md-4">
            <NewsIntem
              title="Second Title"
              description="This is the second headline news"
            />
          </div>
          <div className="col-md-4">
            <NewsIntem
              title="Third Title"
              description="This is the third headline news"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
