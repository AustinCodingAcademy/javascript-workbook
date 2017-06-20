'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100,75,50,25],
      b: [],
      c: [],
      block: null,
      //win: ""
    }
  }

  isLegal = function(stackArray, block) {
    console.log(stackArray[stackArray.length - 1]);
    console.log(block);
    if (stackArray[stackArray.length - 1] === undefined){
      return true;
    }
    if(stackArray[stackArray.length - 1] > block){
      return true;
    } else {
      return false;
    }
  }

  checkForWin = () => {
    console.log("check for win this.state.a +b", (this.state.b.length === 4 || this.state.c.length === 4));
    if ((this.state.b.length === 4 || this.state.c.length === 4)){
      return "you win!"
    }
    else {
      return '';
    }
  }

  // componentDidUpdate(){
  //
  //   //checkfor win
  //   if(this.checkForWin()) {
  //     const obj = {};
  //     obj['win'] = this.checkForWin();
  //     this.setState(obj);
  //   }
  //   //update
  //
  // }

  clickStack = (event) => {
    const letter = event.target.getAttribute('data-stack');
    const stack = this.state[letter].slice();
    const obj = {};

    if(!this.state.block){
      const block = stack.pop();
      obj['block'] = block;
    } else {
      // check if a valid move
      if ( this.isLegal(stack, this.state.block) ) {

        stack.push(this.state.block);
        obj['block'] = null;


      }
    }
    obj[letter] = stack;

    //this.setState(obj);
    // CHECK FOR WIN HERE THEN ADD TO OBJ
    //obj['win'] = this.checkForWin();
    this.setState(obj);
    // can't do this
    // this.setState({
    //   letter: stack
    // })

  }

  render() {
    const win = this.checkForWin();
    const aBlocks = this.state.a.map((size) => {
      return (<div key={size} data-block={size}></div>)
    });
    const bBlocks = this.state.b.map((size) => {
      return (<div key={size} data-block={size}></div>)
    });
    const cBlocks = this.state.c.map((size) => {
      return (<div key={size} data-block={size}></div>)
    });

    return (
      <div>
        <div data-stack="a" onClick={this.clickStack}>
        {aBlocks}
      </div>
        <div data-stack="b" onClick={this.clickStack}>
        {bBlocks}
      </div>
        <div data-stack="c" onClick={this.clickStack}>
        {cBlocks}
      </div>
        <div id="win">
          {win}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
