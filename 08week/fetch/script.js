'use strict';
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(res => {
  res.json().then (storyId => {
    storyId.forEach(Id => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${Id}.json?print=pretty`).then(res => {
        res.json().then (story => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = story.url;
          a.innerText = story.title;
          li.appendChild(a);
          document.getElementById('top-stories').appendChild(li);
        });
      });
    });
  });
});
