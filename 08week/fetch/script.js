'use strict';
class ListUsers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      users: []
    }
    this.initialDraw = this.initialDraw.bind(this)
  }

  initialDraw(){

  var p = fetch('https://reqres.in/api/users?page=2');
  let user;
  let newusers= this.state.users
  let jSonPromise = p.then(function(response){
    console.log('The status of my response',response.status);
    return response.json()
  });
  jSonPromise.then((data)=>{
    console.log('the data is', data)
    console.log(data)
    this.setState({
      users: data.data
    })
  });
}

  render(){
    if(this.state.users.length== 0){
      this.initialDraw();
    }
    var usersmap =   this.state.users.map((user)=>{
        return <div>{user.first_name} {user.last_name} <div> <img src= {user.avatar}/></div>z</div>

      })
  return


    <div>
    {usersmap}
    </div>
    )
  }
}
ReactDOM.render(<ListUsers />, document.getElementById('fetch'));
