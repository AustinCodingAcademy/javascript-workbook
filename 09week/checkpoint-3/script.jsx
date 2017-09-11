'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount () {
    fetch('https://swapi.co/api/people').then((response) => {
      response.json().then(({results: items}) => {
        this.setState({
          items
        });
      });
    });
  }
  filter (e) {
    this.setState({filter: e.target.value})
  }
  render () {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item =>
      item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return(
      <div>
        <h1 className="title">Star Wars</h1>
        <h2 className="title">Character Search</h2>
        <input type="text"
          onChange={this.filter.bind(this)} placeholder="Enter a Character Name"/>
        {items.map((item, i) =>
          <article key={i}>
            <header><h2>Name: {item.name}</h2></header>
            <section>Gender: {item.gender}</section>
            <section>Mass: {item.mass}</section>
            <section>Height: {item.height}</section>
          </article>
        )}</div>
    )
  }

}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
