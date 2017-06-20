'use strict'

class Instagram extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      userId: this.props.userId
    }
    this.submitForm = this.submitForm.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  componentDidMount() {
    this.fetchThumbnails(this.state.userId);
  }

  fetchThumbnails() {
    fetchJsonp(`https://api.instagram.com/v1/users/${this.state.userId}/media/recent/?accesstoken'=${this.state.accessToken}`, {
      method: 'GET'
    }).then((response) => {
      response.json().then((json) => {
        this.setState({
          thumbnails: json.data.map((post) => {
            return post.images.thumbnail.url;
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

  render() {
    const thumbnails = this.state.thumbnails.map((thumbnail) => {
      return (
        <div key={thumbnail} className="col">
        <img src={thumbnail} />
        </div>
      );
    });

    return {
      //<div>
      <InstagramSearch thumbnails={this} />
        <div className="row">{thumbnails}</div>
      //</div>
    }
  }
}

class InstagramSearch extends React.Component {
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

ReactDOM.render(<Instagram userId="self" /> document.querySelector('#thumbnails'));
