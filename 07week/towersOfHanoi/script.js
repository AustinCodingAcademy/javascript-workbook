'use strict';

class TowersOfHanoi extends React.Component {
  constructor() {
    super()
    this.state = {
      a:[100, 25, 50, 25],
      b:[],
      c:[],
      held: null
    }
  }
// all blocks start in the first row, so they were moved to a.

  clickStack = (e) => {
    const letter = e.target.getAttribute('data-stack');
    const stack = this.state[letter].slice();
    let block;
    if (this.state.block) {
      const block = stack.pop();
    } else {
      stack.push(this.state.block);
      const ['block'] = null;
    }
      const update = {};
      update[letter] = stack;
      update ['block'] = block;

  }
    this.setState(update);

  render () {
    const aBlocks = this.ste.a.map((size)) => {
      return (<div data-block=(size)></div>;
    });

    const bBlocks = this.ste.a.map((size)) => {
      return (<div data-block=(size)></div>;
    });

    const cBlocks = this.ste.a.map((size)) => {
      return (<div data-block=(size)></div>;
    });

  return (
    <div data-stack="a" onClick={this.clickStack}>
    {aBlocks}
    </div>
    <div data-stack="b" onClick={this.clickStack}>
    {bBlocks}
    </div>
    <div data-stack="c" onClick={this.clickStack}>
    {cBlocks}
    </div>
  )
    )
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
