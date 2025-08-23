import React, { Component } from "react";
import NewsIntem from "./NewsIntem";
import Spinner from "./Spinner";
import ImgNotFound from "./404_not_found.png";
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
  capitalize = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };
  dummyNews = {
    title: "Title is not available for this News",
    description:
      "The Description for this News is not available. Please visit the link below to know more",
    imgurl: ImgNotFound,
    url: "https://unsplash.com/photos/jVb0mSn0LbE",
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: this.totalResults,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsApp`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0a479ee774dc41d586c8ed26b678102e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0a479ee774dc41d586c8ed26b678102e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.updateNews()
    );
  };
  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => this.updateNews()
    );
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
                    title={
                      ele.title ? ele.title.slice(0, 45) : this.dummyNews.title
                    }
                    description={
                      ele.description
                        ? ele.description.slice(0, 88)
                        : this.dummyNews.description
                    }
                    imgurl={
                      ele.urlToImage ? ele.urlToImage : this.dummyNews.imgurl
                    }
                    newsurl={ele.url ? ele.url : this.dummyNews.url}
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
