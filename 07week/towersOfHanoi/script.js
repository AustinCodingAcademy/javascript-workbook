'use strict';
// defining individual block JSX object
function Block(props){
  return (
    <div data-block={props.value}></div>
  );
}
// main react component
class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100, 75, 50, 25],
      b: [],
      c: [],
      held: null
    }
  }
  // returns value of last block, or null if none
  lastBlock = (stack) => {
    const length = stack.length;
    if (length) return stack[length - 1];
    return null;
  }
  // click/move piece function
  handleClick = (inStack) => {
    let stack = this.state[inStack].slice();
    let held = this.state.held;
    if (!held && this.lastBlock(stack)) {
      held = stack.pop();
    } else if (held && !this.lastBlock(stack)) {
      stack.push(held);
      held = null;
    } else if (held && held < this.lastBlock(stack)) {
      stack.push(held);
      held = null;
    }
    this.setState({
      [inStack]: stack,
      held: held
    })
  }
  checkWin = () => {
    return (this.state.c.length === 4 ? true : null)
  }
  // returns all <Block/>'s within a stack in a <div data-stack=xxx> wrapper
  renderStack = (stack) => {
    const blocks = this.state[stack].map((block) => {
      return <Block value={block} key={block} />
    });
    return (
      <div data-stack={stack} onClick={ () => {this.handleClick(stack)} }>
        {blocks}
      </div>
    );
  }
  // react render function
  render() {
    let status = (this.checkWin() ? 'You win!' : this.checkWin());
    return (
      <div>
        {this.renderStack('a')}
        {this.renderStack('b')}
        {this.renderStack('c')}
        <div id='announce-game-won'>{status}</div>
      </div>
    );
  }
}
// DOM interaction function
ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
