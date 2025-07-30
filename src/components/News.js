import React, { Component } from "react";
import NewsIntem from "./NewsIntem";

export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Please Visit Our Top News Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsIntem
              title="First Title"
              description="This is the first headline news"
              imgurl="https://biztoc.com/cdn/950/og.png"
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
