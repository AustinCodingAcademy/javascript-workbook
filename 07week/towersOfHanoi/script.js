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

  moveBlock = (event) => {
    const letter = event.target.getAttribute('data-stack');
    const stack = this.state[letter].slice();
    const obj = {};
    if (!this.state.block) {
      const block = stack.pop();
      obj["block"] = block;
    } else if
      (stack.length === 0 || stack[stack.length-1] > this.state.block) {
      stack.push(this.state.block);
      obj["block"] = null;
    }
    // const block = blocks.pop();

    obj[letter] = stack;
    // obj["block"] = block;
    this.setState(obj);
  }

  render() {

    let winnerWinner = '';
    if (this.state['b'].length === 4 || this.state['c'].length === 4) {
      winnerWinner = (<div>Yay!! You did it!!</div>);
      return winnerWinner;
    }

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
        <div data-stack="a" onClick={this.moveBlock}>
          {aBlocks}
        </div>
        <div data-stack="b" onClick={this.moveBlock}>
          {bBlocks}
        </div>
        <div data-stack="c" onClick={this.moveBlock}>
          {cBlocks}
        </div>
        <div>{winnerWinner}</div>
      </div>
    )
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
