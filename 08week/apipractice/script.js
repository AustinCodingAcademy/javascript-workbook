'use strict';

class Flickr extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      userId: this.props.userId,
      selected: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  componentDidMount() {
    this.fetchThumbnails(this.state.userId);
  }

  fetchThumbnails(userId) {
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1", {
      method: 'GET'
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
    this.fetchThumbnails(this.state.userId);
  }

  changeInput(event) {
    this.setState({
      userId: event.target.value
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
        <FlickrSearch thumbnails={this} />
        <div className="row">
          {thumbnails}
        </div>
        <img src={this.state.selected} />
      </div>
    )
  }
}

class FlickrSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    }
  }



  render() {
    return (
      <form onSubmit={this.props.thumbnails.submitForm}>
        <input onChange={this.props.thumbnails.changeInput} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<Flickr userId="" />, document.querySelector('#thumbnails'));
