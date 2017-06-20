'use strict';
//many thanks to Ericka for sharing her code to get me over the huge bump in my
//code not rendering the pics, although successfully authenticated!

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
    //should start with empty or null arrays- when the state is updated,
    //that info will change.

    this.submitForm = this.submitForm.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }
  //binding here is common practice to attach info to 'this' and can resolve
  //potential performance issues

  componentDidMount() {
    const accessToken = window.location.hash.split('=')[1];
    this.setState({
      accessToken: accessToken
    });
    //didMount is used above since the generation/assignment of a token is an action
    //that happens in the browser. We want to hold our access Token and keep it in
    //the window since we saw that we were having issues with regeneration of the token.

    //The 'if' statement as a variable below was specifically built to hold the access Token.

    if (accessToken) {
      this.fetchUser(accessToken);
    }
  }
//We called the access Token above -- if it appears, we take the users's token and
//use it in the function below, attached to the URL.

  fetchUser(accessToken) {
    fetchJsonp(`https://api.instagram.com/v1/users/self?&access_token=${accessToken}`)
    //common practice is to use fetchjsonp here. we need the access token
    //at the end of the URL in addition to referring to the variable here ${}

    //asking for a response here...
      .then(resp => resp.json())
      //stating that the response needs to be converted to json
      .then(json => {
        //then manipulating the json data that is returned to setState and call
        //on specific objects
        this.setState({
          userId: json.data.id   //specifically calling userId needed to grab the thumbnails
        })
      })
  }
  // app can only be tested with my access token at this time.
  //
  fetchThumbnails() {
    fetchJsonp(`https://api.instagram.com/v1/users/${this.state.userId}/media/recent/?access_token=${this.state.accessToken}`, {
// the userId and accessToken are variable-ized above because the keys are empty in the initial
//component. we want them updated after the state changed so we refer to the state here
      method: 'GET'

    }).then((response) => {
            //stating that the response needs to be converted to json
      response.json().then((json) => {
        //then manipulating the json data that is returned to setState and call
        //on specific objects
        this.setState({
          images: json.data.map((post) => {
            return post.images;
            // specifically calling the images from each post and using them
            // to display the thumbnails
          })
        });
      });
    });
  }

//below outlines what will occur when submit button is clicked.
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
  //how can the input be changed to accept other users?

  clickImage(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.getAttribute('data-image'));
    this.setState({
      selected: event.target.getAttribute('data-image')
    });
  }
//in the DOM, clicked images reveal the URLs for the thumbnail
// displayed. how may a different sized thumbnail be rendered?

  render() {
    const thumbnails = this.state.images.map((image) => {
      return (
        <div key={image.thumbnail.url} className="col">
          <img src={image.thumbnail.url} data-image={image.standard_resolution.url} onClick={this.clickImage.bind(this)}/>
        </div>
      );
    });
//the image thumbnail dot notation renders the default 150x150. The data-image
// tag explains the display post-click.

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
        <button type="submit">Serve me up some of those photos, please</button>
      </form>
    )
  }
}

ReactDOM.render(<Instagram />, document.querySelector('#thumbnails'));
