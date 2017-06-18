'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userlist: []
    };
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=20').then((response) => {
      response.json().then((data) => {
        this.setState({
          userlist: data.results
        })
        // console.log(this.state.userlist);
      })
    })
  }

  renderUsers = () => {
    console.log(this.state.userlist)
    return (
      this.state.userlist.map(user =>
        <li key={user.cell}>  <img alt="pic of user" src={user.picture.large}/> <br/>
            Name:{user.name.first.slice(0,1)} {user.name.last.slice(0,10)} <br/> DOB: {user.dob.slice(0,10)}
        </li>
      )
    )
  }

  render() {
    return (
      <div>
        Check Me Out:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
