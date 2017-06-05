'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        a: [100,75,50,25],
        b: [],
        c: [],
        blockHeld: null
    }
  }

  moveBlock = (event) => {


    const clickedStack = event.target.getAttribute('data-stack');
    const blocks = this.state[clickedStack].slice();
    const block = blocks.pop();
    const obj = {};
    obj[clickedStack] = blocks;
    obj.block = block;
    this.setState(obj);

  }

  render() {

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
          {aBlocks} <div className="clicker">click here</div>
        </div>
        <div data-stack="b" onClick={this.moveBlock}>
          {bBlocks} <div className="clicker">click here</div>
        </div>
        <div data-stack="c" onClick={this.moveBlock}>
          {cBlocks} <div className="clicker">click here</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
