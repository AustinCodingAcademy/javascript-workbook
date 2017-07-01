'use strict';

class PeopleApi extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      people: []
      fName: '',
      lName: '',
      pic:''
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
            let pic = person.picture.thumbnail;
            return [fName, lName, pic];
            })
          });
        });
    console.log(this.state.people);

    //this.setState(this.state.thumbnails = authors);
      //  img.src = author.picture.medium;
      //  span.innerHTML = `${author.name.first} ${author.name.last}`;
    })
}

  render(){
    const names =this.state.people.map((person)=>{
      return (<div key={person}>
<<<<<<< HEAD
          <div>{person[0]} {person[1]}</div>
          <img src={person[2]} />
=======
          <div>{person.fName} {person.lName}</div>
          <img src={this.state.people.pic} />
>>>>>>> origin/gh-pages
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
