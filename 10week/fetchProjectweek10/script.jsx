'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      bookCover: [
        'https://images-na.ssl-images-amazon.com/images/I/81hZPqv7zvL.jpg',
        'http://sfreviews.net/large_covers/clash_of_kings.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71brND7cdHL.jpg',
        'http://awoiaf.westeros.org/images/0/05/Hedgeknight.jpg',
        'https://wiki.westeros.org/images/a/a3/AFeastForCrows.jpg',
        'https://images.gr-assets.com/books/1397654143l/11985631.jpg',
        'http://www.georgerrmartin.com/wp-content/uploads/2017/08/MysteryKnight.jpg',
        'http://georgerrmartin.com/gallery/art/dragons05.jpg'
      ],
      buyBook: [
        'https://www.amazon.com/George-R.-R.-Martin/e/B000APIGH4/ref=sr_ntt_srch_lnk_1?qid=1505179388&sr=8-1'
      ]
    };
  }

  componentWillMount() {
    fetch('https://www.anapioficeandfire.com/api/books').then((result) => {
      result.json().then((data) => {
        let books = [];

        for (let i = 0; i < 8; i++) {
          books.push(data[i]);
        }

        this.setState({
          books,
        });

        console.log(this.state.books);
      });
    });
  }

  render() {
    const cards = [];
    this.state.books.forEach((book, i) => {
      cards.push(
        <div key={i} className='col-sm-6'>
          <div className='card border-dark mb-3 text-center'>
            <div className='card-body text-dark'>
              <img src={this.state.bookCover[i]} className='img-responsive rounded'/>
              <h4 className='card-title card-header'>{book.name}</h4>
              <p className='card-text'>
                Pages: {book.numberOfPages}
                <br />
                Published: {book.released}
                <br />
                Total Characters: {book.characters.length}
              </p>
              <span className={'link' + i}>
                <a href={this.state.buyBook[0]} target='blank' className='btn btn-outline-secondary'>BUY THIS BOOK</a>
              </span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className='text-center mainHeader'>
          <h1 >A Song of Ice and Fire Books</h1>
          <h2 className='text-uppercase'>by George R.R. Martin</h2>
        </div>
        <div className='text-center container clear'>
          <div className='row'>
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
