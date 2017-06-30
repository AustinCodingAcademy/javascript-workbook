"use strict";

class AddUser extends React.Component { //define a class to add or remove user
  constructor(props) {
    super(props);
    this.state = {
      adding: false
    };
  }

  add = () => {
    this.setState({
      adding: true //add more pictures if user clicks the add button
    });
  };

  remove = () => {
    this.props.deleteFromBoard(this.props.index);  //delete selected picture by calling the method
  };

  render() {
    if (this.state.adding) {
      return (
        <div>
          <div>{this.props.children}</div>
          <button onClick={this.add} className="btn-primary">Add</button>
          <button onClick={this.remove} className="btn-danger">Remove</button>
          <UserPicture />
        </div>
      );
    } else {
      return (
        <div>
          <div>{this.props.children}</div>
          <button onClick={this.add} className="btn-primary">Add</button>
          <button onClick={this.remove} className="btn-danger">Remove</button>
        </div>
      );
    }
  }
} //AddUser component ends

class UserPicture extends React.Component { //define a class to display pictures
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };

    fetch("https://randomuser.me/api/?results=1") //fetch large pictures
      .then(response => response.json())
      .then(response => {
        // console.log(response.results);
        this.setState({
          pictures: response.results.map(person => {
            return person.picture.large;
          })
        });
      });

    const deletePicture = i => { //delete picture from board
      var arr = this.state.pictures;
      arr.splice(i, 1);
      this.setState({
        pictures: arr
      });
    };
  } //constructor ends

  render() {
    const pictures = this.state.pictures.map((picture, i) => { //loop through each picture
      return (
        <div>
          <AddUser
            key={i}
            index={i}
            deleteFromBoard={this.deletePicture}
          >
            <img src={picture} />
          </AddUser>
        </div>
      );
    });
    return (
      <div>
        {pictures}
      </div>
    );
  }
} //UserPicture Component ends
ReactDOM.render(
  <div>
    <AddUser>Add a user</AddUser>
  </div>,
  document.querySelector("#fetch")
);
