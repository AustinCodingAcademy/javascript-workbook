'use strict'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userlist: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=20').then((response) => {
      response.json().then((data) => {
        this.setState({
          userlist: data.results
        })
      })
    })
  }

  userInfo = () => {
    return (
      this.state.userlist.map(user => {
        <li key={user.cell}>
          <img alt="user Image" src={user.picture.large}/> <br/>
          Name: {user.name.first} {user.name.last} <br/>
          DOB: {user.dob}
        </li>
      })
    )
  }

  render() {
    return (
      <div>
        Check me Out:
        <ul>{this.userInfo()}</ul>
      </div>
    )
  }
}
