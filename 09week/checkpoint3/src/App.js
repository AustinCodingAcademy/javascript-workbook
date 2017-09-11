import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/FlatButton';
import RonCard from './RonCard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      img: "http://cdn.playbuzz.com/cdn/173e8dc2-5516-41c1-8e34-43bf6f03b6d8/3b0aa0d7-527b-4983-8000-a3c91eb7dded.jpg",
    }
  }
  componentDidMount() {
      this.fetchQuote()
  }
  fetchQuote(){
    return fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          quote: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="App">
        <RonCard
          img={this.state.img}
          quote={this.state.quote}
        />
        <RaisedButton
          label="Get another Ron Swanson quote"
          onClick={() => this.fetchQuote()}
          primary={true}
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </div>
    );
  }
}
export default App;
