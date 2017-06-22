'use strict';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      user: null,
      guesses: [], // { guess: 22, age: 35 , thumbnail src: http://213.com/123}, {}, {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkAge = this.checkAge.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    let url = 'https://randomuser.me/api/?results=1';
    fetch(url).then((response) => {
      // console.log("response ",response);
      response.json().then(jsonObj => {
        // console.log("jsonObj.results[0] ",jsonObj.results);
        this.setState({
          user: jsonObj.results[0],

        })

      });
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  checkAge(e) {
    e.preventDefault();
    console.log('Age submitted: ' + this.state.value);
    //set state of guess and age.

    this.setState(({guesses, value, user}) => {
      return {
        value: "",
        guesses: [ ...guesses, { guess: value, age: this.getAge(user.dob.slice(0,10)), thumbnail: this.state.user.picture.thumbnail } ]
      };
    });
    this.fetchUser();
  }

  createGuessesHTML() {
    return this.state.guesses.map(({guess, age, thumbnail}) => {
      // guess
      // const guess = guess.guess
      // const age = guess.age
      return <li><img src={ thumbnail }></img>Your guess: {guess} Actual Age: {age}</li>
    });
    // let list = ""
    // return (
    //   this.state.guesses
    // )
  }

  getAge(dateString){
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      {
          age--;
      }
      return age;
  }

  renderUser = () => {
    console.info("this.state.user in renderUser ",this.state.user);
    var birthDate = new Date(this.state.user.dob.slice(0,10));
    return (
      <div>

      { this.state.guesses.length ? this.createGuessesHTML() : "" }
      <img src={this.state.user.picture.large} />
      <br />
      Name: {this.state.user.name.first.toUpperCase()}

      <br />
      <form onSubmit = {this.checkAge}>
      <label>
      <input placeholder="enter age" type="number" name="ageInput"
      value={this.state.value} onChange={this.handleChange} />
      </label>

      <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }

  render() {
    return (
      <div>
      { this.state.user ? this.renderUser() : "Loading" }
      </div>
    )
  }
}

ReactDOM.render(<Person />, document.getElementById('people'));
