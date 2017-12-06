'use strict';
class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      symbol: 'O',
      array: [null, null, null, null, null, null, null, null, null]
    }
    this.printSymbol = this.printSymbol.bind(this);
  }
  printSymbol(event){
    let newSymbol = this.state.symbol;
    let newarray = this.state.array;
    if(newSymbol==='O'){
      newSymbol='X'
    } else if (newSymbol==='X'){
      newSymbol='O'
    }
    let index = event.target.getAttribute("data-cell")
    console.log(newSymbol)
    if(newarray[index]!== null){
      return
    }
    if(newarray[0]==="X" && newarray[1]==="X" && newarray[2]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[3]==="X" && newarray[4]==="X" && newarray[5]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[6]==="X" && newarray[7]==="X" && newarray[8]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="X" && newarray[3]==="X" && newarray[6]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[1]==="X" && newarray[4]==="X" && newarray[7]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="X" && newarray[5]==="X" && newarray[8]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="X" && newarray[4]==="X" && newarray[8]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="X" && newarray[4]==="X" && newarray[6]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="O" && newarray[1]==="O" && newarray[2]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[3]==="O" && newarray[4]==="O" && newarray[5]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[6]==="O" && newarray[7]==="O" && newarray[8]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="O" && newarray[3]==="O" && newarray[6]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[1]==="O" && newarray[4]==="O" && newarray[7]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="O" && newarray[5]==="O" && newarray[8]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="O" && newarray[4]==="O" && newarray[8]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="O" && newarray[4]==="O" && newarray[6]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }

    console.log(newSymbol)
    newarray[index]= newSymbol
    const newState = {
      symbol:newSymbol,
      array:newarray
    }
    this.setState(newState)
    if(newarray[0]==="X" && newarray[1]==="X" && newarray[2]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[3]==="X" && newarray[4]==="X" && newarray[5]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[6]==="X" && newarray[7]==="X" && newarray[8]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="X" && newarray[3]==="X" && newarray[6]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[1]==="X" && newarray[4]==="X" && newarray[7]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="X" && newarray[5]==="X" && newarray[8]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="X" && newarray[4]==="X" && newarray[8]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="X" && newarray[4]==="X" && newarray[6]==="X"){
      newSymbol='X'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="O" && newarray[1]==="O" && newarray[2]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[3]==="O" && newarray[4]==="O" && newarray[5]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[6]==="O" && newarray[7]==="O" && newarray[8]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="O" && newarray[3]==="O" && newarray[6]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[1]==="O" && newarray[4]==="O" && newarray[7]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="O" && newarray[5]==="O" && newarray[8]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[0]==="O" && newarray[4]==="O" && newarray[8]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
    if(newarray[2]==="O" && newarray[4]==="O" && newarray[6]==="O"){
      newSymbol='O'
      alert("Player " + newSymbol + " has won!")
      return
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div onClick={this.printSymbol} data-cell="0">{this.state.array[0]}</div>
          <div onClick={this.printSymbol} data-cell="1">{this.state.array[1]}</div>
          <div onClick={this.printSymbol} data-cell="2">{this.state.array[2]}</div>
        </div>
        <div className="row">
          <div onClick={this.printSymbol} data-cell="3">{this.state.array[3]}</div>
          <div onClick={this.printSymbol} data-cell="4">{this.state.array[4]}</div>
          <div onClick={this.printSymbol} data-cell="5">{this.state.array[5]}</div>
        </div>
        <div className="row">
          <div onClick={this.printSymbol} data-cell="6">{this.state.array[6]}</div>
          <div onClick={this.printSymbol} data-cell="7">{this.state.array[7]}</div>
          <div onClick={this.printSymbol} data-cell="8">{this.state.array[8]}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
