import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, desc, url, urlToImage } = this.props;
    return (
      <div className="news-item-container" >
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlToImage} className="card-img-top" alt={urlToImage} />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 46)}...</h5>
            <p className="card-text">{desc.slice(0,90)}...</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
