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
    const stack = event.target.getAttribute('data-stack');
    const blocks = this.state[stack].slice();
    const block = blocks.pop();

    if (this.state.block === null) {
      this.getBlock();
      // if (
      //   !event.target.getAttribute('data-stack').value ||
      //   event.target.getAttribute('data-stack').value > this.state.block
      // ) {
      //   event.target.getAttribute('data-stack').value = this.state.block;
      // } else {
      //   this.getBlock();
      // }
    } else if
      (this.state.block < blocks.length-1 || blocks === []) {
        blocks.push(this.state.block);
    }
  }

  getBlock = () => {
    const holdme = this.moveBlock.block;
    this.setState({block = holdme});
    // this.setState;

    // const stack = event.target.getAttribute('data-stack');
    // const blocks = this.state[stack].slice();
    // const block = this.moveBlock.blocks.pop();
    // const obj = {};
    // obj.stack = this.moveBlock.blocks;
    // obj.block = this.moveBlock.block;
    // this.state.block = obj.block;

    // if (
    //   !obj[stack] ||
    //   obj[stack].length-1 > obj.block
    // ) {
    //   obj[stack].push(obj.block);
    // }
    // this.setState(obj);
  }


  render() {
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
      </div>
    )
  }


}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
