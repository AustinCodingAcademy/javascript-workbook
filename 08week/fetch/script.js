'use strict';

class ListUsers extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    fetch('https://reqres.in/api/users?page=1').then((response)=>{
      return response.json();
    }).then((X)=>{
      console.log(X);
      this.setState({
        users: X.data
      })
    })
  }

  render(){
    let name1 = this.state.users.map(Contacts);

    function Contacts(user){
      return <div className="border m-2 rounded" key={user.id}> <span className="m-2">{user.first_name} {user.last_name}</span> <img className="m-4 rounded-circle" key={user.id} src={user.avatar} /></div>;
    }

    return(
    <div>
      {name1}
    </div>
    )

  }
}

ReactDOM.render(<ListUsers />, document.getElementById("fetch"));
