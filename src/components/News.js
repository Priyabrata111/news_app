import React, { Component } from "react";
import NewsIntem from "./NewsIntem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      pageSize: 9,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0a479ee774dc41d586c8ed26b678102e&page=1&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0a479ee774dc41d586c8ed26b678102e&page=${
      this.state.page + 1
    }&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0a479ee774dc41d586c8ed26b678102e&page=${
      this.state.page - 1
    }&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

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
                    description={
                      ele.description
                        ? ele.description.slice(0, 88)
                        : ele.description
                    }
                    imgurl={ele.urlToImage}
                    newsurl={ele.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
