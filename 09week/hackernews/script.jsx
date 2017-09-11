'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      topNews: []
    };
  }

  componentWillMount () {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
      res.json().then((data) => {
        let topNews = [];

        for (let i = 0; i < 10; i++) {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`).then((res) => {
            res.json().then((data) => {
              topNews.push(data);

              this.setState({
                topNews: topNews
              });
            });
          });
        }
      });
    });
  }

  render () {
    console.log(this.state.topNews);

    if (this.state.topNews) {
      const articles = [];
      this.state.topNews.forEach((article, i) => {
        articles.push(
          <article key={i} className='mx-auto'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title'>{article.title}</h3>
                <p className='card-text'>Author: {article.by}</p>
                <a href={article.url} className='btn btn-info btn-sm'>READ FULL ARTICLE HERE</a>
              </div>
            </div>
          </article>
          );
      });

      return (
        <div className='container'>
          <div className='header'>
            <h1>Hacker News</h1>
            <h2>TOP 10 STORIES</h2>
          </div>
          <div>
            {articles}
          </div>
        </div>
      );
    }
  }
  }

ReactDOM.render(
  <Fetch />, document.getElementById('fetch'));
