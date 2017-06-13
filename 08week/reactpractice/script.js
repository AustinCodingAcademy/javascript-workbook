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
      })
    })
  }

  renderUsers = () => {
    return (
      this.state.userlist.map(user =>
        <li key={user.name.last}>  <img alt="pic of user" src={user.picture.large}/> <br/>
            Name:{user.name.first} {user.name.last} <br/> DOB: {user.dob}
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
