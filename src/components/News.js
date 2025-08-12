import React, { Component } from "react";
import NewsIntem from "./NewsIntem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0a479ee774dc41d586c8ed26b678102e";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Please Visit Our Top News Headlines</h1>
        <div className="row">
          {this.state.articles &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4">
                  <NewsIntem
                    title={ele.title ? ele.title.slice(0, 45) : ele.title}
                    description={ele.description.slice(0, 88)}
                    imgurl={ele.urlToImage}
                    newsurl={ele.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default News;
