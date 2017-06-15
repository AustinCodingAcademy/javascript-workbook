'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: ''
    }
  }

  clickCell - (event) => {
    const cellLetter = event.target.getAttribute('data-cell'); 

  }

  render() {
    return ( //Board:
      <div>
        <div className="row">
          <div data-cell="a"></div>
          <div data-cell="b"></div>
          <div data-cell="c"></div>
        </div>
        <div className="row">
          <div data-cell="d"></div>
          <div data-cell="e"></div>
          <div data-cell="f"></div>
        </div>
        <div className="row">
          <div data-cell="g"></div>
          <div data-cell="h"></div>
          <div data-cell="i"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
