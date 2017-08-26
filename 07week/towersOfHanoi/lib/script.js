'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);

    this.state = { moved: {} };

    this.removeBlock = this.removeBlock.bind(this);
    this.setBlock = this.setBlock.bind(this);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { 'data-stack': '1', onClick: this.setBlock },
        React.createElement('div', { 'data-block': '100', onClick: this.removeBlock }),
        React.createElement('div', { 'data-block': '75', onClick: this.removeBlock }),
        React.createElement('div', { 'data-block': '50', onClick: this.removeBlock }),
        React.createElement('div', { 'data-block': '25', onClick: this.removeBlock })
      ),
      React.createElement('div', { 'data-stack': '2', onClick: this.setBlock }),
      React.createElement('div', { 'data-stack': '3', onClick: this.setBlock })
    );
  }

  removeBlock(e) {
    if (!this.state.moved.target) {
      this.state.moved = { target: e.target, size: e.target.attributes[0].value, parent: e.target.parentNode };
      e.target.parentNode.removeChild(e.target);
    }
  }
  setBlock(e) {
    let end = e.target.children[e.target.children.length - 1];
    let endBlock = end && parseInt(end.attributes[0].value, 10);

    if (!endBlock || endBlock > this.state.moved.size) {
      e.target.appendChild(this.state.moved.target);
      this.state.moved.target = 0;
      if (e.target.children.length === 4) {
        alert("This Tower Is Yours!");
      }
    } else {
      this.state.moved.parent.appendChild(this.state.moved.target);
      this.state.moved.target = 0;
    }
  }
}

ReactDOM.render(React.createElement(TowersOfHanoi, null), document.getElementById('towers-of-hanoi'));