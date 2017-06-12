'use strict';

// fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
//   res.json().then((storyIds) => {
//     storyIds.forEach((storyId) => {
//       fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
//         res.json().then((story) => {
//           console.log(story);
//         })
//       });
//     });
//   });
// });

var x = fetch('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=05599cd8bc0ee72377fba87fd89993ba&user_id=greg.devany&format=json');
 console.log(x);
