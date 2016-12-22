
'use strict';

$(document).ready(function () {
  //Your code here
  //Spec 1.1
  //Using jQuery to make an AJAX call, insert a list of links into #posts
  //using JavaScript forEach with the "description" of each gist as the text.
  //$.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    $.ajax('https://api.github.com/users/bradleycuccio/gists', {

    success: function (posts) {
      posts.forEach(function (post) {
          //Spec 1.2 - Within each loop, write an if condition to insert only
          //gists that start with a '#post' in the "description". After filtering, remove the '#post' from the title
          if (post.description.includes('#post')) {
            var removingPost = post.description.slice(6);
            // Spec 1.3 - Set the href attribute on each link to "#", and a "data-url" attribute equal to the "url" value.
            var contentOfPost = '<ul><li><a href="#" data-url="' +
              post.url + '">' + removingPost +
              '</a></li></ul>';
            $('#posts').append(contentOfPost);
          }
        })
        //Spec 2 - After the links are inserted, add a click listener, and prevent the default event from occuring.
        //Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
      $('#posts a').click(function (postClick) {
        postClick.preventDefault();
        $.ajax($(this).data('url'), {

          success: function (postContent) {
            // Spec 3 - Insert the "content" of the file named post.md into #post.
            var content = postContent.files['post.md'].content;
            // Spec 3.1 - Since "content" is written in Markdown, use the Marked.js library to convert the
            //content to html. Simply call marked() on your content. e.g. marked(content).
            $('#post').html(marked(content));
            // Spec 4 - After inserting your content, make another ajax call using the "comments_url",
            //and insert the ["user"]["login"] and "body" in a list in #comments.
            $.ajax(postContent.comments_url, {

              success: function (commentResponse) {
                commentResponse.forEach(function (comment) {
                  var postComment = '<ul><li>' + comment.body +
                    '</li><li>' + comment.user.login +
                    '</li></ul>';
                  $('#comments').empty().append(postComment);
                })
              }
            })
          }
        })
      })
    }
  })
});