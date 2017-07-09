
'use strict';

class NameFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      person: [],
      filteredName: []
    }

    fetch('https://randomuser.me/api/?results=5')
    .then((response) => {
      return response.json();
    })

      .then((names) => {
          const person = this.state.person.slice();
          person.push(names);
          this.setState({
            person: person,
            filteredName: person
          });
        });


    this.search = this.search.bind(this);
  }

  search(event) {
    console.log(event.target.value);
    const filteredName = this.state.person.filter(names => {
      return names.results.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({ filtered: filteredName })
  }

  render() {
    const person = this.state.filteredName.map((names) => {
      return (
        <li key={names.results.name}>
        </li>
      )
    });
    return (
      <div>
        <input type="text" onChange={this.search} />
        <ul>
          {person}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<NameFilter />, document.getElementById('name-filter'));










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
