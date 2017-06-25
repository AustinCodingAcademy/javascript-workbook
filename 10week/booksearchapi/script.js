'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listit: [],
      bookname: null,
      startidx: 1
    }
    this.submitForm = this.submitForm.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.increaseIndex = this.increaseIndex.bind(this)
  }

  // fetchBook(index) {
  //   console.log(this.state.bookname);
  //   fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookname}&download=epub&maxResults=10&startIndex=${index}&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4`)
  //   .then((response) => {
  //     response.json().then((data) => {
  //       var templist = [];
  //       data.items.map((withit) => {
  //         // This will map and return free ebook with download link
  //         if (withit.accessInfo.hasOwnProperty('epub')) {
  //           if (withit.accessInfo.epub.hasOwnProperty('downloadLink')) {
  //             templist.push(withit);
  //             console.log(withit);
  //           }
  //         }
  //
  //         // This will map and return free ebook with download link
  //         // console.log(withit.volumeInfo.publishedDate.slice(0,4));
  //         // if (withit.volumeInfo.hasOwnProperty('publishedDate')) {
  //         //   var year = parseInt(withit.volumeInfo.publishedDate.slice(0,4));
  //         //   if (year > 1990) {
  //         //     templist.push(withit)
  //         //   }
  //         // }
  //
  //       })
  //       this.setState({
  //           listit: templist
  //       })
  //     })
  //     .catch((error) => {
  //       console.error('fsdfadfasdfasdf');
  //     });
  //   })
  // }

  fetchBook(index) {
    console.log(this.state.bookname);
    var stillMore = new Boolean(true);
    var templist = [];
    var startSearchHere = 1;
    var maxRes = 1;

    for (var i = 1; i <= 22; i++) {
      console.log(startSearchHere);

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookname}&download=epub&maxResults=${maxRes}&startIndex=${startSearchHere}&key=AIzaSyCWCAyFHX_qCtN9SmHcgDk20ZmzIvWI5z4`)
      .then((response) => {
        response.json().then((data) => {


          data.items.map((withit) => {
            // This will map and return free ebook with download link
            if (withit.accessInfo.hasOwnProperty('epub')) {
              if (withit.accessInfo.epub.hasOwnProperty('downloadLink')) {
                templist.push(withit);
              }
            }
          })


          console.log(templist);
          this.setState({
            listit:templist
          })

        })


        .catch((error) => {
          console.error('fsdfadfasdfasdf');
          stillMore = false;
        });


      })
      startSearchHere+=(maxRes);
    }

  }

  listinfo = () => {
    // console.log(this.state.listit)
    return (
      this.state.listit.map((listitem) =>
        <li key={listitem.id}>
          <a href={listitem.accessInfo.epub.downloadLink} className="borderit">
          <img alt="book cover" src={listitem.volumeInfo.imageLinks.thumbnail}/>
          </a><br/>
        </li>
      )
    )
  }

  increaseIndex(event) {
    event.preventDefault();
    const newIndex = this.state.startidx + 40
    this.setState((prevState) => ({
      startidx: newIndex
    }))
    this.fetchBook(newIndex);
  }

  submitForm(event) {
    event.preventDefault();
    // console.log(this.state);
    this.fetchBook(this.state.startidx);
  }

  changeInput(event) {
    this.setState({
      bookname: event.target.value
    });
  }

  // <button type="submit" onClick={this.increaseIndex()}>MORE</button>


  render() {
    return (
      <div>
        <BookTitleSearch onSubmit={this.submitForm} onChangeInput={this.changeInput} /><br/>
        Here's the results:
        <ul className="center">{this.listinfo()}</ul>
        <div className="center bottom">
          <button type="submit" onClick={this.increaseIndex}>MORE</button>
        </div>
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
      <form onSubmit={this.props.onSubmit} className="center">
        <input onChange={this.props.onChangeInput}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
