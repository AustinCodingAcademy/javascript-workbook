'use strict';


$(document).ready(function() {

  // Spec 1.1 - Using jQuery to make an AJAX call,
  $.ajax('https://api.github.com/users/ssfiero/gists', {
    success: function(posts) {
      // Spec 1.1 - insert a list of links into #posts using JavaScript forEach...
      posts.forEach(function(post) {
        // Spec 1.2 - Within each loop, write an if condition to insert only gists that start with a '#post' in the "description".
        if (post.description.includes('#post')) {
          // Spec 1.2 - After filtering, remove the '#post' from the title.
          var postRemoved = post.description.slice(6);
          // Spec 1.3 - Set the href attribute on each link to "#",
          // Spec 1.3 - and a "data-url" attribute equal to the "url" value.
          // Spec 1.1 - with the "description" of each gist as the text.
          var postDetail = '<ul><li><a href="#" data-url="' + post.url + '">' + postRemoved + '</a></li></ul>';
          //  Adds posts to the list
          $('#posts').append(postDetail);
        }
      })

      // Spec 2 - After the links are inserted, add a click listener,
      $('#posts a').click(function(postClickResponse) {
        // Spec 2 - and prevent the default event from occuring.
        postClickResponse.preventDefault();
        // Spec 2 - Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
        $.ajax($(this).data('url'), {
          success: function(postContentResponse) {
            // Spec 3 - Insert the "content" of the file named post.md into #post.
            var content = postContentResponse.files['post.md'].content;
            // Spec 3.1 - Since "content" is written in Markdown, use the Marked.js library to convert the content to html.
            // Spec 3.1 - Simply call marked() on your content. e.g. marked(content).
            $('#post').html(marked(content));

            // Spec 4 - After inserting your content, make another ajax call using the "comments_url",
            $.ajax(postContentResponse.comments_url, {
              success: function(commentResponse) {
                commentResponse.forEach(function(comment) {
                  // Spec 4 - and insert the ["user"]["login"] and "body" in a list in #comments.
                  var postComment = '<ul><li>' + comment.body + '</li><li>' + comment.user.login + '</li></ul>';
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
