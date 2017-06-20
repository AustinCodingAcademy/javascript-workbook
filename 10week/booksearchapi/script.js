'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listit: [],
      bookname: null
    }
    this.submitForm = this.submitForm.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  // componentDidMount() {
  //   if (this.state.bookname) {
  //     this.fetchBook(this.state.bookname);
  //   }
  // }

  fetchBook() {
    console.log(this.state.bookname);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookname}&filter=free-ebooks&maxResults=40&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4`)
    .then((response) => {
      response.json().then((data) => {
        var templist = [];
        data.items.map((withit) => {
          //This will map and return free ebook with download link
          // if (withit.accessInfo.hasOwnProperty('epub')) {
          //   if (withit.accessInfo.epub.hasOwnProperty('downloadLink')) {
          //     templist.push(withit)
          //   }
          // }

          // This will map and return free ebook with download link
          // console.log(withit.volumeInfo.publishedDate.slice(0,4));
          if (withit.volumeInfo.hasOwnProperty('publishedDate')) {
            var year = parseInt(withit.volumeInfo.publishedDate.slice(0,4));
            if (year > 1990) {
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
  // <a href={listitem.accessInfo.epub.downloadLink}>
  // <img alt="dsf" src={listitem.volumeInfo.imageLinks.thumbnail}/>

  listinfo = () => {
    console.log(this.state.listit)
    return (
      this.state.listit.map((listitem) =>
        <li key={listitem.id}>
          <a href={listitem.accessInfo.webReaderLink}>
          <img alt="dsf" src={listitem.volumeInfo.imageLinks.thumbnail}/>
          </a><br/>
        </li>
      )
    )
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
    this.fetchBook();
  }

  changeInput(event) {
    this.setState({
      bookname: event.target.value
    });
  }

  render() {
    return (
      <div>
        <BookTitleSearch onSubmit={this.submitForm} onChangeInput={this.changeInput} /><br/>
        Here's the results:
        <ul>{this.listinfo()}</ul>
      </div>
    )
  }
}

class BookTitleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input onChange={this.props.onChangeInput} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
