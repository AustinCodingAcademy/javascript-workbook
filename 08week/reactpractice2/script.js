'use strict'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listit: []
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


  // componentDidMount() {
  //   fetch('https://services.wine.com/api/beta2/service.svc/json/categorymap?filter=categories(490+124)+rating(90|95)&apikey=562422cbdaa35a13c2c2f4a44ba18688').then((response) => {
  //     response.json().then((result) => {
  //       this.setState({
  //         // userlist: result.Categories[0][0]
  //         listit: result
  //       })
  //       console.log(this.state.listit)
  //     })
  //   })
  // }

  // componentDidMount() {
  //   fetch('https://api.bookshare.org/book/popular/page/1/limit/100/format/json?api_key=f7jn7uxywqmwwydy2rm9yq35').then((response) => {
  //     response.json().then((result) => {
  //       this.setState({
  //         // userlist: result.Categories[0][0]
  //         listit: result
  //       })
  //       console.log(this.state.listit)
  //     })
  //   })
  // }

  // componentDidMount() {
  //   fetch('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4').then((response) => {
  //     response.json().then((result) => {
  //       this.setState({
  //         listit: result
  //       })
  //       console.log(this.state.listit)
  //     })
  //   })
  // }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&filter=free-ebooks&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4').then((response) => {
      response.json().then((json) => {
        this.setState({
          listit: json.items.map((post) => {
            return post.accessInfo.pdf;
          })
        })
        console.log(this.state.listit)
      })
    })
  }

  listinfo = () => {
    console.log(this.state.listit)
    return (
      this.state.listit.map((listitem) =>
        <li key={listitem.downloadLink}>
          Name: {listitem.downloadLink}<br/>
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
