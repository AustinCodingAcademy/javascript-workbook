'use strict';


class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'there',
      color: 'red'
    };
  }

  changeName = (e) => {
    let color;
    if (e.target.value.length % 3 === 0 && e.target.value.length % 5 === 0) {
      color = 'blue';
    } else if (e.target.value.length % 3 === 0) {
      color = 'green';
    } else if (e.target.value.length % 5 === 0) {
      color = 'red';
    } else {
      color = 'black';
    }

    this.setState({
      name: e.target.value,
      color: color
    });
  }

  render() {
    return (
      <div>
        <h1 style={ {color: this.state.color} }>Hello, {this.state.name}!</h1>
        <input type="text" onChange={this.changeName} />
      </div>
    );
  }
}



ReactDOM.render(<Welcome />, document.getElementById('welcome'));
