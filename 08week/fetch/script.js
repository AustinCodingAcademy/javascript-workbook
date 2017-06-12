'use strict';
document.addEventListener('DOMContentLoaded', () => {
//create node function
  function createNode(element) {
    return document.createElement(element);
  }

//append node function
  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://randomuser.me/api/?results=10';

  fetch(url)
  .then((resp) => resp.json())//transform the data to json
  .then(function(data) {
    let authors = data.results; //Get results
    return authors.map(function(author){
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })

  })
  .catch(function(error) {

  });
});

  // fetch('https://swapi.co/api/planets/1/', {
  //   mode: 'cors'
  // })
  // .then((res) => {
  //
  //       console.log(res);// fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
  //       //   res.json().then((story) => {
  //           // const li = document.createElement('li');
  //           // const a = document.createElement('a');
  //           // a.href = name.url;
  //           // a.innerText = name;
  //           // li.appendChild(a);
  //           // document.getElementById('top-stories').appendChild(li);
  //         });
  //       });
