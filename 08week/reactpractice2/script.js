'use strict'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      winelist: []
    }
  }

  // componentDidMount() {
  //   fetch('https://randomuser.me/api/?results=20').then((response) => {
  //     response.json().then((data) => {
  //       this.setState({
  //         userlist: data.results
  //       })
  //       console.log(this.state.userlist)
  //     })
  //   })
  // }


  componentDidMount() {
    fetch('https://services.wine.com/api/beta2/service.svc/json/categorymap?filter=categories(490+124)+rating(90|95)&apikey=562422cbdaa35a13c2c2f4a44ba18688').then((response) => {
      response.json().then((result) => {
        this.setState({
          // userlist: result.Categories[0][0]
          winelist: result
        })
        // console.log(this.state.winelist)
      })
    })
  }

  wineinfo = () => {
    console.log(this.state.winelist)
    // return (
    //   this.state.winelist.map((wine) =>
    //     <li key={wine.id}>
    //       Name: {wine.name} {wine.type} <br/>
    //       SCORE: {wine.score}
    //     </li>
    //   )
    // )
  }

  render() {
    return (
      <div>
      Red wines (score 90-95)
        <ul>{this.wineinfo()}</ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
