import React, { Component } from "react";
import NewsIntem from "./NewsIntem";

export class News extends Component {
  render() {
    return (
      <div>
        This is in News.js component
        <NewsIntem />
        <NewsIntem />
        <NewsIntem />
        <NewsIntem />
      </div>
    );
  }
}

export default News;
