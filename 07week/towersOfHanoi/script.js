'use strict';

class TowersOfHanoi extends React.Component {
  constructor() {
    super()
    this.state = {
      a:[100, 25, 50, 25],
      b:[],
      c:[],
      blockheld: null
    }
  }
// all blocks start in the first row, so they were moved to a.

moveBlock = (event) => {

    const clickedStack = event.target.getAttribute('data-stack');
    const blocks = this.state[clickedStack].slice();
    const obj = {};
// first step of the move function - when a stack is clicked, you hold the top one (blockheld).
 // slice allows you to do that. data-stack indicates which array to target.

    if (this.state["blockHeld"].length === 0) {
      const block = blocks.pop();
      obj["blockHeld"] = block;
// when top block is removed from original array, it's added to a new and empty array.

    } else {
      if (blocks.length === 0 || this.state["blockHeld"] < blocks[blocks.length-1]) {
        blocks.push(this.state["blockHeld"]);
        obj["blockHeld"] = [];
      }
    }
    obj[clickedStack] = blocks;
    this.setState(obj);
// need more clarification on this part here
  }


  render () {
    var didWin;
    if (this.state["b"].length === 4 || this.state["c"].length === 4) {
      didWin = (<div> YOU WON! </div>);
      return didWin;
    };

    const aBlocks = this.state.a.map((block) => {
      return (<div data-block={block}></div>)
    });

    const bBlocks = this.state.b.map((block) => {
      return (<div data-block={block}></div>)
    });

    const cBlocks = this.state.c.map((block) => {
      return (<div data-block={block}></div>)
    });

    return (
      <div>
        <div data-stack="a" onClick={this.moveBlock}>
          {aBlocks} <div className="clicker">click on the blue</div>
        </div>
        <div data-stack="b" onClick={this.moveBlock}>
          {bBlocks} <div className="clicker">click on the blue</div>
        </div>
        <div data-stack="c" onClick={this.moveBlock}>
          {cBlocks} <div className="clicker">click on the blue</div>
        </div>
        <div> {didWin} </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
