'use strict';

var request = new Request('https://randomuser.me/api/?results=10');

fetch(request).then(function(response) {
  return response.json().then(function(json) {
    console.dir(json);
  });
});










//
// fetchJsonp('https://api.instagram.com/v1/users/self/media/recent/?' + window.location.hash.split('#')[1],
//   method: 'GET',
// }).then((response) => {
//   response.json().then((json) => {
//     json.data.forEach((photo) => {
//       const img = document.createElement('img');
//       img.src = photo.images.standard_resolution.url;
//       document.querySelector('#fetch').appendChild(img);
//     })
//   });
// });

// fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
//   method: 'GET'
// }).then((response) => {
//   response.json().then((storyIds) => {
//     storyIds.forEach((storyId) => {
//       fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((response) => {
//         response.json().then((story) => {
//           const a = document.createElement('a');
//           a.href = story.url;
//           a.innerText = story.title
//           const div = document.createElement('div');
//           div.appendChild(a);
//           document.querySelector('#fetch').appendChild(div);
//         })
//       })
//     })
//   });
// });
