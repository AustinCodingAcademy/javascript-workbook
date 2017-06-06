'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a:[100, 75, 50, 25],
      b:[],
      c:[],
      block: null,
      win: ''


    }
  }

  clickStack = (e) => {

    const letter = e.target.getAttribute('data-stack');
    const stack = this.state[letter].slice();
    let block;

    if (!this.state.block){
      block = stack.pop();
      console.log(block)
    }
    else if(!e.target.lastElementChild) {
      stack.push(this.state.block);
      block = null;
    }
    else if(e.target.lastElementChild && this.state.block < Number(e.target.lastElementChild.getAttribute('data-block'))) {
      stack.push(this.state.block);
      block = null;
    }
    else{
      return false;
    }

    const update = {}
    update[letter] = stack
    update['block'] = block;

    if (update[letter].length === 4) {
     update['win'] = "YOU WON!"
    }

    this.setState(update);

  }


  render() {
    const aBlocks = this.state.a.map((size) => {
      return (<div data-block={size}></div>);
    });
    const bBlocks = this.state.b.map((size) => {
      return (<div data-block={size}></div>);
    });
    const cBlocks = this.state.c.map((size) => {
      return (<div data-block={size}></div>);
    });

    return (
      <div>
        <div onClick={this.clickStack} data-stack="a">
          {aBlocks}
        </div>
        <div onClick={this.clickStack} data-stack="b">
          {bBlocks}
        </div>
        <div onClick={this.clickStack} data-stack="c">
          {cBlocks}
        </div>
        <div>
          {this.state.win}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
