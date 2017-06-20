'use strict'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listit: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4').then((response) => {
      response.json().then((data) => {
        // if (data.items.volumeInfo.accessInfo.epub.hasOwnProperty('downloadLink')) {
        if (data.items.hasOwnProperty('volumeInfo')) {

          this.setState({
              listit: data.items
          })
        }
      })
    })
  }

  listinfo = () => {
    console.log(this.state.listit)
    return (
      this.state.listit.map((listitem) =>
        <li key={listitem.id}>
          <img alt="dsf" src={listitem.volumeInfo.imageLinks.thumbnail}/><br/>
          {listitem.volumeInfo.accessInfo.epub.downloadLink}
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
