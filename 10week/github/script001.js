'use strict';

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
  method: 'GET',
}).then((response) => {
  response.json().then((storyIds) => {
    storyIds.forEach((storyId) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((response) => {
        response.json().then((story) => {
          const a = document.createElement('a');
          a.href = story.url;
          a.innerText = story.title
          const div = document.createElement('div');
          div.appendChild(a);
          document.querySelector('#fetch').appendChild(div);
        })
      })
    })
  });
});
// ReactDOM.render(<googleBook />, document.querySelector('#bookPreview'));
