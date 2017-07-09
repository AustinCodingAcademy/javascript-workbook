'use strict';

class checkpoint extends React.Component {
  constructor() {
    super();
    this.state = {
      person: [],
      filteredname: []
    }

  fetch('https://randomuser.me/api/?results=5')
  .then(function(response) {
    return response.json();
  })
     .then(function(person) {
        const name = this.state.name.slice();
        name.push(person);
        this.setState({
          name: name,
          filtered: names
        });
      });

    this.search = this.search.bind(this);
  }

  search(event) {
    console.log(event.target.value);
    const filtered = this.state.name.filter(function(person) {
      return person.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({ filterednam: filtered })
  }

  render() {
    const name = this.state.filtered.map(function(person) {
      return (
        <li key={person.name}>
        </li>
      )
    });
    return (
      <div>
        <input type="text" onChange={this.search} />
        <ul>
          {filtered}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<checkpoint />, document.getElementById('checkpoint'));











//
//
//
//
// 'use strict';
//
//
// class checkpoint extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       person: [],
//       filteredName: []
//     }
//
// var request = new Request('https://randomuser.me/api/?results=5')
// var myImage = document.querySelector('nice');
// var myURL = request.url;
//
//
// fetch(request).then(function(response) {
//   return response.json()
// })
// .then(function(json) {
//   json.results.forEach((user) => {
//     console.log(JSON.stringify(json, null, 2));
//     const a = document.createElement('a');
//     a.href = `mailto:${user.email}`
//     a.innerText = user.name.first
//     document.querySelector('#nice').appendChild(a)
//   })
// })
//
//
//
// render() {
//   return()
// }
// ReactDOM.render(<checkpoint />, document.getElementById('nice'));
