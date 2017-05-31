// 'use strict'
//
// class Cities extends React.component {
//   constructor (props) {
//     super (props);
//     this.state = [
//       cities:
//       'Boston',
//       'Austin',
//       'Chicago',
//       ]
//     };
//   }
//
//   render(){
//     const cityItems = this.state.cities.map((city)) =>
//     return (<li key=(city)>I love {city}!</li>);
//   });
//
//     return (<ul>(cityItems)</ul>);
//   }
// }
//
// ReactDOM.render(<Cities/>, document.getElementById('cities'));

// Using Hello World below to make it cleaer and simple

'use strict'

class Cities extends React.component {
  constructor () {
    super();
    this.state = {
      name: 'there',
      color: 'red'
    };
  }

  changeName = (e) => {
    let color;
    if (e.target.value % 3 ==== 0 && e.target.value % 5 === 0) {
      color = 'blue';
    } else if (e.target.value.length % 3 === 0 && e.target.value.length % 5 === 0) {
      color = 'green';
    } else if (e.target.value.length % 5 === 0) {
      color = 'red';
    } else {
      color = 'black';

      // come back and check for the in-class example code to complete
    }
    this.setState ({
      name: e.target.value
      color: color
    });
  }

  // changeName(e) {
  //   this.setState ({
  //     name: e.target.value
  //   });
  // }

  render() {
    return
      <div>
        <span> Hello, {this.state.name}!</span>
        <input type="text" onChange={this.changename.bind(this)}/>
    // The first this is referring to everything, and the second
    // this is referring to just the line that the this is on (scope)
      </div>
    );
  }

class Name extends React.component {
  constructor () {
    super ();
    this.state = {
      color: red;
    }
  }


}

}

ReactDOM.render(<Cities/>, document.getElementById('cities'));
