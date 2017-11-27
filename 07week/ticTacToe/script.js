'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
  }
  getInitialState: function() {
    return{symbol:"x"}
  }
  var Symboll = react.createClass({
    return
  })
  var hello = printSymbol: function(){
    let i = 0
    if(i=== 0 || i%2===0){
      console.log(this.symbol)
      return (<div data-cell="{i}">this.symbol</div>)
      i++
    } else{
      symbol = "o"
      console.log(this.symbol)
      return this.symbol
      i++
    }

  }
  render() {
    return (
      <div>
        <div className="row">
          <div onClick={this.printSymbol} data-cell="0">{this.state.symbol}</div>
          <div onClick={this.printSymbol} data-cell="1">{this.state.symbol}</div>
          <div onClick={this.printSymbol} data-cell="2">{this.state.symbol}</div>
        </div>
        <div className="row">
          <div onClick={this.printSymbol} data-cell="3">{this.state.symbol}</div>
          <div onClick={this.printSymbol} data-cell="4">{this.state.symbol}</div>
          <div onClick={this.printSymbol} data-cell="5">{this.state.symbol}</div>
        </div>
        <div className="row">
          <div onClick={this.printSymbol} data-cell="6">{this.state.symbol}</div>
          <div onClick={this.printSymbol} data-cell="7">{this.state.symbol}</div>
          <div onClick={this.printSymbol} data-cell="8">{this.state.symbol}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
