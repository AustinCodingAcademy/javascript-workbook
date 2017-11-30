'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack1: [100,75,50,25],
      stack2: [],
      stack3: [],
      hand: null,
      status: 'active'
    }
    this.moveBlock = this.moveBlock.bind(this);
    this.drawBlocks = this.drawBlocks.bind(this);
    this.removeBlock = this.removeBlock.bind(this);
    this.placeBlock = this.placeBlock.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }

checkWin() {
  if (this.state.stack3.length == 4) {
    const game = {
      status: 'over'
    }
    this.setState(game);
    return true;
  } else {
    return false;
  }
}

drawBlocks(thisStack) {
  console.log("drawBlocks test");
  let list = [];
  for (var b=0; b<thisStack.length; b++) {
    let blockNum =  (thisStack[b]);
    var div = <div data-block={blockNum}></div>
    list.push(div);
  }
  return list
}

removeBlock(stack) {
  let take = stack.pop();
  const taken = {
    hand: take
  }
  this.setState(taken);
}

placeBlock(stack) {
  let drop = this.state.hand;
  stack.push(drop);
  console.log(stack);
  const dropped = {
    hand: null
  }
  this.setState(dropped);
}

moveBlock(event){
  if (this.state.status === 'active'){
    let $stack = event.target.getAttribute("data-stack");
    let concat = 'stack'+$stack;
    let stack = this.state[concat];
    console.log(concat,stack);
    if (this.state.hand === null) {
      let take = this.removeBlock(stack);
      if (stack.length>0) {
        for (var b=0; b<stack.length; b++) {
          let blockNum =  (stack[b]);
          console.log(blockNum);
        }
      }
    }
    else if (this.state.hand !== null) {
      let topBlock = stack[(stack.length)-1];
      console.log('stack.length:',stack.length);
      console.log('topBlock:',topBlock);
      if (this.state.hand < topBlock || stack.length ===0 ) {
        this.placeBlock(stack);
      }
    }
    let check = this.checkWin()
    if (check == true) {
      alert('You win!');
    }
  }
}



  render() {
    return (
      <div>
        <div data-stack="1" id="stack1" onClick={this.moveBlock}>
          {this.drawBlocks(this.state.stack1)}
        </div>
        <div data-stack="2" id="stack2" onClick={this.moveBlock}>
        {this.drawBlocks(this.state.stack2)}
        </div>
        <div data-stack="3" id="stack3" onClick={this.moveBlock}>
        {this.drawBlocks(this.state.stack3)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
