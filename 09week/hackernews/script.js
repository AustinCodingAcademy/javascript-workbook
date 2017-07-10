'use strict';

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((response) => {
  console.log('response: ', response);
  response.json().then((storyIds) => {
    console.log('storyIds: ', storyIds);
    for (var i = 0; i < 10; i++) {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json?print=pretty`).then((response) => {
        response.json().then((story) => {
          const a = document.createElement('a');
          a.href = story.url;
          a.innerText = story.title;
          a.target = 'blank';
          const div = document.createElement('div');
          div.appendChild(a);
          document.querySelector('#fetch').appendChild(div);
        })
      })
    }    
  });
});
