'use strict';

class TowersOfHanoi extends React.Component {
  constructor() {
    super();
    this.state = {
      a: [100, 75, 50, 25],
      b: [],
      c: [],
      block: null,
      message:""
    }
    this.checkForWin = this.checkForWin.bind(this)
  }


  moveBlock = (e) => {
      const letter = e.target.getAttribute('data-stack');
      console.log(letter);
      const stack = this.state[letter].slice();
      console.log(stack);
      let block;
      let obj = {};
      const checkBlock = this.state[letter].valueOf();
      if (!this.state.block) {
        //if the state of block is null
        block = stack.pop();
        //take end value from clicked stacks array and place in block
        console.log('XxXXXXXxxxX');
      } else if (stack.length > 0 &&  this.state.block > this.state[letter][this.state[letter].length-1]) {

   console.log('illegal move',this.state.block,this.state[letter].slice());
   return;
    } else {
      stack.push(this.state.block);
      console.log(this.state.block,'should be legal',this.state[letter].slice());
      }
     const update = {};
     update['block'] = block;

     update[letter] = stack;
     this.setState(update);
     this.checkForWin();


}
 checkForWin() {

     if (this.state.b.length > 3 || this.state.c.length > 3) {
       this.setState({
         message: 'Nice Work!'
       });
       console.log(this.state.message);
    }
   } //checkForWin ends
render() {//building blocks here inside render before return
  const aBlocks = this.state.a.map((size) => {
    return (<div data-block={size}></div>);
  });
  const bBlocks = this.state.b.map((size) => {
    return (<div data-block={size}></div>);
  });
  const cBlocks = this.state.c.map((size) => {
    return (<div data-block={size}></div>);
  });
  return (
  <div>
    <div data-stack='a' onClick={this.moveBlock}>
      {aBlocks}
    </div>
    <div data-stack='b' onClick={this.moveBlock}>
      {bBlocks}
    </div>
    <div data-stack='c' onClick={this.moveBlock}>
      {cBlocks}
    </div>
    <div>{this.state.message}</div>
  </div>
);
}
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
