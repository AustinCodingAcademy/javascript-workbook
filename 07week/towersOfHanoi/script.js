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
    this.clickedStack = this.clickedStack.bind(this)
  }

  moveBlock(event) {
    const clickedStack = event.target.getAttribute('data-stack');
    const newStack = this.state[clickedStack].slice();
    const obj = {};   //this.setState only cares about things passed in- same as {a:[100], block:25}

    if(this.state["block"].length === 0) {
      const block = newStack.pop();
      obj["block"] = newStack,

    } else {
      if(newStack.length ==== 0 || this.state["block"] < newStack[newStack.length -1]) {
        newStack.push(this.state["block"]);
        obj["block"]= [];
      }
    }
    obj[clickedStack] = newStack;
    this.setState(obj);
  }


  //   obj[stack] = newStack;
  //   obj['block'] = block;
  //   this.setState(obj);
  // }

//  if(!this.state.block) {
// const block = stack.pop();
// obj('block') = block;
// } else {
//   stack.push(this.state.block);
//   obj('block') = null
// }
// obj(letter)= stackl
// this.setState(obj);
// }

  render() {
    const aBlocks = this.state.a.map( (size) => {
      return (<div data-block={size}></div>); //alternatively "return (<div data-block={size}><);""
    });

    const bBlocks = this.state.b.map( (size) => {
      return (<div data-block={size}></div>);
    });

    const cBlocks = this.state.c.map( (size) => {
      return (<div data-block={size}></div>);
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
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.querySelector('#towers-of-hanoi'));
