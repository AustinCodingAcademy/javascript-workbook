'use strict';

// let blockStyle25 = {
//   height: 80,
//   width: 30,
//   backgroundColor: 'orange',
//   borderRadius: 4,
//   listStyle: 'none',
// }
// let blockStyle= {
//   fontSize: 40,
//   display:'inline-flex',
//   color: 'blue',
//   height: 400,
//   width: 400,
//   border: '2px solid #000'
//
// }
class TowersOfHanoi extends React.Component {
  constructor() {
    super();
    this.state = {//called each time render is changed
      a: [100, 75, 50, 25],
      b: [],
      c: [],
      block: null
    }
    // this.moveBlock = this.moveBlock.bind(this);
}

moveBlock = (e) => {
    const letter = e.target.getAttribute('data-stack');
    console.log(letter);
    const stack = this.state[letter].slice();
    let block;
    const checkBlock = this.state[letter].valueOf();
    if (!this.state.block) {
      //if the state of block is null
      block = stack.pop();
      //take end value from clicked stacks array and place in block
      console.log('XxXXXXXxxxX');

}
    else if (this.state.block > this.state.stack) {///cant get this tp work!!!!!!!!!
          //if block isn't null (ie. has a block in it) & {need to check block on stack and compare to block block}
          stack.push(this.state.block);

            console.log('oooOoOOOOo',this.state.block,this.state[letter].slice());

        } else {
          stack.push(this.state.block);

          console.log(this.state.block,'AAaaaaAAa',this.state[letter].slice());

          }
     const update = {};
     update[letter] = stack;
     update['block'] = block;
     this.setState(update);
}
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
  </div>
);
}
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
