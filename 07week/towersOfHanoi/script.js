'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [25, 50, 75, 100],
      b: [],
      c: [],
      block: null
    }
  }


  moveBlock = (event) => {
    const stack = event.target.getAttribute('data-stack');
    const blocks = this.state[stack].slice();
    const block = blocks.pop();
    const obj = {};
    obj[stack] = blocks;
    obj.block = block;
    this.setState(obj);
  }

  if ((this.state.b.length || this.state.d.length) === 4) {
    return true;
  } else {
    return false;
  }


  render() {
    const aBlocks = this.state.a.map((block) => {
      return (<div key={block} data-block={block}></div>)
    });

    return (
      <div>
        <div data-stack="a" onClick={this.moveBlock}>
          {aBlocks}
        </div>
        <div data-stack="b">
        </div>
        <div data-stack="c">
        </div>
      </div>
    );
  }
}

//
// if (stacks[endStack].length === 0 || stacks[startStack].length - 1 < stacks[endStack].length - 1) {
//   return true;
// } else {
//   return false;
// }
// };
// // Your code here
//
// function checkForWin() {
// if ((stacks.b.length || stacks.c.length) === 4) {
//   return true
// } else {
//   return false;
// }// Your code here
//
// }


ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
