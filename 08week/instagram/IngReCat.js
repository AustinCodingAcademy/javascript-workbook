'use strict';

class IngReCat extends React.Component{
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

  render(){
    // const ingredients =this.state.people.map((ing)=>{
      return (<div>
        <IngForm />

          </div>);
      };
}

class IngForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  handleSubmit(event){
    event.preventDefault();
    this.state.ingredients = this.state.value.split(',');
    console.log(this.state.ingredients[0]);
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




// class InstagremSearch extends React.Component {
//   constructor(){
//     super();
//     this.state ={
//       username: ''
//     }
//   }
//
//   submitForm(e) {
//     event.preventDefault();
//
//   }
//   render() {
//     return (
//       <form onSubmit ={this.submitForm.bind(this)}>
//       <input />
//       <button type="submit">Submint</button>
//       </form>
//     )}



ReactDOM.render(<IngReCat />, document.querySelector('#fetch'));
// ReactDOM.render(<InstagreamSearch />, document.querySelector('#search'));
