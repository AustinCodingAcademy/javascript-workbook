
'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100, 75, 50, 25],
      b: [],
      c: [],
      blockHeld: []
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

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
