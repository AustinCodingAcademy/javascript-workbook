'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //declare state
      1: [100,75,50,25], //data-stack-1
      2: [], //data-stack-2
      3: [], //data-stack-3
      block: null //declare block and assign to null in the beginning
    };
  } //constructor ends

  moveBlock = (event) => { //when it's clicked
    const stack = event.target.getAttribute('data-stack'); //select the stack
    const newStack = this.state[stack].slice(); //make a copy of the array to remove items
    const block = newStack.pop(); //remove the last element and assign to block
    const obj = {}; //create an empty object to hold stack and block variables
    obj[stack] = newStack;
    obj[block] = block;
    this.setState(obj); //pass the object in
  }//moveBlock ends

  render() {

    const block1 = this.state[1].map((block) => {
      return (<div key={block} data-block={block}></div>);
    });

    return (
      <div>
        <div data-stack="1" onClick={this.moveBlock}>
          {block1}
        </div>
        <div data-stack="2">
        </div>
        <div data-stack="3">
        </div>
      </div>
    ); //return ends
  } //render ends
}//class ends

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
