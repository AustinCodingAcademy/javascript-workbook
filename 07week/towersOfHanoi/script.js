'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grabbedBlock: 0,
      a: [100,75,50,25],
      b: [],
      c: [],
    }
    this.game = this.game.bind(this);
  }

  game(event){
    let stackLetter = event.target.getAttribute("data-stack");
    let grabbedItem = this.state.grabbedBlock;
    let selectedBlock = this.state[stackLetter];
    let checkA = this.state.a;
    let checkB = this.state.b;
    let checkC = this.state.c;


    console.log(checkB.length);
    console.log(grabbedItem);
    console.log(selectedBlock);
    console.log(selectedBlock[selectedBlock.length - 1]);


//this if-statement controls the logic of the game play. If this.state.grabbedBlock is zero, you can grab a block. If you've grabbed a block, you can drop it if you drop it on a larger block
    if(grabbedItem == 0){
      grabbedItem = selectedBlock[selectedBlock.length - 1];
      selectedBlock = selectedBlock.pop();
    } else if (grabbedItem < (selectedBlock[selectedBlock.length - 1]) || (selectedBlock[selectedBlock.length - 1] == undefined)) {
      selectedBlock = selectedBlock.push(grabbedItem);
      grabbedItem = 0;
    } else {
      alert("Invalid Selection");
    }

//this checks for a win, if you manage to move 4 pieces to the 3rd or 2nd stacks 
    if((checkB.length == 4) || (checkC.length == 4)){
      alert("You Win!")
    }

    console.log(grabbedItem);

    const newState = {
      grabbedBlock: grabbedItem,
      stackLetter: selectedBlock,
    }
    this.setState(newState);
  }

  render() {

    function convertToDivs(numbers){
      return (<div key={numbers} data-block={numbers}></div>)
    }

    let CA = this.state.a.map(convertToDivs);
    let CB = this.state.b.map(convertToDivs);
    let CC = this.state.c.map(convertToDivs);

    return (
      <div>
        <div data-stack="a" onClick={this.game}>
          {CA}
        </div>
        <div data-stack="b" onClick={this.game}>
          {CB}
        </div>
        <div data-stack="c" onClick={this.game}>
          {CC}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
