'use strict';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  setStories = () => {
    //return [nums]
  }

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((response) => {
      response.json().then((storyIds) => {
        storyIds.slice(0,10).forEach((storyId) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((response) => {
            response.json().then((story) => {
              this.setState(previous => {
                return {
                  stories: [...previous.stories, story]
                }
              })
            })
          })
        })
      });
    });
  }

  render() {
    let list = this.state.stories.map(story => {
      return (<a key={story.id} href={story.url}>{story.title}</a>);
    })

    return (<div>{list}</div>);
  }
}

ReactDOM.render(<List />, document.querySelector('#fetch'))
