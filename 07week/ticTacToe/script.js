'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: '',

    }
  }

  click = (e) => {
    const dataCell = e.target.getAttribute('data-cell');
    const obj = {};
    obj[dataCell] = 'X';
    this.setState(obj)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
        </div>
        <div className="row">
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
        </div>
        <div className="row">
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
          <div data-cell="0" onClick={this.click} >{this.state[0]}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
