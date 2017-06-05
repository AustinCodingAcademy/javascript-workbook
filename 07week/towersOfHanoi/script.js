'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100, 70, 50, 25],
      b: [],
      c: [],
      block: null
    }
  }

  moveBlock = (event) => {
    const stack = event.target.getAttribute('data-stack');
    const newStack = this.state[stack].slice();
    const block = newStack.pop();
    const obj = {};
    obj[stack] = newStack;
    obj['block'] = block;
    this.setState(obj);
  }

  render() {
    const aBlocks = this.state.a.map( (size) => {
      return (<div key={block} data-block={size}></div>)
    });
     const bBlocks = this.state.b.map( (size) => {
      return (<div key={block} data-block={size}></div>)
    });
     const cBlocks = this.state.c.map( (size) => {
      return (<div key={block} data-block={size}></div>)
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
