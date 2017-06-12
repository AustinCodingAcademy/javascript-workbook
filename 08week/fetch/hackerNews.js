'use strict';
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
    res.json().then((storyIds) => {
      storyIds.slice(0, 10).forEach((storyId) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
          res.json().then((story) => {
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
});
