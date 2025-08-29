import React, { useEffect, useState } from "react";
import NewsIntem from "./NewsIntem";
import Spinner from "./Spinner";
import ImgNotFound from "./404_not_found.png";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  //document.title = `${this.capitalize(props.category)} - NewsApp`;

  const capitalize = (val) => {
    if (!val) return ""; // handle null/undefined/empty
    const str = String(val);
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  document.title = `${capitalize(props.category)} - NewsApp`;
  const dummyNews = {
    title: "Title is not available for this News",
    description:
      "The Description for this News is not available. Please visit the link below to know more",
    imgurl: ImgNotFound,
    url: "https://unsplash.com/photos/jVb0mSn0LbE",
  };
  const updateNews = async () => {
    props.setProgress(0);

    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(false);
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    if (parsedData.articles.length === 0) {
      setHasMore(false);
    }

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        You are visiting top headlines from {capitalize(props.category)}
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((ele) => {
                return (
                  <div className="col-md-4">
                    <NewsIntem
                      title={
                        ele.title ? ele.title.slice(0, 45) : dummyNews.title
                      }
                      description={
                        ele.description
                          ? ele.description.slice(0, 88)
                          : dummyNews.description
                      }
                      imgurl={
                        ele.urlToImage ? ele.urlToImage : dummyNews.imgurl
                      }
                      newsurl={ele.url ? ele.url : dummyNews.url}
                      author={ele.author}
                      date={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};

export default News;
