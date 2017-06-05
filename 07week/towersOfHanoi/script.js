'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [25,50,75,100],
      b: [],
      c: [],
      block: null

    }
  }

moveBlock(event) => {
  const stack = event.target.getAttribute('data-stack');
  const block = this.state[stack].slice();
  const = block.pop();
  const obj = {};
  obj[stack] = blocks;
  obj.block = block;
  this.setState(obj);
}


  render() {
    const aBlocks = this.state.a.map((block) ={
      return(<div key = {block} data=block ={block}><)
    })
    return (
      <div>
        <div data-stack="a">
          <div data-block="100"></div>
          <div data-block="75"></div>
          <div data-block="50"></div>
          <div data-block="25"></div>
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
