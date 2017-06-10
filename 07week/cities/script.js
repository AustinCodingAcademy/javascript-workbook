'use strict';

class Cities extends React.component {
  constructor() {
    super();
    this.state = {
      cities: [
        'Boston',
        'Austin',
        'Chicago'
      ]
    };
  }

  render() {
    const cityItems = this.state.cities.map((city) => {
      return (<li>I love {city}!</li>);
    });
    
    return (<ul>{cityItems}</ul>);
  }
}

ReactDOM.render(<Cities />, document.getElementById('cities')); //tells react where to put it on the dom
