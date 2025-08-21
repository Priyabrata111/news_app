import React, { Component } from "react";
import NewsIntem from "./NewsIntem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: this.totalResults,
    };
  }
  async updateNews() {
    console.log("updateNews  " + this.state.page);
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0a479ee774dc41d586c8ed26b678102e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0a479ee774dc41d586c8ed26b678102e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true, page: 1 });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // console.log(this.props.pageSize);
    console.log("cmd" + this.state.page);
  }

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    this.updateNews();
  };
  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });

    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Please Visit Our Top News Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles &&
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
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
