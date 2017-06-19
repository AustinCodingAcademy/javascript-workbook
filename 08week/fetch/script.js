'use strict';

class Instagram extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      userId: null,
      userName: null,
      selected: '',
      accessToken: null
    }
    //You always want to start with emtpy arrays or null. When you update the state,
    //that info will change.

    this.submitForm = this.submitForm.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }
  //binding here is common convention, it will attach info to this and can resolve
  //potential performance issues

  componentDidMount() {
    const accessToken = window.location.hash.split('=')[1];
    this.setState({
      accessToken: accessToken
    });
    //we use didMount above since this generation or assignment of a token is an action
    //that happens in the browser. We want to hold our access Token and keep it in
    //the window since we saw that we were having issues with regeneration of the token.

    //This was specifically built to hold it (the access Token). We made it a variable.

    if (accessToken) {
      this.fetchUser(accessToken);
    }
  }
//Now we call the access Token -- if it appears, grab the users's accesstoken and
//use it in the function below were it is attached to the URL

  fetchUser(accessToken) {
    fetchJsonp(`https://api.instagram.com/v1/users/self?&access_token=${accessToken}`)
    //research online shows that fetchjsonp needs to be used here. We need the access token
    //at the end of the URL in addition to referring to the variable here ${}

    //asking for a response here...

      .then(resp => resp.json())
      //stating that the response needs to be converted to json
      .then(json => {
        //then manipulating the json data that is returned to setState and call
        //on specific objects

        this.setState({
          userId: json.data.id
          //now I'm specifically calling my userId which I need to grab the thumbnails

        })
      })
  }

  // My accessToken is the only one I have access to at this time. Now I am using
  //
  fetchThumbnails() {
    fetchJsonp(`https://api.instagram.com/v1/users/${this.state.userId}/media/recent/?access_token=${this.state.accessToken}`, {
// WE variablized the userId and accessToken above. Why? Our keys are empty in the initial
//component. We want them updated after the state changed so we refer to the state here
      method: 'GET'
      //WHY ARE WE CALLING THE METHOD "GET" HERE? ISN'T FETCH GET?
    }).then((response) => {
      response.json().then((json) => {
        this.setState({
          images: json.data.map((post) => {
            return post.images;
          })
        });
      });
    });
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
    this.fetchThumbnails();
  }

  changeInput(event) {
    this.setState({
      userName: event.target.value
    });
  }

  clickImage(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.getAttribute('data-image'));
    this.setState({
      selected: event.target.getAttribute('data-image')
    });
  }

  render() {
    const thumbnails = this.state.images.map((image) => {
      return (
        <div key={image.thumbnail.url} className="col">
          <img src={image.thumbnail.url} data-image={image.standard_resolution.url} onClick={this.clickImage.bind(this)}/>
        </div>
      );
    });

    console.log(this.state.selected);



    return(
      <div>
        <InstagramSearch onSubmit={this.submitForm} onChangeInput={this.changeInput}/>
        <div className="row">
          {thumbnails}
        </div>
        <img src={this.state.selected} />
      </div>
    )
  }
}

class InstagramSearch extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input onChange={this.props.onChangeInput} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<Instagram />, document.querySelector('#thumbnails'));
