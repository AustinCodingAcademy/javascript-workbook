'use strict';

class Cities extends React.Component {
  constructor() {
    super()
    this.state = {
      cities: [
        Boston
        Austin
        Chicago
      ]
    };
  }

  render() {
    const cityItems =  this.state.cities.map((city) => {
      return (<li> I love {city}!<li>);
    });
    return (<ul>{cityItems}<ul>);
  }
}

ReactDOM.render(<Cities />, document.getElementByID('cities'));

//---60 mins mark 05-29--------------------------------------------===============

'use strict';
class Cities extends React.Component {
  constructor() {
    super()
    this.state = {
      name: world;
    };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    <div>
    <span> Hello, {this.state.name}!</span>
    <input type="text" onChange={this.changeName} />
  </div>
  );
  }
}
<ReactDOM.render(<Cities />, document.getElementByID('cities'));
