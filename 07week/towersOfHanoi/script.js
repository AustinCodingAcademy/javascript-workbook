'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100, 75, 50, 25],
      b: [],
      c: [],
      block: null
    }
  }

  clickStack = (e) => {

    const letter = e.target.getAttribute('data-stack');
    const stack = this.state[letter].slice();//clone of the array (shallow clone)
    let hand = this.state.block;
    const obj = {};//doing this so you can use a variable for the key in referencing the object
    obj[letter] = stack;
    if (!this.state.block){
      hand = stack.pop();
      obj['block'] = hand;
    }
    else if(stack.length === 0 || hand < stack[stack.length-1]){
      stack.push(this.state.block);
      obj['block'] = null;
      this.gameWin(letter, stack);
    }

    this.setState(obj);


}

gameWin = (letter, stack) => {
  if((letter === 'b' || letter === 'c') && stack.length === 4){
  document.getElementById('gameWinner').innerText = "You Won!";
  }
}

reset = () =>{
  this.setState({
    a: [100, 75, 50, 25],
    b: [],
    c: [],
    block: null},
    document.getElementById('gameWinner').innerText = ''
  );
}

  render() {
    const aBlocks = this.state.a.map((block) => {
      return (<div key={block} data-block={block}></div>)
    });
    const bBlocks = this.state.b.map((block) => {
      return (<div key={block} data-block={block}></div>)
    });
    const cBlocks = this.state.c.map((block) => {
      return (<div key={block} data-block={block}></div>)
    });

    return (
      <div>
        <div data-stack="a" onClick={this.clickStack}>
          {aBlocks}
        </div>
        <div data-stack="b" onClick={this.clickStack}>
          {bBlocks}
        </div>
        <div data-stack="c" onClick={this.clickStack}>
          {cBlocks}
        </div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }

}
ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
