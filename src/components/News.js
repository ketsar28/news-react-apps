import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  state = {
    articles: [
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title:
          "Yemen crush: Crush at Ramadan charity event kills dozens in Sanaa",
        description:
          "At least 78 people have been killed after crowds gathered at a school to receive donations.",
        url: "http://www.bbc.co.uk/news/live/world-middle-east-65333419",
        urlToImage:
          "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
        publishedAt: "2023-04-20T06:37:20.7382621Z",
        content:
          "Video footage on social media shows chaotic scenes outside the school in the Bab al-Yemen area of Sanaa, following the deadly crush.\r\nOn top of at least 78 deaths, which included women and children, … [+945 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title:
          "Solar eclipse: Thousands flock to remote Australian town for rare celestial event",
        description:
          "Tourists and scientists swell the population of a Western Australia town to view a rare solar eclipse.",
        url: "http://www.bbc.co.uk/news/world-australia-65332061",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/A9D9/production/_129418434_gettyimages-168441020.jpg",
        publishedAt: "2023-04-20T02:22:16.2535639Z",
        content:
          "Thousands of tourists and scientists have flocked to a small Australian town offering one of the best vantage points on Earth for a rare solar eclipse.\r\nThe sky over Exmouth in Western Australia will… [+1141 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "After $787.5m Dominion settlement, what's next for Fox?",
        description:
          "Fox may have to balance costly legal battles with a desire to not alienate its pro-Trump audience.",
        url: "http://www.bbc.co.uk/news/world-us-canada-65328457",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/E8B3/production/_129417595_foxnewsprotester.jpg",
        publishedAt: "2023-04-20T01:37:19.4720658Z",
        content:
          "A last-minute $787.5m (£634m) deal allowed Fox News to avoid a lengthy and potentially embarrassing defamation trial with US voting machine company Dominion. \r\nIn its $1.6bn lawsuit, Dominion alleged… [+5486 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "Two Texas cheerleaders shot after getting into wrong car",
        description:
          "It follows a string of recent shootings apparently sparked by someone showing up at the wrong place.",
        url: "http://www.bbc.co.uk/news/world-us-canada-65330696",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/17297/production/_129417849_gettyimages-85632967.jpg",
        publishedAt: "2023-04-19T22:07:15.9881072Z",
        content:
          "Two high school cheerleaders in Texas were shot, apparently after approaching the wrong car in a parking lot outside of Austin. \r\nOne of the athletes, Payton Washington, 18, remains in hospital in cr… [+2283 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "New York woman sentenced for cheesecake murder plot",
        description:
          'Viktoria Nasyrova lashes out at the judge as she is jailed for the "diabolical" identity theft plot.',
        url: "http://www.bbc.co.uk/news/world-us-canada-65331943",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/8EE2/production/_128587563_viktoria-index.jpg",
        publishedAt: "2023-04-19T23:22:18.1387177Z",
        content:
          "A Russian woman has been sentenced to 21 years in prison for attempting to kill her lookalike in a bizarre identity-theft plot in New York City.\r\nViktoria Nasyrova gave her beautician, Olga Tsvyk, a … [+2794 chars]",
      },
    ],
  };
  render() {
    return (
      <div className="news-container my-2 p-3">
        <h2 className="mt-3 mb-5 fw-semibold"> All The News - <span className="text-success">World News</span></h2>
        {/* news items */}
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          {this.state.articles.map((data) => {
            return (
              <div className=" " key={data.url}>
                <NewsItem
                  title={data.title}
                  desc={data.description}
                  url={data.url}
                  urlToImage={data.urlToImage}
                />
              </div>
            );
          })}
        </div>

        {/* end news items */}
      </div>
    );
  }
}

export default News;
