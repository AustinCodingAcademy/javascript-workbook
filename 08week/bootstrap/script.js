'use strict';

class Alert extends React.component {
  constructor() {
    super();
    this.state = {
      message: 'Well done! you successfully read this important message.'

    }
  }

  render() {

    return (
      <div className={`alert alert-${this.state.type}} role=''>
      </div>
    )

  }
}

ReactDOM.render(<Alert />, document.querySelector('#bootstrap'));
