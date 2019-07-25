'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div data-stack="1">
          <div data-block="100"></div>
          <div data-block="75"></div>
          <div data-block="50"></div>
          <div data-block="25"></div>
        </div>
        <div data-stack="2">
        </div>
        <div data-stack="3">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
