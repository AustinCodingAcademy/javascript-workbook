import React, { Component } from 'react';
//getting to run with react scripts

class SearchBar extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  //constructiong and setting state for SearchBar compnent. It gets an empty string as state which will
  //hold data entered as term prop
  render() {
    return (
      <div className="search-bar">Enter Text Below To Search For Videos
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
);
}
//above telling App how to render search bar once added to return block on App component
//setting props to return event value as characters are typed

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
//giving us 'term' as a property we can capture with the onChange event and pass around data entered by user
}

}


export default SearchBar;
//allowing to be imported by App
