'use strict'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listit: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4')
    .then((response) => {
      response.json().then((data) => {
        var templist = [];
        data.items.map((withit) => {
          //This will map and return free ebook with download link
          if (withit.accessInfo.hasOwnProperty('epub')) {
            if (withit.accessInfo.epub.hasOwnProperty('downloadLink')) {
              templist.push(withit)
            }
          }
        })
        this.setState({
            listit: templist
        })
      })
    })
  }

  listinfo = () => {
    console.log(this.state.listit)
    return (
      this.state.listit.map((listitem) =>
        <li key={listitem.id}>
          <a href={listitem.accessInfo.epub.downloadLink}>
          <img alt="dsf" src={listitem.volumeInfo.imageLinks.thumbnail}/>
          </a><br/>
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
