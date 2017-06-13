'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userlist: [],
      fname: '',
      lname: '',
      id: '',
      pic: '',
      loc: ''
    };
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=2').then((response) => {
      response.json().then((data) => {
        this.setState({
          userlist: data.results.map((person) => {
          // let fname = person.name.first;
          // let lname = person.name.last;
          // let pic = person.picture.thumbnail;
          // let id = person.id.value;
          // let loc = person.location.city;

          this.state.userlist.push(person.name.first);
          this.state.userlist.push(person.name.last);
          this.state.userlist.push(person.picture.thumbnail);
          this.state.userlist.push(person.id.value);
          this.state.userlist.push(person.location.city);

          // fname: person.name.first;
          // lname: person.name.last;
          // pic: person.picture.thumbnail;
          // id: person.id.value;
          // loc: person.location.city;

// console.log([fname, lname, pic, id, loc]);
// console.log(this.state.fname);
console.log(this.state.userlist);


          // return [fname, lname, pic, id, loc];
          })
        })
      })
    })
  }

  renderUsers = () => {
    return (
      this.state.userlist.map(user =>
        <li key={user.location.city}>  <img alt="pic of user" src={user.pic}/> <br/>
            Name:{user.fname} {user.lname} <br/> DOB: {user.dob}
        </li>
      )
    )
  }


  render() {
    return (
      <div>
        Cold or Not:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }



}

ReactDOM.render(<App />, document.getElementById('root'));
