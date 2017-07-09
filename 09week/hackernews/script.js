
'use strict';

class HackerNews extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      filtered: []
    }

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((response) => {
      return response.json();
    })
    .then((storyIds) => {
      storyIds.slice().forEach((storyId) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        .then((response) => {
          return response.json();
        })
        .then((story) => {
          const stories = this.state.stories.slice();
          stories.push(story);
          this.setState({
            stories: stories,
            filtered: stories
          });
        });
      })
    });

    this.search = this.search.bind(this);
  }

  search(event) {
    console.log(event.target.value);
    const filtered = this.state.stories.filter(story => {
      return story.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({ filtered: filtered })
  }

  render() {
    const stories = this.state.filtered.map((story) => {
      return (
        <li key={story.id}>
          <a href={story.url}>{story.title}</a>
        </li>
      )
    });
    return (
      <div>
        <input type="text" onChange={this.search} />
        <ul>
          {stories}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<HackerNews />, document.getElementById('hacker-news'));
