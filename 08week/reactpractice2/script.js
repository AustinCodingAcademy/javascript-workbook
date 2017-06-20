'use strict'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listit: []
    }
  }

  componentDidMount() {
    fetch('https://services.wine.com/api/beta2/service.svc/json/categorymap?filter=categories(490+124)+rating(90|95)&apikey=562422cbdaa35a13c2c2f4a44ba18688')
    .then((response) => {
      response.json().then((data) => {
        this.setState({
          listit: data.Categories
        })
        console.log(data)
      })
    })
  }

  // componentDidMount() {
  //   fetch('https://api.bookshare.org/book/popular/page/1/limit/100/format/json?api_key=f7jn7uxywqmwwydy2rm9yq35').then((response) => {
  //     response.json().then((result) => {
  //       this.setState({
  //         listit: result
  //       })
  //       console.log(this.state.listit)
  //     })
  //   })
  // }

  listinfo = () => {
    console.log(this.state.listit)
    return (
      this.state.listit.map((listitem) =>
        <li key={listitem.Name}>
          Name: {listitem.Name}<br/>
        </li>
      )
    )
  }

  render() {
    return (
      <div>
      Here's the results:
        <ul>{this.listinfo()}</ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
