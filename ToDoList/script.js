class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
    let item = this.state.value;
    let newDiv = document.createElement('DIV');
    newDiv.innerText = item;
    console.log(newDiv);

  }



  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          TO DO:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
        <div>

      </div>
    )
  }
}


ReactDOM.render(<ToDoList />, document.getElementById('root'));
