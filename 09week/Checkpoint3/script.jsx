'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount () {
    fetch('http://pokeapi.co/api/v2/').then((response) => {
      response.json().then(({results: items}) => {
        this.setState({
          items
        });
      });
    });
  }
  filter (e) {
    this.setState({filter: e.target.value});
  }
  render () {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item =>
      item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()));
    }
    return (
      <div>
        <h1 className="title">Pokemon</h1>
        <h2 className="title">Poke Types</h2>
        <input type="text"
          onChange={this.filter.bind(this)} placeholder="Pick a Pokemon"/>
        {items.map((item, i) =>
          <article key={i}>
            <header><h2>Name: {item.name}</h2></header>
            <section>Weight: {item.weight}</section>
            <section>Moves: {item.moves}</section>
          </article>
        )}
      </div>
    );
  }

}

ReactDOM.render(<Fetch />, document.getElementById('fetch'))
