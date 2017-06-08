'use strict';

class Instagram extends React.Component{
  constructor(props) {
    super();
    this.state = {
      thumbnails: [],
      userID: this.props.userID
    }
componentDidMount() {
    fetchJsonp(){
      method: 'GET'
    }).then((response) =>{
      response.json().then((json)=>{
        this.setState({
          thumbnails: json.data.map((post) => {
            return post.images.thumbnail.url;
          })
        });
      });
    });
  }

  render() {
    const thumbnails = this.state.thumbnails((thumbnail) => {
      return (
        <div key ={thumbnail} className="col">
        <img src={thumbnail} />
        </div>
      );
    });
    return(
      <InstagreamSearch />
      <div className="row">
      {thumbnails}
      </div>
    )
  }
}

class InstagreamSearch extends React.Component {
  constructor(){
    super();
    this.state ={
      username: ''
    }
  }

  submitForm(e) {
    event.preventDefault();

  }
  render() {
    return (
      <form onSubmit ={this.submitForm.bind(this)}>
      <input />
      <button type="submit">Submint</button>
      </form>
    )}


}
ReactDOM.render(<Instagram userID="self"/>, document.querySelector('#fetch'));
ReactDOM.render(<InstagreamSearch />, document.querySelector('#search'));
