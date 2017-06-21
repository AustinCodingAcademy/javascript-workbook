'use strict';



class HackNews extends React.Component {
  constructor() {
    super();
    this.state = {
      storyIds:[],
      storyTitle: []
    }

  }

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty', {
      method: 'GET',
    }).then((response) => {
      response.json().then((storyIds) => {
        storyIds.forEach((storyId) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((response) => {
            response.json().then((story) => {
              this.setState ({
                storyIds: story.url,
                storyTitle: story.title
              })
            })
          })
        })
      });
    });
  }

  render() {
    // const title = this.state.storyIds.title;
    // const storyIds = this.state.storyIds.map((storyId) => {
    //
    // })
    return (
      <div className="col">
        <a href={this.state.storyIds}>{this.state.storyTitle}</a>
      </div>
    )
    return(
      <div className="row">
        {this.state.storyIds}
      </div>
    )
  }
}
ReactDOM.render(<HackNews />, document.querySelector('#fetch'));
