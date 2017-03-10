'use strict';

$(document).ready(function() {
  var pathToGistBlog = 'http://127.0.0.1:8000/apps/11gist-blog/api/gists.json';
  var $posts = $('#posts');
  var $post = $('#post');

  $.ajax(pathToGistBlog, {
		success: function(response) {
      response.forEach(function(post) {
        if (post.description.startsWith('#post')) {
          var $hashTag = '#post ';
          var postTitle = post.description.substring(6);
          console.log(postTitle);
          var postListData = {
              url: post.url,
              title: postTitle
          };
          $('#posts').append(`<li> ${postTitle} </li>`);
        }
      });
    }
  });


  // $.ajax(pathToGistBlog, {
  //   success: function(response) {
  //     // console.log(response.created_at);
  //     // console.log(response.user);
  //     response.forEach(function(post){
  //           console.log(post.description);
  //           $('#post').append(post.description);
  //         })
  //   }
  // });

  // $("#posts").text("new heading");

});

// response.forEach(function(user){
//       console.log(user.name);
//     })
