'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [25, 50, 70, 100],
      b: [],
      c: [],
      block: null
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
        <div data-stack="b" onClick={this.moveBlock}>
        </div>
        <div data-stack="c" onClick={this.moveBlock}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));


///////////////////////////////////////////////
//
//

//
//
/
//
// }
//
//
//   render() {
//     const aBlocks = this.state.a.map((block) => {
//       return (<div data-block={block}></div>)
//     });
//
// bBlocks
//
//     return (
//       <div>
//         <div data-stack="1" onClick={moveBlock}>
//           <div data-block="100"></div>
//           <div data-block="75"></div>
//           <div data-block="50"></div>
//           <div data-block="25"></div>
//         </div>
//         <div data-stack="2">
//         </div>
//         <div data-stack="3">
//         </div>
//       </div>
//     );
//   }
// }
// //cannot pop and push. must create new array
// ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));


'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [25, 50, 75, 100],
      b: [],
      c: [],
      block: null
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
