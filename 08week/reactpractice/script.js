'use strict';

const users = [
  {
    name: 'Steve',
    phone: '512-555-3333',
    city: 'Austin'
  },
  {
    name: 'Bob',
    phone: '512-555-4444',
    city: 'Bastrop'
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        namer: '',
        phone: '',
        city: ''
    };
  };

componentDidMount() {
  users.map((user) => {
    this.setState({
      namer: user.name,
      phone: user.phone,
      city: user.city
    })
  })
}


  render() {

    return (
      <div id="root">
        <div>{this.state.namer}</div>
        <div>{this.state.phone}</div>
        <div>{this.state.city}</div>
      </div>

    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'));
