'use strict';

class PeopleApi extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      people: []
      }
    }
  componentDidMount() {
     const url = 'https://randomuser.me/api/?results=10';
     fetch(url)
     .then((response) => {
       response.json().then((data) =>{
        this.setState({
          people: data.results.map((person)=> {
            let fName = person.name.first;
            let lName = person.name.last;
            return name.name.first;
            })
          });
        });
    console.log(people);
    //this.setState(this.state.thumbnails = authors);
      //  img.src = author.picture.medium;
      //  span.innerHTML = `${author.name.first} ${author.name.last}`;
    })
}

  render(){
    const names =this.state.people.map((person)=>{
      return (<div key={person}>
          <div>{person}</div>
          </div>);
      });
      return (
        <div>
          <div>{names}</div>
        </div>
        )
    }    //onClick={this.clickImage.bind(this)}/>


  }





//     return(
//
//     )
//   }
// }

// class InstagremSearch extends React.Component {
//   constructor(){
//     super();
//     this.state ={
//       username: ''
//     }
//   }
//
//   submitForm(e) {
//     event.preventDefault();
//
//   }
//   render() {
//     return (
//       <form onSubmit ={this.submitForm.bind(this)}>
//       <input />
//       <button type="submit">Submint</button>
//       </form>
//     )}



ReactDOM.render(<PeopleApi />, document.querySelector('#fetch'));
// ReactDOM.render(<InstagreamSearch />, document.querySelector('#search'));
