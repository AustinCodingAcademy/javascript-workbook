'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    items: []
    };
  }

  componentWillMount () {
    fetch('https://swapi.co/api/people/').then((response) => {
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
        <h1 className="title">Star Wars Blog</h1>
        <h2 className="title">Movie Characters</h2>
        <input type="text"
          onChange={this.filter.bind(this)} placeholder="The droid you're looking for"/>
        {items.map((item, i) =>
          <article key={i}>
            <header><h2>Name: {item.name}</h2></header>
            <section>Height: {item.height}</section>
            <section>Mass: {item.mass}</section>
            <section>Gender: {item.gender}</section>
            <section>Birth Year: {item.birth year}</section>
            <section>Hair Color: {item.hair color}</section>
            <section>Skin Color: {item.skin color}</section>
            <section>Eye Color: {item.eye color}</section>
          </article>
        )}
      </div>
    );
  }

}
  // Perhaps fetch some data here
  //}

  //render() {
    //return (
      //<h1>Sample Blog</h1>

    //);
  //}
//}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
