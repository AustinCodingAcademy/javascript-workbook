'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          stories: []
        }
      }

      componentWillMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
          res.json().then((data) => {
            let stories = [];

            for (let i = 0; i < 10; i++) {
              fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`).then((res) => {
                res.json().then((data) => {
                  stories.push(data);

                  this.setState({
                    stories: stories
                  });
                });
              });
            }
          });
        });
      }

        render() {
          console.log(this.state.stories);

          if (this.state.stories) {
            const story = [];
            this.state.stories.forEach((headline, i) => {
              story.push(
                <article key={i}>
                      <header className="title"><a href={headline.url} target="blank">{headline.title}</a></header>
                      <footer className="author">{headline.score} Points Written By: {headline.by}</footer>
                </article>
              );
            });

            return (
                <div className="parent">
                  <div className="header"><h1>Hacker News</h1></div>
                  <div className="header"><h4>The Top Ten</h4></div>
                  <div className="child">
                    <div>
                      {story}
                    </div>
                  </div>

              </div>
            );
          }
        }
      }

  ReactDOM.render(
    <Fetch/>, document.getElementById('fetch'));
