import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//catFight app, person has a cat, will combat other cats, cat's votes will be the metric,
// so get cats with votes. api key: MTkxNTAw\
//Changed to 'IngReCat', input ingredients, output recipes and cats. eventually will be able to filter
//results according to cuisine, but lets get it working first
// mashape's spoonacular api key -H 'X-Mashape-Key: YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o' \
class IngReCat extends Component{
  constructor(props) {
    super(props);
    this.state ={
      recipes: [],
      ingredients:''
      }
  }
  // componentDidMount() {
  //    const url = 'https://randomuser.me/api/?results=10';
  //    fetch(url)
  //    .then((response) => {
  //      response.json().then((data) =>{
  //       this.setState({
  //         people: data.results.map((person)=> {
  //           let fName = person.name.first;
  //           let lName = person.name.last;
  //           let pic = person.picture.thumbnail;
  //           return [fName, lName, pic];
  //           })
  //         });
  //       });
    // console.log(this.state.people);

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to IngReCat!!</h2>
        </div>
        <p className="App-intro">
          To get started, enter ingredients.
        </p>
         <IngForm />
      </div>
    );
  }
}

class IngForm extends Component {
  constructor(props){
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    console.log(this.state.value);

    //get the api-call data
  }

  render(){
    return(
      <div>
        <h1>Enter Your Ingredients</h1>
        <form onSubmit = {this.handleSubmit}>
          <label>Ingredients:
          <input type="text" value={this.state.value} onChange ={this.handleChange} />
          </label>
          <input type="submit" value ="Submit" />
        </form>
        </div>
      );
    }
  }

export default IngReCat;
