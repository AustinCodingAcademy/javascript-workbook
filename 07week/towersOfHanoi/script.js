'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100,75,50,25],
      b: [],
      c: [],
      blockHeld: []
    }
  }
  moveBlock = (event) => {
    const clickedStack = event.target.getAttribute('data-stack');
    const blocks = this.state[clickedStack].slice();
    const obj = {};
    if (this.state["blockHeld"].length === 0) {
      const block = blocks.pop();
      obj["blockHeld"] = block;
    } else {
      if (blocks.length === 0 || this.state["blockHeld"] < blocks[blocks.length-1]) {
        blocks.push(this.state["blockHeld"]);
        obj["blockHeld"] = [];
      }
    }
    obj[clickedStack] = blocks;
    this.setState(obj);
  }

  render() {
    var didWin;
    if (this.state.b.length === 4 || this.state.c.length === 4) {
      didWin = (<div>YOU WON!</div>);
    };

    const blockA = this.state.a.map((block) => {
      return (<div data-block={block}></div>)
    });

    const blockB = this.state.b.map((block) => {
      return (<div data-block={block}></div>)
    });

    const blockC = this.state.c.map((block) => {
      return (<div data-block={block}></div>)
    });

    return (
      <div>
        <div data-stack="a" onClick={this.moveBlock}>{blockA}</div>
        <div data-stack="b" onClick={this.moveBlock}>{blockB}</div>
        <div data-stack="c" onClick={this.moveBlock}>{blockC}</div>
        <div className="winner"> {didWin} </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
